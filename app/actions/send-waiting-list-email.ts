"use server"

export async function sendWaitingListEmail(data: {
  name: string
  phone: string
  email: string
}) {
  const { name, phone, email } = data

  // Log the submission (connect to email service or database later)
  console.log("New PCT Portal Waiting List Signup:", {
    name,
    phone,
    email,
    submittedAt: new Date().toISOString(),
  })

  // TODO: Connect to email service to send notifications to info@fullerip.com

  return { success: true }
}
