import React from 'react'
import { TextField } from "@mui/material"
import facebookIcon from "./../../../assets/facebook-icon.png"
import appleIcon from "./../../../assets/apple-icon.png"
import googleIcon from "./../../../assets/google-icon.png"
import {ModalContext} from '../../../App'
import {useContext} from 'react'
import {auth, provider} from '../../../firebase/Firebase'
import {signInWithPopup} from 'firebase/auth'
import {useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { signInWithGoogle } from '../../../firebase/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from '../../signInSignOut/SignIn'
import SignOut from '../../signInSignOut/SignOut'



const AuthButtons = (props) => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [user, loading] = useAuthState(auth)

  console.log(props)

  async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, provider)
        console.log(props)
        props.closeModal({ type: "modal", active: "false"})
      } catch (error) {
          console.log(error)
      }
    }

    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

  //   const router = useRouter();
  // const { isLoggedOut, logout } = client.auth.useLogout();
  // useEffect(() => {
  //   if (isLoggedOut !== undefined) {
  //     return;
  //   }

  //   // Initiate the logout process.
  //   // This could also be called on a button click, for example, in a nav menu.
  //   logout();
  // }, [isLoggedOut, logout]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // successful logout
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const [doni, setDoni] = useContext(ModalContext)

  const modalState = {
      props: doni,
      dispatch: setDoni,
  }

  if (user) {
    return (
      <div>
        <div className=''>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem('profilePic')}/>
      </div>
    )
  } else {
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
}

export default AuthButtons