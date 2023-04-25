import React from 'react';

import "./Catalog0.css"

import {useState, useEffect} from "react"

import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../../firebase/Firebase";
import { Link } from 'react-router-dom';




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
           category.push({...doc.data(), id: doc.id})
           console.log(doc.id)
        });
        setCategories(category)
    }

    const showAllCategory = categories.map((category, index) => {
        return (
            <Link to={`/category/${category.id}`}>
                <div>
                   
                     <div className="catalogContainer" key={index}>
                         <div classxName="catalogItem"><img className="catalogItem" src={category.img} alt="" />
                             <div className="itemBlur">
                                <div className="itemTitle">
                                 {category.name}
                                </div>
                            </div>
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
              <div>
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
    //                         </div>
    //                     </div>
    //                     <div className="catalogItem itemblu">
    //                         <div className="itemBlur">
    //                             <div className="itemTitle">
    //                                 Аксессуары
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
          
    //     </>


    // );


export default Catalog0;