import Button from "../components/ui/Button";
import { ModalContext } from '../App'
import { useContext } from 'react'
import Modal from "../components/Modal";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/Firebase'
import { signOut } from 'firebase/auth';

const Main = (props) => {
  const [modal, dispatch] = useContext(ModalContext)

  const [user] = useAuthState(auth)

  const modalState = {
    props: modal,
    dispatch: dispatch,
  }

  async function openModal(content) {
    await dispatch({ type: 'content', content: content })
    await dispatch({ type: 'modal', modal: true })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // successful logout
      })
      .catch((error) => {
        console.log(error);
      });
  };


  if (!user) {
    return (
      <div className="container center-flex">
      <h3 className="main-text-page"> Главная страница</h3>
      <div onClick={() => openModal('authorization')}>
        <Button text='Авторизация' />
      </div>
      <div onClick={() => openModal('registration')}>
        <Button text='Регистрация' />
      </div>
      {/* <div onClick={() => openModal('passrecovery')} > 
                  <Button text='Восстановление пароля' />
              </div> */}
  
      <Modal modal={modalState} />
    </div>
    )
} else {
  return(
    <div>
        <h1>дамы и гаспада добро пажаловать в мой акккаунте  че за тяги такие бархатные КЕФТЕМЭ!!!
        </h1>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem('profilePic')} />
        <div className=''>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
  )
}


// return (

//   <div className="container center-flex">
//     <h3 className="main-text-page"> Главная страница</h3>
//     <div onClick={() => openModal('authorization')}>
//       <Button text='Авторизация' />
//     </div>
//     <div onClick={() => openModal('registration')}>
//       <Button text='Регистрация' />
//     </div>
//     {user && <div>
//       <div className=''>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <h1>{localStorage.getItem("name")}</h1>
//       <h1>{localStorage.getItem("email")}</h1>
//       <img src={localStorage.getItem('profilePic')} />
//     </div>}
//     {/* <div onClick={() => openModal('passrecovery')} > 
//                 <Button text='Восстановление пароля' />
//             </div> */}

//     <Modal modal={modalState} />
//   </div>
// );
};

export default Main;