import './scss/login.scss'
import {useState} from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

function Login()
{
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput,setPasswordInput] = useState("")
    
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }
    return(
        <>
        <div className='container'>
                <div className='wrapper'>

{/* header starts here*/}

                <div className='header'>
                    <h1>Hello Champ!</h1>
                    <p>Please Login into your account</p>
                </div>

 {/* form field starts here */}

 <form action="#" method='post'>
                <input type="text" className='email' id='email' placeholder='Email address' required/>
                <input type={passwordType} className='password' id='password' placeholder='Password' onChange={handlePasswordChange} value={passwordInput} required/>
              {passwordType==="password"
                     ? <span onClick={togglePassword}><BiSolidShow className='passicons' />Show</span>
                     :<span onClick={togglePassword}><BiSolidHide className='passicons'  onClick={togglePassword}/>Hide</span> }
                
{/* Buttons start here */}

                <div className='buttons'>
                <input type='submit' className='loginbtn' value='Login'/>
                </div>
                </form>

{/* forgot password section*/}

            <div className='forgot-pass'>
                <p><a href="#">Forgot password?</a></p>
            </div>
            </div>
        </div>

        </>
    )
}
export default Login