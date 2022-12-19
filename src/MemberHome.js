import React from 'react'
import { Header } from './Header'
import { Nav } from './Nav'
import { useNavigate } from 'react-router-dom'

const MemberHome = () => {
  const navigate = useNavigate()
  const memberEmail = sessionStorage.getItem("email");

  const logout =()=>{
    sessionStorage.clear()
    navigate('/')
  }


  return (
    <div>
        <Header/>
      <Nav />
      <h2>Member Home</h2>
    <h2>Welcome {memberEmail}</h2>
    <button onClick={logout}>Logout</button>

    </div>
  )
}

export default MemberHome
