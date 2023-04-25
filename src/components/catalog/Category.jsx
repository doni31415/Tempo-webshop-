import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../product/ProductBuy.css"
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../../firebase/Firebase";
import { useState } from "react";
import CashIcon from "../../assets/cash-icon.png"
import { useContext } from "react";
import {ContextBox} from "../../App"

const Category = (props) => {
    const id = useParams()
    const [products, setProducts] = useState([])
    const [box, setBox] = useContext(ContextBox)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "products"), where("idCategory", "==", id.category));
        const allProducts = await getDocs(q)
        let products = []
        allProducts.forEach(product => {
            products.push({...product.data(), id: product.id})
        })
        setProducts(products)
        console.log(products)
    }

    function addToCart(event) {
        const currentCard = event.currentTarget.closest(".card")
        
        if (box.find(item => item.id === currentCard.querySelector(".id-card").dataset.id)) {
            const index = box.findIndex(item => item.id === currentCard.querySelector(".id-card").dataset.id)
            let newBox = box;
            newBox[index].count++;
            setBox(newBox)
        } else {
            setBox([
                ...box,
                {
                    img: currentCard.querySelector(".img-products").getAttribute('src'),
                    name: currentCard.querySelector(".category-text").innerHTML,
                    price:  currentCard.querySelector(".product-price").innerHTML,
                    id: currentCard.querySelector('.id-card').dataset.id,
                    count: 1
                }
            ])
        }
    }

    console.log(box)

    const viewProducts = products.map((product, index) => {
        return (
            <div className="card product-1" key={index}>
                <div className="id-card" data-id={product.id}></div>
                <a href='/details'><img className='guitar img-products' src={product.img}/></a>
                <span className='category-text'>{product.name}</span>
                <p className='product-name'>{product.name}</p>
                <div className='cash-name-icon'>
                    <span className='cash-name'>В наличии</span>
                    <img className='cash-icon' src={CashIcon}/>
                </div>
                <h3 className='product-price'>{product.price}</h3>
                <span>сом</span>
                <div><button className='goto-busket-btn' onClick={addToCart}>В корзину</button></div>
            </div>
        )
    })

    return (
        <div>
            <div>
                <div className="products">
                    {viewProducts}
                </div>
            </div>
        </div>
    )
};

export default Category;