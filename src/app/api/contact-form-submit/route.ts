import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

async function validateRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });
  const data = await response.json();
  return data.success && data.score > 0.5; // Ensure the score is above a reasonable threshold
}

export async function POST(req: Request) {
  try {
    const { fullname, email, subject, message, recaptchaToken } = await req.json();

    const isValidRecaptcha = await validateRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { success: false, error: "Invalid reCAPTCHA token" },
        { status: 400 }
      );
    }

    await sendgrid.send({
      to: "chambers.user@gmail.com",
      from: "chambers.user@gmail.com",
      subject: `[Lead from website] : ${subject}`,
      html: `
        <p>Name: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
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
