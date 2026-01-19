import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nathhirakj16@gmail.com"],
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ error: "Email failed" });
  }
}
