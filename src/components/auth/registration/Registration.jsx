import React from 'react'

import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import RegisKrestik from './RegClose'
import RegButton from './RegButton'
import fioIcon from "./../../../assets/fio-icon.png"
import emailIcon from "./../../../assets/e-mail-icon.png"
import phoneIcon from "./../../../assets/phone-icon.png"
import privacyIcon from "./../../../assets/privacy-icon.png"
import Input from './Input'

const schema = yup.object({
    username: yup
    .string()
    .required("Username is a required field")
    .min(2, "Username must be at least 2 characters")
    .max(15, "Username must be at most 15 characters"),
    phone: yup
    .string()
    .required("Phone number is a required field")
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\ \.]?[0-9]{3}[-\ \.]?[0-9]{4,6}$/,'Phone number is not valid, use 0-9 numbers.'),
    email: yup
    .string()  
    .required("Email is a required field")
    .email("Email is not valid"),
    password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(15, "Password must be at most 15 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must be match")

  })
  

const Registration = (props) => {
  const {
     handleSubmit,
     register,
     formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors);

  const  formSubmit = (data) =>{
    console.log(data);
  }

  return (
    <div className='sign-up'>
      <RegisKrestik closeModal={props?.closeModal}/>
      <form action='' onSubmit={handleSubmit(formSubmit)}>
        <Input 
            id="username" 
            label="ФИО" 
            type="text" 
            placeholder  ="        ФИО" 
            icon = {fioIcon}
            register = {{...register("username")}}
            errorMessage={errors.username?.message}/>
            
            
        <Input 
            id="email" 
            label="     E-mail" 
            type="email" 
            placeholder="        Введите e-mail" 
            icon={emailIcon}
            register = {{...register("email")}}
            errorMessage={errors.email?.message}/>
        <Input 
            id="phone" 
            label="     Телефон" 
            type="phone" 
            placeholder="        0 XXX XXX XXX" 
            icon={phoneIcon}
            register = {{...register("phone")}}
            errorMessage={errors.phone?.message}/>
        <Input 
            id="password" 
            label="     Создать пароль" 
            type="password" 
            placeholder="        Введите пароль" 
            icon={privacyIcon}
            register = {{...register("password")}}
            errorMessage={errors.password?.message} />
        <Input 
            id="confirmPassword" 
            label="     Подтвердить пароль" 
            type="password" 
            placeholder="        Введите пароль" 
            icon={privacyIcon}
            register = {{...register("confirmPassword")}}
            errorMessage={errors.confirmPassword?.message}/>
        <RegButton/>
      </form>
    </div>
  )
}

export default Registration

// import {useForm} from "react-hook-form";

// const Registration = (props) => {

//     const {register, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = async data => {
//         console.log(data)
//     }

//     console.log(errors)

//     return (
//         <div className="form-modal">
//             <div className="title-modal">Регистрация</div>
//             <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-input">
//                     <label htmlFor="firstName">Имя:</label>
//                     <input 
//                         type="text" 
//                         name="firstName" 
//                         placeholder="Введите ваше имя" 
//                         {...register('firstName', {
//                             required: "Параметр обязателен", 
//                             maxLength: {
//                                 value: 20,
//                                 message: 'Ваше имя должно быть меньше 20 символов'
//                             }, 
//                             minLength: {
//                                 value: 3,
//                                 message: 'Ваше имя должно быть больше 3 символов'
//                             } 
//                         })}
//                     />
//                     {errors.firstName && <span className="error" role="alert">{errors.firstName?.message}</span>}
//                 </div>
//                 <div className="form-input">
//                     <label htmlFor="email">Email: </label>
//                     <input 
//                         type="text" 
//                         name="email" 
//                         placeholder="Введите почту"
//                         {...register("email", {
//                             required: "Параметр обязателен",
//                             pattern: {
//                               value: /\S+@\S+\.\S+/,
//                               message: "Ваш email не подходит под нужный формат"
//                             }
//                         })}
//                     />
//                     {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
//                 </div>
//                 <div className="form-input">
//                     <label htmlFor="login">Login: </label>
//                     <input 
//                         type="text" 
//                         name="login" 
//                         placeholder="Введите логин"
//                         {...register("login", {
//                             required: "Параметр обязателен",
//                             pattern: {
//                               value: /[A-Za-z]/,
//                               message: "Логин должен содержать только латинские символы"
//                             },
//                             maxLength: 20, 
//                             minLength: 3
//                         })}
//                     />
//                     {errors.login && <span className="error" role="alert">{errors.login?.message}</span>}
//                 </div>
//                 <div className="form-input">
//                     <label htmlFor="password">Пароль: </label>
//                     <input 
//                         type="password" 
//                         name="password" 
//                         placeholder="Введите пароль"
//                         {...register("password", {
//                             required: "Параметр обязателен",
//                             minLength: {
//                               value: 5,
//                               message: "Минимальная длина пароля 5 символов"
//                             }
//                           })}
//                     />
//                     {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
//                 </div>
//                 <div className="form-input">
//                     <label htmlFor="cpassword">Повторите пароль: </label>
//                     <input 
//                         type="password" 
//                         name="cpassword" 
//                         placeholder="Повторите пароль"
//                         {...register("cpassword", {
//                             validate: (value) => {
//                                 if (watch('password') != value) {
//                                     return "Ваши пароли не совпадают";
//                                 }
//                             },
//                             required: 'Параметр обязателен'
//                         })}
//                     />
//                     {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
//                 </div>
//                 <div>
//                     <label htmlFor="submit"></label>
//                     <input type="submit" name="submit" value="Отправить"/>
//                 </div>
//             </form>
//         </div>
//     )

// };

// export default Registration