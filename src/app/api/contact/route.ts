import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const CONTACT_EMAIL = process.env.CONTACT_EMAIL
const SENDER_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string
      email?: string
      message?: string
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    if (!resend || !CONTACT_EMAIL) {
      return NextResponse.json(
        {
          error: 'Der E-Mail-Versand ist hier nicht aktiv. Bitte nutze die E-Mail-Adresse auf der Seite.',
          code: 'SERVICE_NOT_CONFIGURED',
        },
        { status: 503 }
      )
    }

    const text = [
      `Neue Nachricht über das Portfolio:`,
      '',
      `Name: ${name}`,
      `E-Mail: ${email}`,
      '',
      'Nachricht:',
      message,
    ].join('\n')

    await resend.emails.send({
      from: SENDER_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Neue Nachricht von ${name}`,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in /api/contact', error)
    return NextResponse.json(
      { error: 'Beim Versenden der Nachricht ist ein Fehler aufgetreten.' },
      { status: 500 }
    )
  }
}

