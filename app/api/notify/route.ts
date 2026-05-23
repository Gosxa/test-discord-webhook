import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json(
        {
          error: 'DISCORD_WEBHOOK_URL is missing'
        },
        {
          status: 500
        }
      )
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content:
          '🚀 New deploy notification from Vercel test application!'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send Discord webhook')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Webhook request failed'
      },
      {
        status: 500
      }
    )
  }
}
