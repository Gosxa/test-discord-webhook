'use client'

import { useState } from 'react'

export default function HomePage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const sendTestNotification = async () => {
    try {
      setLoading(true)
      setMessage('')

      const response = await fetch('/api/notify', {
        method: 'POST'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setMessage('Discord notification sent successfully 🚀')
    } catch (error) {
      setMessage('Failed to send notification ❌')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Discord Webhook Deploy Test</h1>

        <p>
          This page is used to test Vercel deployment and Discord webhook notifications.
        </p>

        <button onClick={sendTestNotification} disabled={loading}>
          {loading ? 'Sending...' : 'Send Discord Notification'}
        </button>

        {message && <div className="message">{message}</div>}
      </div>
    </main>
  )
}
