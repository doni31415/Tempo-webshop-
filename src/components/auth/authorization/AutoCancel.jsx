import React from "react";
import krestik from './../../../assets/krestik-regis.png'


const AutoCencel = (props) =>{
    return (
        <div>
            <div className="krestik" onClick={() => props.closeModal({type:"modal", active: "false"})}><img className='krest' src={krestik} alt="" /></div>
            
            <div><h1 className='registration'>Вход</h1></div>
        </div>
      )
}
export  default AutoCencel