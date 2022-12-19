import React from 'react'
import { Header } from './Header'
import { Nav } from './Nav'
import { useNavigate } from 'react-router-dom'

export const VendorHome = () => {
  const navigate = useNavigate()

  const vendorEmail = sessionStorage.getItem("email");

  const logout =()=>{
    sessionStorage.clear()
    navigate('/')
  }
    
  return (

    <div> 
      <Header/>
      <Nav />
        
        <h3>VendorHome</h3>
        <h3>Welcome {vendorEmail}</h3>
        <button onClick={logout}>Logout</button>
        
        </div>
  )
}
