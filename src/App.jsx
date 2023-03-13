import './App.css'
import router from './app/index.jsx'
import SubHeader from "./components/header/SubHeader"
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'
import {createContext, useReducer} from 'react'
import { signInWithGoogle } from './firebase/firebase'
import RegAcc from './components/auth/registration/RegAcc'

const ModalContext = createContext();

export {ModalContext}

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

  return (
    <div className="App">
      <ModalContext.Provider value={[modal, dispatch]}>
        <Header />
        <SubHeader/>
        <RouterProvider
          router={router}
        />
        <RegAcc/>
        <Footer />
      </ModalContext.Provider>
    </div>
  )
}

export default App
