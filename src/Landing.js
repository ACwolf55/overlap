
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Nav } from './Nav'
import { Header } from './Header'
import Modal from './Modal'

export const Landing = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
    const [visible,setVisible] = useState(false)
    const [PopUp,setPopUp] = useState(false)
    const [isMember,setIsMember] = useState(true)

    useEffect(()=>{
      // let email = sessionStorage.getItem("email");
      // console.log(email)
      // if(email!==null){
      //   navigate('/Profile')
      // }
  
    },[])

    const togglePass=(e)=>{
      e.preventDefault()
      setVisible(prev=>!prev)
    }


    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
 
    const loginMember =(e)=>{
      e.preventDefault()
        if (email === "") {
            alert("Please enter email");
          } else if (password.length < 6) {
            alert("password must be atleast 6 characters");
          } else {
        axios.post('/loginMember',{email,password}).then((res)=>{
          console.log(res.data)
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("id", res.data.id);


            navigate('/member-home')
        }).catch((err)=> alert(err.response.request.response))}
    }

    const loginVendor =(e)=>{
      e.preventDefault()
        if (email === "") {
            alert("Please enter email");
          } else if (password.length < 6) {
            alert("password must be atleast 6 characters");
          } else {
        axios.post('/loginVendor',{email,password}).then((res)=>{
          console.log(res.data)
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("id", res.data.id);


            navigate('/member-home')
        }).catch((err)=> alert(err.response.request.response))}
    }


  return (
    <div id='Landing'>
      <Header/>
      <Nav/>
        <main>

        <div className='auth-box'>
          <div className='login-form'>
        {/* <h4>Log in</h4> */}
        {isMember 
        ? 
        <div className='member-tab'>
          <div className='tabs'>
          <h4 className='member-click' onClick={()=>setIsMember(true)}>Member</h4>
          <div className='tab-divider'></div>
            <h4 className='vendor-click' onClick={()=>setIsMember(false)}>Vendor</h4>
          </div>
  <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className='email'
            onChange={(e) => setEmail(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <div className='password-wrapper'>
          <input
            type={visible ? "text" : "password" }
            name="password"
            placeholder="password"
            className='password'
            onChange={(e) => setPassword(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <button className='show-password-btn' onClick={togglePass}>
            { visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible /> }
          </button>
          </div>
        </label>
        <div className='log-reg-btns'>
       <button onClick={loginMember} style={{boxShadow:'black 1px 1px 2px', marginRight:'5px',marginTop:'5px'}}>Login</button>
      
       </div>
        </div>
        :
        <div className='vendor-tab'>
            <div className='tabs'>
            <h4 className='member-click' onClick={()=>setIsMember(true)}>Member</h4>
            <div className='tab-divider'></div>
            <h4 className='vendor-click' onClick={()=>setIsMember(false)}>Vendor</h4>
          </div>
  <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className='email'
            onChange={(e) => setEmail(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <div className='password-wrapper'>
          <input
            type={visible ? "text" : "password" }
            name="password"
            placeholder="password"
            className='password'
            onChange={(e) => setPassword(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <button className='show-password-btn' onClick={togglePass}>
            { visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible /> }
          </button>
          </div>
        </label>
        <div className='log-reg-btns'>
       <button onClick={loginVendor} style={{boxShadow:'black 1px 1px 2px', marginRight:'5px',marginTop:'5px'}}>Login</button>
      
       </div>
        </div>
        }
      

     
      </div>

      <h3 className='or'>or</h3>

      <div className='reg-form'>
      <h4>Create an account</h4>
      <button onClick={()=>setPopUp(true)}>Register</button>

      <Modal open={PopUp} onClose={() => setPopUp(false)}>
          
        </Modal>

      </div>
        </div>


        </main>
    </div>
  )
}
