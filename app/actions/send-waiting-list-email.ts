"use server"

export async function sendWaitingListEmail(data: {
  name: string
  phone?: string
  email: string
}) {
  const { name, email } = data

  // Log the submission (connect to email service later)
  console.log("New Whitepaper Download Request:", {
    name,
    email,
    submittedAt: new Date().toISOString(),
    recipient: "info@fullerip.com"
  })

  // TODO: Connect to email service to send to info@fullerip.com

  return { success: true }
}
