import {createBrowserRouter} from "react-router-dom";
import Busket from "../components/Busket/Busket.jsx";
import Catalog0 from "../components/catalog/Catalog0.jsx";
import Category from "../components/catalog/Category.jsx";
import MainPage from "../components/MainPage.jsx";
import Product from "../components/product/Product.jsx";
import ProductBuy from "../components/product/ProductBuy.jsx";
import SignIn from "../components/signInSignOut/SignIn.jsx";
import Main from '../pages/Main.jsx'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/catalog`,
    element: <Catalog0/>
  },
  {
    path: `/category/:category`,
    element: <Category />
  },
  {
    path: `${path}/products/:id`,
    element: <ProductBuy/>
  },
  {
    path: `${path}/details`,
    element: <Product/>
  },
  {
    path: `${path}/busket`,
    element: <Busket/>
  },
   {
    path: `${path}/user`,
    element: <Main/>
  },
  {
    path: `${path}/`,
    element: <MainPage/>
  }


]);

export default router;