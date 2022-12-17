import React from 'react'
import { Header } from './Header'
import { Nav } from './Nav'

const MemberHome = () => {

  const memberEmail = sessionStorage.getItem("email");


  return (
    <div>
        <Header/>
      <Nav />
      <h2>Member Home</h2>
    <h2>Welcome {memberEmail}</h2>
    </div>
  )
}

export default MemberHome
