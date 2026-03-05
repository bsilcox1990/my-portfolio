import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message, company } = body;

  if(company) {
    return Response.json({ success: true });
  }

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bradleysilcox70@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error });
  }
}