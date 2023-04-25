

import tick from "../../assets/tick circle_.png"






import React, { useContext, useState } from 'react';
import { ContextBox } from '../../App';
import "./Busket.css"

const Busket = (props) => {
  const [box, setBox] = useContext(ContextBox)
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const allProducts = box.map((item, index) => {
    return (
      <div className="bucketItem" key={index}>
        <div className="tick">
          <button>
            <img src={tick} alt="" />
          </button>
        </div>
        <div className="bucketPhoto">
          <img className='busket-img' src={item.img} alt="" />
        </div>
        <div className="aboutProduct">
          <div className="productName">
            {item.name}
          </div>
          <div className="productInfo">
            <div className="productPrice">
              {item.priсe} сом
            </div>
            <div className="productCounter">
              <button className='decrease'>-</button>
              <input className='count' type="text" value={1} />
              <button className='increase'>+</button>
            </div>
            <div className="productPrice">
              {item.price}
            </div>
          </div>
        </div>
      </div>
    )

  })

  React.useEffect(() => {
    let itemsCount = 0;
    let totalPrice = 0;
    for (let i = 0; i < box.length; i++) {
      itemsCount += 1;
      console.log(box[i].price)
      totalPrice += Number(box[i].price);
    }
    setTotalItems(itemsCount);
    setTotalPrice(totalPrice);
  }, [box]);

  return (
    <>
      <div className="cart-info">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice} сом</p>
      </div>
      {allProducts}
    </>
  );
};

export default Busket;
