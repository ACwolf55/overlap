import React from 'react'
import { Header } from './Header'
import { Nav } from './Nav'

export const VendorHome = () => {

  const vendorEmail = sessionStorage.getItem("email");


    
  return (

    <div> 
      <Header/>
      <Nav />
        
        <h3>VendorHome</h3>
        <h3>Welcome {vendorEmail}</h3>
        
        </div>
  )
}
