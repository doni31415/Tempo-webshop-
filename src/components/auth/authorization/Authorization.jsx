
import React from 'react';
import AutoKrestik from "./AutoCancel"
import AuthButtons from "./AuthButtons";
import InputAuth from "./InputAuth";
import fioIcon from "./../../../assets/fio-icon.png"
import privacyIcon from "./../../../assets/privacy-icon.png"



const Authorization = (props) => {

    
  
    return (
      <div className="sign-in">
         <AutoKrestik closeModal={props?.closeModal}/>
       
          <form action="">
              <InputAuth
                id="username"
                label="Имя"
                type="text"
                placeholder="     Введите имя"
                icon = {fioIcon}
                />
              <InputAuth 
                id="password"
                label="Пароль"
                placeholder="     Введите пароль "
                type="  password"
                icon = {privacyIcon}
                />
          </form>
          <AuthButtons closeModal={props.closeModal}/>
        
        
      </div>
      
  )

};

export default Authorization