
import { TextField} from "@mui/material"

const InputAuth = ({id, label, placeholder, type,icon},props) => {

  return(    
    <div>
      <div className='Inputs-group'>
        <div className="icons-input">
          <label htmlFor='id' className="auth-text">{label}</label>
          <img className="icon" src={icon} alt="" />
            <TextField type={type}id={id}placeholder={placeholder}variant='standard'/>
        </div>
      </div>
    </div>
          
  )
}

export default InputAuth