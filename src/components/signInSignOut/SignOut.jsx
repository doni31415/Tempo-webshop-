import React from 'react'

const SignOut = () => {
  return (
    <div><div>
    <div className=''>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src={localStorage.getItem('profilePic')}/>
  </div></div>
  )
}

export default SignOut