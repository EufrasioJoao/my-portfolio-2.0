import { createTransport } from "nodemailer";

function getTransporter() {
  return createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMT_EMAIL,
      pass: process.env.SMT_PASSWORD,
    },
  });
}

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMT_EMAIL}>`,
    to: "eufrasiojoao00@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="border-bottom: 1px solid #eee; padding-bottom: 12px;">New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
      </div>
    `,
  });
}
