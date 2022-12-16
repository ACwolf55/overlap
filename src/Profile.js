import React,{useState} from 'react'
import { Header } from './Header'
import { Nav } from './Nav'

export const Profile = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [organization,setOrganization] = useState('')
    const [address,setAddress] = useState({
        street:'',
        city:'',
        state:'',
        zip:''
    })
    const [about,setAbout] = useState('')



  return (
    <div>
        <Header/>
        <Nav/>






    </div>
  )
}
