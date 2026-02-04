"use server"

export async function sendContactEmail(data: {
  name: string
  email: string
  organization: string
  message: string
}) {
  const { name, email, organization, message } = data

  // Log the submission (connect to email service later)
  console.log("New Contact Form Submission:", {
    name,
    email,
    organization,
    message,
    submittedAt: new Date().toISOString(),
    recipient: "info@fullerip.com"
  })

  // TODO: Connect to email service to send to info@fullerip.com

  return { success: true }
}
