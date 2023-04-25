import React from 'react'
import guitar from "../../assets/guitar.png"
import "./Productbuy.css"
import CashIcon from "../../assets/cash-icon.png"
import Baraban from "../../assets/baraban.png"
import Vionchel from "../../assets/guitar-unusual.png"


const ProductBuy = () => {
  return (
    <div>
        <div className="main-products">
            <div className="text-text">
            <h3 className='product-text'>Продукты</h3>
            </div>     
            <div className="products">
                <div className="product-1">
                    <a href='/details'><img className='guitar img-products' src={guitar}/></a>
                    <span className='category-text'>Струнные</span>
                    <p className='product-name'>Электрогитара Kaysen 
Stratocaster K-EG1 BK</p>
                    <div className='cash-name-icon'>
                        <span className='cash-name'>В наличии</span>
                        <img className='cash-icon' src={CashIcon}/>
                    </div>
                    <h3 className='product-price'>11500 сом</h3>
                    <button className='goto-busket-btn'>В корзину</button>
                </div>
                <div className="line"></div>
                <div className="product-2">
                <img className='baraban img-products' src={Baraban}/>
                    <span className='category-text'>Струнные</span>
                    <p className='product-name'>Бас-гитара Kaysen
Bass K-EB1-4 3TS </p>
                    <div className='cash-name-icon'>
                        <span className='cash-name'>В наличии</span>
                        <img className='cash-icon' src={CashIcon}/>
                    </div>
                    <h3 className='product-price'>14200 сом</h3>
                    <button className='goto-busket-btn'>В корзину</button>
                </div>
                <div className="line"></div>
                <div className="product-3">
                <img className='vionchel img-products' src={Vionchel}/>
                    <span className='category-text'>Струнные</span>
                    <p className='product-name'>Виолончель Sonata SCE-800 4/4</p>
                    <div className='cash-name-icon'>
                        <span className='cash-name'>В наличии</span>
                        <img className='cash-icon' src={CashIcon}/>
                    </div>
                    <h3 className='product-price'>14200 сом</h3>
                    <button className='goto-busket-btn'>В корзину</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductBuy
