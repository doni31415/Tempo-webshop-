import { TextField } from '@mui/material'
import React from 'react'

const InputPassRec = ({id, label, label2, placeholder, type, icon, eyeIcon, register, errorMessage}) => {
  return (
    <div className=''>
        <div className="email-code">      
            <label className='text-code' htmlFor={id}>{label2}{label}</label>
            <img className="icon2" src={icon} alt="" />
            <TextField className="input-code" type={type} id={id} placeholder={placeholder} {...register}  variant="standard" />
            <img className="icon-eye" src={eyeIcon} alt="" />
            <span>{errorMessage}</span>
        </div>
    </div>
  )
}

export default InputPassRec