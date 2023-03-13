import React from 'react'
import closepasss from "../../../assets/krestik-regis.png"
import InputPassRec from './InputPassRec'
import privacyIcon from "../../../assets/privacy-icon.png"
import iconEye from "../../../assets/eye-pass-icon.png"

const NewPassword = (props) => {
  return (
    <div className='new-password' >
        <div>
            <img className='new-pass-krestik' src={closepasss} onClick={() => props.closeModal({type:"modal", active: "false"})}/>
         <div className='new-pass'>
            <InputPassRec id="new-password" icon={privacyIcon} type="password" label2="  " label="Ввести новый пароль" placeholder="Введите пароль" eyeIcon={iconEye}/>
         </div>
         <div className='confirm-newpass'>
            <InputPassRec  id="confirm-newpass" icon={privacyIcon} type="password" label="Подтвердить новый пароль" placeholder="Введите пароль" eyeIcon={iconEye} />
         </div>
         <button className='new-pass-btn'>Войти</button>
        </div>
    </div>
  )
}

export default NewPassword