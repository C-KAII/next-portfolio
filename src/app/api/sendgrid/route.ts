import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

interface EmailBody {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: EmailBody = await req.json();

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
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred.";
    let statusCode = 500;

    // Refine the error type
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if ((error as { statusCode?: number }).statusCode) {
      statusCode = (error as { statusCode?: number }).statusCode!;
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: statusCode }
    );
  }
}
