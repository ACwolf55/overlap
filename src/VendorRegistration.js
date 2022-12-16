import React,{useState,useEffect} from 'react'
import { Header } from './Header'
import { Nav } from './Nav'
import axios from 'axios'

export const VendorRegistration = () => {


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [companyName,setCompanyName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [zip,setZip] = useState('')
  const [category,setCategory] = useState('')

  useEffect(() => {
    
    console.log(email)
 
  }, [])
  

  const validateEmail = (email) => {
    console.log(email)
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const register =(e)=>{
    e.preventDefault()
    const newVendor = {
      email,password,companyName,phone,address,city,state,zip
    }
    const test = validateEmail(newVendor.email)
    console.log(newVendor)
       if (email === "") {
           alert("Please enter email");
         } else if (password.length < 6) {
           alert("Please enter password");
         } else if (test){

           axios.post('/registerVendor',{newVendor}).then((res)=>{
             console.log(res.data)
             sessionStorage.setItem("email", res.data.email);
             sessionStorage.setItem("id", res.data.id);
             alert('Registration Complete!, you can now login')
           }).catch((err)=> alert(''))
         } else {
           alert("You have entered an invalid email address!")
     }
   }






  return (
    <div>
        <Header/>
        <Nav/>
        <main>
        <div className='registration-form'>
        <h4>Complete Registration</h4> 
        <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='reg-input'></input>
        <input placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='reg-input'></input>
        <input placeholder='Company Name' onChange={(e)=>setCompanyName(e.target.value)} className='reg-input'></input>
        <input placeholder='Phone #' onChange={(e)=>setPhone(e.target.value)}className='reg-input'></input>
        <input placeholder='Address' onChange={(e)=>setAddress(e.target.value)} className='reg-input'></input>
        <div className='city-state-zip'>
        <input placeholder='city' onChange={(e)=>setCity(e.target.value)} classname='addr-input'></input>
        <input placeholder='state' onChange={(e)=>setState(e.target.value)} classname='addr-input'></input>
        <input placeholder='zip' onChange={(e)=>setZip(e.target.value)} classname='addr-input'></input>
        </div>

        <input placeholder='Category'></input>


        </div>



        </main> 
        <footer>
            <button>SKIP</button>
            <button onClick={register}>CONTINUE</button>
        </footer>
    </div>
  )
}
