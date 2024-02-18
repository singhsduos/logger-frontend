import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './CSS/logs.css'

const LogViewer = () => {
  const [logEntries, setLogEntries] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:4000')

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
