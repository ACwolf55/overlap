
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
 
    const login =(e)=>{
      e.preventDefault()
        if (email === "") {
            alert("Please enter email");
          } else if (password.length < 6) {
            alert("password must be atleast 6 characters");
          } else {
        axios.post('/login',{email,password}).then((res)=>{
          console.log(res.data)
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("id", res.data.id);


            navigate('/Home')
        }).catch((err)=> alert('Dont recognize this username or password'))}
    }


  return (
    <div id='Landing'>
      <Header/>
      <Nav/>
        <main>

        <div className='auth-box'>
          <div className='login-form'>
        <h4>Log in</h4>
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
       <button onClick={login} style={{boxShadow:'black 1px 1px 2px', marginRight:'5px',marginTop:'5px'}}>Login</button>
      
       </div>

     
      </div>

      <p><i>or</i></p>

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
