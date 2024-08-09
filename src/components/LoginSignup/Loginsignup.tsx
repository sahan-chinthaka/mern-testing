import React from 'react'
import './Loginsignup.css'
import username_img from '../Assests/username_img.png'
import password_img from '../Assests/password_img.png'
import email_img from '../Assests/email_img.png'
import SwitchExample from '../Radiobut'

export const LoginSignup = () => {

const[action, setAction] = React.useState('sign up');

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={username_img} alt="" />
          <input type="username" placeholder='Full Name' />
        </div>}
        
        <div className="input">
          <img src={email_img} alt="" />
          <input type="email" placeholder='email' />
        </div>
        <div className="input">
          <img src={password_img} alt="" />
          <input type="password" placeholder='password' />
        </div>
        {action ==="Login" ? null :<div className="input">
          <img src={password_img} alt="" />
          <input type="password" placeholder='confirm password' />
        </div>  }
        
      </div>
      {action ==="sign up" ? null : <div className="forgot_password">Forgot Password?<span>Click here</span></div>}
      <div className='switch'>
      {action ==="Login" ? null : <SwitchExample  label="Seller"/>}
      {action === "Login" ? null : <SwitchExample label="Buyer" />}
      </div>
     
      <div className="submit-container">
       
       <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('sign up')}>Sign Up</div> 
       <div className={action === 'sign up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')} >Login</div>
        
      </div>
    </div>
  )
}

export default LoginSignup