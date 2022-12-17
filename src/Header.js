import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  return (
  <header onClick={()=>navigate('/')}>
      <img id='overlap_logo' src='/overlap_logo.png'></img>
      <h1>OVERLAP</h1>
      <div id='profile_logo'></div>      
  </header>
  )
}
