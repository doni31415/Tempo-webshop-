import { TextField } from "@mui/material"




const Input = ({id, label, placeholder, type, icon, register, errorMessage}, props) => {


  return (
      <div>
        <div className="input-group">
          
          <div className="icon-input">      
            <label htmlFor={id} className='text-reg'>{label}</label>
            <img className="icon" src={icon} alt="" />
            <TextField className="input-texare" type={type} id={id} placeholder={placeholder} {...register}  variant="standard" />
            <span className="error-message">{errorMessage}</span>
          </div>
          
          
        </div>
        
      </div>
    
    
    
 
  )
}

export default Input