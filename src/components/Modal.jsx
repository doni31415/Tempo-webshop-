import Authorization from "./auth//authorization/Authorization";
import NewPassword from "./auth/passwordRecovery/NewPassword";
import PassRecovery from "./auth/passwordRecovery/PassRecovery";
import Registration from "./auth/registration/Registration";

const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization closeModal={props?.modal?.dispatch} />;
            case 'registration':
                return <Registration closeModal={props?.modal?.dispatch} />;
            case 'passrecovery':
                return <PassRecovery closeModal={props?.modal?.dispatch} />;
            case 'newpassword':
                return <NewPassword closeModal={props?.modal?.dispatch} />;
            default:
                return <Authorization closeModal={props?.modal?.dispatch} />;
        }
    }

    const content = modal?.active && (
        <div className="modal">
            <div className="blackout"></div>
            <div className="modal-container">
                {renderForm(modal?.content)}
                <button onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}>

                </button>
            </div>
        </div>
    )

    return content

};

export default Modal