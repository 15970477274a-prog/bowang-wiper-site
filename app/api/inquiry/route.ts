import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use environment variable only. Never hardcode credentials in source code.
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured on the server.");
  }
  return new Resend(apiKey);
}

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
// Simple in-memory rate limit: max 5 submissions per IP per 10 minutes.
// Note: on serverless platforms this is per-instance; pair with a real
// CAPTCHA (e.g. Cloudflare Turnstile) for production-grade protection.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // Basic IP rate limiting
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, whatsapp, quantity, product, message, website } = body;

    // Honeypot: bots fill hidden fields; real users never do.
    if (website) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Server-side validation with length limits
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and detailed message are required." },
        { status: 400 }
      );
    }
    if (
      typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
      name.length > MAX_FIELD_LENGTH ||
      (company && company.length > MAX_FIELD_LENGTH) ||
      (whatsapp && whatsapp.length > MAX_FIELD_LENGTH) ||
      (product && product.length > MAX_FIELD_LENGTH) ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json({ error: "Invalid input length." }, { status: 400 });
    }

    // Escape all user input before embedding into email HTML (prevents HTML injection)
    const e = (v: string) => escapeHtml((v || "").toString());
    const eName = e(name);
    const eEmail = e(email);
    const eCompany = e(company);
    const eProduct = e(product);
    const eWhatsapp = e(whatsapp);
    const eQuantity = e(quantity);
    const eMessage = e(message).replace(/\n/g, "<br/>");

    const htmlBody =
      '<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">' +
        '<div style="background-color: #0f172a; padding: 20px; color: #ffffff; text-align: center;">' +
          '<h2 style="margin: 0; font-size: 20px;">Lelion Autopart Inquiry Notification</h2>' +
        '</div>' +
        '<div style="padding: 30px; color: #334155; line-height: 1.6;">' +
          '<p style="margin-bottom: 25px;">You have received a new business lead from the website contact form.</p>' +
          '<table style="width: 100%; border-collapse: collapse;">' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Buyer Name:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">' + eName + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Business Email:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:' + eEmail + '">' + eEmail + '</a></td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Company:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">' + (eCompany || "N/A") + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Product:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">' + eProduct + '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">WhatsApp / Phone:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="https://wa.me/' + (eWhatsapp ? eWhatsapp.replace(/[^0-9]/g, "") : "8618967886795") + '">' + (eWhatsapp || "N/A") + '</a></td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Est. Quantity:</td>' +
              '<td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">' + (eQuantity || "N/A") + '</td>' +
            '</tr>' +
          '</table>' +
          '<div style="margin-top: 25px;">' +
            '<p style="font-weight: bold; margin-bottom: 10px;">Message / Requirements:</p>' +
            '<div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">' +
              eMessage +
            '</div>' +
          '</div>' +
          '<div style="margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 20px; font-size: 12px; color: #94a3b8;">' +
            '<p>Sent at: ' + new Date().toLocaleString() + '</p>' +
            '<p>Source: lelionautopart.com Inquiry System</p>' +
          '</div>' +
        '</div>' +
      '</div>';

    const emailResponse = await getResend().emails.send({
      from: "Lelion Website <onboarding@resend.dev>",
      to: process.env.INQUIRY_RECIPIENT_EMAIL || "15970477274a@gmail.com",
      subject: "New B2B Inquiry: " + eProduct + " from " + eName,
      html: htmlBody,
    });

    console.log("Email sent successfully:", emailResponse);

    return NextResponse.json(
      { success: true, message: "Inquiry saved and notification sent!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Inquiry system error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process the inquiry." },
      { status: 500 }
    );
  }
}
