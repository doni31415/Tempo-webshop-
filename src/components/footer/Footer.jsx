import { useState } from 'react'

import './footer.css'
import telegram from '../../assets/footer/telegram.png'
import facebook from '../../assets/footer/facebook.png'
import instagram from '../../assets/footer/instagram.png'
import twitter from '../../assets/footer/twitter.png'

function Footer() {
    return ( 
    <footer className='footer'>
        <div className="footer-blocks">
            <div className="footer-block">
                <h2 className="footer-block-title">Компания</h2>
                <div className="footer-block-desc">О нас</div>
                <div className="footer-block-desc">Новости</div>
                <div className="footer-block-desc">Сотрудничество</div>
            </div>
            <div className="footer-block">
                <h2 className="footer-block-title">Покупателям</h2>
                <div className="footer-block-desc">Как оформить заказ</div>
                <div className="footer-block-desc">Способы оплаты</div>
                <div className="footer-block-desc">Условия доставки</div>
                <div className="footer-block-desc">Правила возврата</div>
            </div>
            <div className="footer-block">
                <h2 className="footer-block-title">Наши контакты</h2>
                <div className="footer-block-desc">+996 709 310 416</div>
                <div className="footer-block-desc">tempo.music@gmail.com</div>
                <div className="footer-block-desc">Киевская 129</div>
            </div>
        </div>
        <div className="footer-sub">
            <div className="footer-sub-date">
                2023 ⓒ tempo.kg
            </div>
            <nav className="footer-sub-links">
                <a className="footer-sub-link" href="#">
                    <img src={telegram} alt="" />
                </a>
                <a className="footer-sub-link" href="#">
                    <img src={facebook} alt="" />
                </a>
                <a className="footer-sub-link" href="#">
                    <img src={instagram} alt="" />
                </a>
                <a className="footer-sub-link" href="#">
                    <img src={twitter} alt="" />
                </a>
            </nav>
        </div>
    </footer>
  )
}

export default Footer
