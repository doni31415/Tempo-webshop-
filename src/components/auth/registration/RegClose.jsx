import krestik from './../../../assets/krestik-regis.png'


const RegClose = (props) => {
  return (
    <div>
        <div className="krestik" onClick={() => props.closeModal({type:"modal", active: "false"})}><img className='krest' src={krestik} alt="" /></div>
        
        <div><h1 className='registration'>Регистрация</h1></div>
    </div>
  )
}

export default RegClose