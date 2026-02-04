"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWaitingListEmail(data: {
  name: string
  phone: string
  email: string
}) {
  try {
    const { name, phone, email } = data

    await resend.emails.send({
      from: "Fuller IP PCT Portal <onboarding@resend.dev>",
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
