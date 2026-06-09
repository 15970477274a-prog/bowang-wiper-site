import { NextResponse } from "next/server";

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

    // Console logging for verification
    console.log("========= NEW B2B INQUIRY =========");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Buyer Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Product of Interest: ${product}`);
    console.log(`Message: ${message}`);
    console.log("===================================");

    /**
     * EXTENSION POINT FOR PRODUCTION:
     * In your production build, you can easily connect this endpoint to:
     * 1. Email Service: e.g., Nodemailer, Resend, or SendGrid to forward the inquiry directly to sales@lelionautopart.com
     * 2. Database: e.g., Supabase / Prisma to save and manage lead records.
     * 3. Instant Notification: e.g., DingTalk / WeChat Work / Telegram Group Webhook to instantly notify sales reps.
     */

    return NextResponse.json(
      { success: true, message: "Inquiry saved successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to parse or save the inquiry." },
      { status: 500 }
    );
  }
}
