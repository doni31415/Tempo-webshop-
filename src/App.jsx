import './App.css'
import router from './app/index.jsx'
import SubHeader from "./components/header/SubHeader"
import { RouterProvider } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'
import { createContext, useEffect, useReducer, useState } from 'react'
import { signInWithGoogle } from './firebase/Firebase'
import RegAcc from './components/auth/registration/RegAcc'
import BurgerMenu from './components/header/BurgerMenu'
import MainPage from './components/MainPage'

const ModalContext = createContext();
export const ContextBox = createContext()

export { ModalContext }

function App() {
  const [modal, dispatch] = useReducer(reducer, {
    active: false,
    content: 'registration'
  });

  function reducer(state, action) {
    switch (action.type) {
      case 'modal':
        return {
          ...state,
          active: action.modal
        };
      case 'content':
        return {
          ...state,
          content: action.content
        };
      default:
        return state
    }
  }

  const [box, setBox] = useState([])

  useEffect(() => {
    if (box.length != 0)
    localStorage.setItem("box" , JSON.stringify(box))
  }, [box])

  useEffect(() => {
    let busket = localStorage.getItem("box")? localStorage.getItem("box") : "[]"
    let parseBusket = JSON.parse(busket)
    setBox(parseBusket)
  }, [])

  console.log(box);
  return (
    <div className="App">
      <ContextBox.Provider value={[box, setBox]}>
        <ModalContext.Provider value={[modal, dispatch]}>
          <Header />
          <SubHeader />
          <BurgerMenu />
          <RouterProvider
            router={router}
          />
          <RegAcc />
          <Footer />
        </ModalContext.Provider>
      </ContextBox.Provider>
    </div>
  )
}

export default App
