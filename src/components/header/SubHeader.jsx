import { useState } from 'react'

import './head.css'

function SubHeader() {
    const headerLinks = [
        {
            name: 'КАТАЛОГ',
            link: '/catalog'
        },
        {
            name: 'ДОСТАВКА'
        },
        {
            name: 'АКЦИИ'
        },
        {
            name: 'ПОД ЗАКАЗ'
        },
    ]
    return ( 
    <nav className='sub-header'>
        {headerLinks.map((i) => <a href={i.link} className='sub-header-link'> {i.name} </a>)}
    </nav>
  )
}

export default SubHeader
