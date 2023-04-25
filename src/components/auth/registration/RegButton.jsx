import React from 'react'
import facebookIcon from "./../../../assets/facebook-icon.png"
import appleIcon from "./../../../assets/apple-icon.png"
import googleIcon from "./../../../assets/google-icon.png"

import { signInWithGoogle } from '../../../firebase/Firebase'



const RegButton = () => {
  return (
    <div>
        <div className='zareg-knopka'>
        <button className='zareg-btn'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
        <div className="create-line"></div>
        <h4 className='under-line'>Войти с помощью</h4>
        <div className="social-icons">
            <img src={facebookIcon} alt="" />
            <img src={appleIcon} alt="" />
            <img onClick={signInWithGoogle} src={googleIcon} alt="" />
        </div>
        <h4 className='under-icons'>у меня есть аккаунт</h4>
        <div className="enter-reg"><button className='enter-btn'>Войти</button></div>
        {/* <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem('profilePic')}/> */}
    </div>
    
  )
}

export default RegButton