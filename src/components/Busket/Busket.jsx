import tick from "../../assets/tick circle_.png";
import emptyBusket from "../../assets/empty-busket.gif";
import React, { useContext, useState, useEffect } from 'react';
import { ContextBox } from '../../App';
import "./Busket.css";

const Busket = () => {
    const [box, setBox] = useContext(ContextBox);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let itemsCount = 0;
        let totalPrice = 0;

        for (let i = 0; i < box.length; i++) {
            const count = box[i].count || 1;
            itemsCount += count;
            totalPrice += Number(box[i].price) * count;
        }

        setTotalItems(itemsCount);
        setTotalPrice(totalPrice);
    }, [box]);

    const handleIncrease = (index) => {
        const updatedBox = [...box];
        updatedBox[index].count = (updatedBox[index].count || 1) + 1;
        setBox(updatedBox);
    };

    const handleDecrease = (index) => {
        const updatedBox = [...box];

        if (updatedBox[index].count > 1) {
            updatedBox[index].count -= 1;
            setBox(updatedBox);
        }
    };

    const handleRemove = (index) => {
        const updatedBox = [...box];
        updatedBox.splice(index, 1)
        setBox(updatedBox)

        updatedBox.length == 0 ? localStorage.removeItem("box") : []
    };

    const handleClear = () => {
        setBox([]);
        localStorage.removeItem("box");
    };

    const allProducts = box.map((item, index) => (
        <div className="bucketItem" key={index}>
            <div className="tick">
                <button onClick={() => handleRemove(index)}>
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
                        {item.price} сом
                    </div>
                    <div className="productCounter">
                        <button className='decrease' onClick={() => handleDecrease(index)}> - </button>
                        <input className='count' type="text" value={item.count || 1} readOnly />
                        <button className='increase' onClick={() => handleIncrease(index)}> + </button>
                    </div>
                    <div className="productPrice">
                        {item.price * (item.count || 1)} сом
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    ));

    return (
        <div>
            {box?.length > 0 ? (
               <div className="cart-info">
                <h1 className="total-item">Total items: {totalItems}</h1>
                <h1 className="total-price">Total price: {totalPrice} сом</h1>
                { allProducts }</div> 
            ) : ( <div className="colorchik">
            <div className="cart-info">
                <h1 className="total-item">Total items: {totalItems}</h1>
                <h1 className="total-price">Total price: {totalPrice} сом</h1>
            </div>
            <div className="text-center">
                <h3 style={{paddingTop: "50px"}}>The busket is empty 👀 </h3>
                <p>
                    Most likely, you have not chosen anything. To order, go to the Catalog page.
                </p>
                <img src={emptyBusket} alt="" />
                <br/>
            </div>
            
<div className="clear-button">
<button className="clear-all" onClick={handleClear}>Clear all Cart</button>

</div>
 </div>
            )}

        </div>
    );
};

export default Busket;

