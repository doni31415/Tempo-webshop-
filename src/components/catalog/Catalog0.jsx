import React from 'react';



import { useState, useEffect } from "react"

import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../../firebase/Firebase";
import { Link } from 'react-router-dom';
import "./Catalog0.css"



const Catalog0 = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData();
    }, [])

    console.log(categories)

    async function getData() {
        const q = query(collection(database, "category"));
        const querySnapshot = await getDocs(q);
        let category = []
        querySnapshot.forEach((doc) => {
            category.push({ ...doc.data(), id: doc.id })
            console.log(doc.id)
        });
        setCategories(category)
    }

    const showAllCategory = categories.map((category, index) => {
        return (
            <Link to={`/category/${category.id}`}>

                    <div className="catalogItem">
                        <img className="catalogItemImg" src={category.img} alt="" />
                        <div className="itemBlur">
                            <div className="itemTitle">
                                {category.name}
                            </div>
                        </div>
                    </div>
                {/* <img src={category.img} alt="" /> */}
            </Link>
        )
    })

    return (
        <div>
            <div className='container2'>
                <div className='catalogContainer'>
                    {showAllCategory}
                </div>
            </div>


        </div>
    )
};


// return (
//     <>
//     <div>1</div>



//         <section>
//             <div className='container2'>
//                 <div className="catalogContainer">
//                     <a href='/product'><div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Струнные
//                             </div>
//                         </div>
//                     </div></a>
//                     <div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Клавишные
//                             </div>
//                         </div>
//                     </div>
//                     <div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Ударные
//                             </div>
//                         </div>
//                     </div>
//                     <div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Смычковые
//                             </div>
//                         </div>
//                     </div>
//                     <div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Духовые
//                             </div>
//                         </div>
//                     </div>
//                     <div className="catalogItem">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Мандолины
//                             </div>
//                         </div>
//                     </div>
//                     <div className="catalogItem itemblu">
//                         <div className="itemBlur">
//                             <div className="itemTitle">
//                                 Чехлы
//                             </div>
//
export default Catalog0