import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { z } from 'zod'

// Note: Ensure RESEND_API_KEY is set in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator(z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(5, "Message must be at least 5 characters")
  }))
  .handler(async ({ data }) => {
    "use server"
    try {
      const { name, email, phone, message } = data
      
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing')
        return { success: false, error: 'Server configuration error' }
      }

      const { data: resendData, error } = await resend.emails.send({
        from: 'DIGnity Contact <onboarding@resend.dev>',
        to: 'hello@dignitymedia.in',
        subject: `New Inquiry from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      })

      if (error) {
        console.error('Resend error:', error)
        return { success: false, error: error.message }
      }

      return { success: true, data: resendData }
    } catch (error: any) {
      console.error('Failed to send email:', error)
      return { success: false, error: error.message || 'Failed to send email' }
    }
  })
