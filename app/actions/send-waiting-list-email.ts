"use server"

import nodemailer from "nodemailer"

export async function sendWaitingListEmail(data: {
  name: string
  phone: string
  email: string
}) {
  try {
    const { name, phone, email } = data

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "info@fullerip.com",
      subject: "New PCT Portal Waiting List Signup",
      html: `
        <h2>New PCT Portal Waiting List Signup</h2>
        <p>A new user has joined the PCT Portal waiting list:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
