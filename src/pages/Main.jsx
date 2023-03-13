import Button from "../components/ui/Button";
import {ModalContext} from '../App'
import {useContext} from 'react'
import Modal from "../components/Modal";

const Main = (props) => {
    const [modal, dispatch] = useContext(ModalContext)

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }

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
            
            <Modal modal={modalState}/>
        </div>
    );
};

export default Main;