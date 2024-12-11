import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await sendgrid.send({
      to: "chambers.user@gmail.com",
      from: "chambers.user@gmail.com",
      subject: `[Lead from website] : ${body.subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <div>
            <p>Name: ${body.fullname}</p>
            <p>Email: ${body.email}</p>
            <p>Message:</p>
            <p>${body.message}</p>
            <p>Regards,<br>kobichambers.com</p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
