// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDckGC50dz-ixXpuvHK0sP2S5SbTIr9GYE",
  authDomain: "tempo-webshop.firebaseapp.com",
  projectId: "tempo-webshop",
  storageBucket: "tempo-webshop.appspot.com",
  messagingSenderId: "208739831055",
  appId: "1:208739831055:web:05192b308698484e5c827a",
  measurementId: "G-2ZE5E8VCTX"
};



const app = initializeApp(firebaseConfig); /* Инициализация firebase хранилища с определенным id конфига */
const auth = getAuth(app); /* Информация об аутентификации пользователя */
const analytics = getAnalytics(app); /* Аналитика, она пока нам не нужна */
const provider = new GoogleAuthProvider(); /* Авторизация через google */
const database = getFirestore(app); /* Информация об хранилище */

 export const signInWithGoogle =() =>{
  signInWithPopup(auth, provider).then((result)=>{
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((error) =>{
    console.log(error);
  } )
}

export {auth, provider, database} /* Экспортируем нужные нам функции для проекта */