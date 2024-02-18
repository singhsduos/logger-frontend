import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/home.css'

const Home = () => {
  return (
    <div className='btn-container'>
      <h1>Welcome to the coding world</h1>
      <Link to='/logs' className='button'>
        Let me see your logs
      </Link>
    </div>
  )
}

export default Home
