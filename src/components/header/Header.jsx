import { useState } from 'react'

import './head.css'

import headIcon from '../../assets/head.png'
import headSearch from '../../assets/head-search.svg'
import like from '../../assets/like.svg'
import user from '../../assets/user.png'
import busket from '../../assets/busket.png'
import burger from '../../assets/burger.png'


function Header() {
  return ( 
    <>
    <div className="header">
        <h2 className="header-icon">
            <img src={headIcon} alt="" />
        </h2>
        <div className="header-bar">
          <div className="header-search">
              <input type="text" />
              <img src={headSearch} alt="" />
          </div>
          <nav className="header-nav">
            <img src={like} alt="" />
            <img src={user} alt="" />
            <img src={busket} alt="" />
          </nav>
       </div>
    </div>
    <div className="header-xs">
      <img src={burger} alt="" />
      <img src={headIcon} alt="" />
    </div>
  </>
  )
}

export default Header
