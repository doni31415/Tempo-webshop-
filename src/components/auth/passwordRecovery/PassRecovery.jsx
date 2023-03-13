
import React from 'react'
import passClose from '../../../assets/krestik-regis.png'
import InputPassRec from './InputPassRec'
import {useContext} from 'react'
import {ModalContext} from '../../../App'
import getCodeKrestik from "../../../assets/e-mail-icon.png"

const PassRecovery = (props) => {
  const [doni, setDoni] = useContext(ModalContext)
  return (
    <div className='sign-up'>
        <div className='pass-close' >
          <img  src={passClose} onClick={() => props.closeModal({type:"modal", active: "false"})}/>
        </div>
        <InputPassRec className="text-email"  id="emailcode" type="email" label="E-mail" placeholder="Введите e-mail" icon={getCodeKrestik} />
        <button className='get-code' onClick={() => setDoni({type: 'content', content: 'newpassword'})}>Получить код</button>
    </div>
  )
}

export default PassRecovery