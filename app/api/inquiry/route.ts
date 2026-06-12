import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY || "re_fByy3LsS_H9Si4faE7p175LKtTrmzRQEi");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, product, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and detailed message are required." },
        { status: 400 }
      );
    }

    // 1. Send Email Notification via Resend
    const emailResponse = await resend.emails.send({
      from: "Lelion Website <onboarding@resend.dev>", // Note: Resend requires domain verification for custom from addresses
      to: "15970477274a@gmail.com",
      subject: `New B2B Inquiry: ${product} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 20px; color: #ffffff; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">Lelion Autopart Inquiry Notification</h2>
          </div>
          <div style="padding: 30px; color: #334155; line-height: 1.6;">
            <p style="margin-bottom: 25px;">You have received a new business lead from the website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Buyer Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">\${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Business Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:\${email}">\${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">\${company || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Product:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">\${product}</td>
              </tr>
            </table>

            <div style="margin-top: 25px;">
              <p style="font-weight: bold; margin-bottom: 10px;">Message / Requirements:</p>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                \${message.replace(/\n/g, "<br/>")}
              </div>
            </div>

            <div style="margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 20px; font-size: 12px; color: #94a3b8;">
              <p>Sent at: \${new Date().toLocaleString()}</p>
              <p>Source: lelionautopart.com Inquiry System</p>
            </div>
          </div>
        </div>
      `,
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
