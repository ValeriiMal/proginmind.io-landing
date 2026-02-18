import { EmailTemplate } from "@/app/components/email-template";
import { CreateEmailOptions, Resend } from "resend";
import { ContactFormValue } from "@/app/types";

const resendKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendKey);

type SubmitBody = ContactFormValue & { email2?: string; _loadedAt?: number };

export async function POST(req: Request) {
  const body: SubmitBody = await req.json();

  if (typeof body.email2 === "string" && body.email2.trim() !== "") {
    return Response.json({ error: "Invalid" }, { status: 400 });
  }

  const loadedAt = body._loadedAt;
  if (typeof loadedAt !== "number" || Date.now() - loadedAt < 2000) {
    return Response.json({ error: "Invalid" }, { status: 400 });
  }

  const data: ContactFormValue = {
    name: body.name,
    email: body.email,
    company: body.company,
    message: body.message,
  };

  const payload: CreateEmailOptions = {
    from: "landing@proginmind.io",
    to: "info@proginmind.io",
    subject: `Landing form submit: ${data.name} - ${data.email} - ${data.company}`,
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
