import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, budget, msg } = await req.json()

  if (!name || !email || !msg) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS?.replace(/\s/g, ''),
    },
  })

  try {
    await transporter.verify()
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New inquiry from ${name}${budget ? ` — Budget: ${budget}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#8b35c0;margin-bottom:4px">New Portfolio Inquiry</h2>
          <p style="color:#888;font-size:12px;margin-top:0">Sent via portfolio contact form</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <table style="width:100%;font-size:14px">
            <tr><td style="color:#888;padding:6px 0;width:100px">Name</td><td style="color:#0d0b14;font-weight:600">${name}</td></tr>
            <tr><td style="color:#888;padding:6px 0">Email</td><td><a href="mailto:${email}" style="color:#8b35c0">${email}</a></td></tr>
            ${budget ? `<tr><td style="color:#888;padding:6px 0">Budget</td><td style="color:#0d0b14">${budget}</td></tr>` : ''}
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap">${msg}</p>
        </div>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[contact] SMTP error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
