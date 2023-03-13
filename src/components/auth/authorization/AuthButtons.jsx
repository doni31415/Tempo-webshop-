import React from 'react'
import { TextField } from "@mui/material"
import facebookIcon from "./../../../assets/facebook-icon.png"
import appleIcon from "./../../../assets/apple-icon.png"
import googleIcon from "./../../../assets/google-icon.png"
import {ModalContext} from '../../../App'
import {useContext} from 'react'
import {auth, provider} from '../../../firebase/Firebase'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'



const AuthButtons = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, provider)
        props.closeModal({ type: "modal", active:"false"})
      } catch (error) {
          console.log(error)
      }
    }



  const [doni, setDoni] = useContext(ModalContext)

  const modalState = {
      props: doni,
      dispatch: setDoni,
  }

  return (
    <div>
      <div className='auth-buttons'>
        <div>
          <div className="Auth-knopka">
          <button className='Auth-btn'>ВОЙТИ</button>
          </div>



          <div className="rem-me">
                    <input type="checkbox"/>
                   <label>Запомнить меня</label>
         </div>
         <h6 className='under-icons' onClick={() => setDoni({type:'content', content: 'passrecovery'})}>Забыли пароль?</h6>
        </div>  

        <div className='Auth-line'></div>
        
           <div>
              <h4 className='under-line'>Войти с помощью</h4>
                 <div className="social-icons">
                      <img src={facebookIcon} alt="" />
                      <img src={appleIcon} alt="" />
                      <img onClick={signInWithGoogle} src={googleIcon} alt="" />
            </div>
               <h6 className='under-icons'>Нет аккаунта?</h6>
               <div className="enter-auth"><button  ClassName="enter-auth-btn">Зарегистрироваться </button></div>
                   
          </div>
     </div>
    </div>
  )
}

export default AuthButtons