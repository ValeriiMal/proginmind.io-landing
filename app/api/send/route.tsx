import { EmailTemplate } from "@/app/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { CreateEmailOptions, Resend } from "resend";
import { ContactFormValue } from "@/app/types";

const resendKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendKey);

export async function POST(req: Request) {
  const data: ContactFormValue = await req.json();
  const payload: CreateEmailOptions = {
    from: "landing@proginmind.io",
    to: "info@proginmind.io",
    subject: "Landing form submit",
    react: (
      <EmailTemplate
        name={data.name}
        email={data.email}
        company={data.company}
        message={data.message}
      />
    ),
  };
  await resend.emails.send(payload);
  const replyPayload: CreateEmailOptions = {
    from: "no-reply@proginmind.io",
    to: data.email,
    subject: "Proginmind response",
    html: `
        <div>
            <p>Thanks for reaching out to us! We will review your message as soon as we can and respond.</p>
            <p>Best regards,</p>
            <p>Proginmind team</p>
        </div>
    `,
  };
  await resend.emails.send(replyPayload);
  return Response.json({ success: "ok" });
}
