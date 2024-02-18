import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './CSS/logs.css'
const backend_url = 'https://logger-backend-c0zr.onrender.com/'

const LogViewer = () => {
  const [logEntries, setLogEntries] = useState([])

  useEffect(() => {
    const socket = io(backend_url)

    socket.on('init', initialLogEntries => {
      setLogEntries(initialLogEntries)
    })

    socket.on('update-log', logEntries => {
      setLogEntries(logEntries)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className='container'>
      {logEntries.map((logEntry, index) =>
        <div key={index} className='log-entry'>
          {logEntry}
        </div>
      )}
    </div>
  )
}

export default LogViewer
