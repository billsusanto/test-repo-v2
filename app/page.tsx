'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      // Format time for Los Angeles timezone
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })
      
      // Format date for Los Angeles timezone
      const dateString = now.toLocaleDateString('en-US', {
        timeZone: 'America/Los_Angeles',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      
      setTime(timeString)
      setDate(dateString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="container">
      <div className="clock-card">
        <h1 className="title">Los Angeles Time</h1>
        <div className="time">{time}</div>
        <div className="date">{date}</div>
        <div className="timezone">Pacific Time Zone (PT)</div>
      </div>
    </main>
  )
}
