import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

 
  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Booking from ${name}`,
    text: `
New booking request

Name: ${name}
Email: ${email}

Message:
${message}
`,
  });

  await transporter.sendMail({
    from: `"Labib Consultancy" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We received your booking request",
    text: `
Hello ${name},

Thank you for contacting Labib Consultancy.

We have received your booking request and our team will contact you shortly.

Best regards,
Labib Consultancy
`,
  });

  return Response.json({
    message: "Booking sent successfully",
  });
}