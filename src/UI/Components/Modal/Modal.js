import { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import ModalClasses from './Modal.module.css'
const BackDrop = (props) => {
   return (
       <div className={ModalClasses.backdrop} onClick={props.hideCartHandler}></div>
    )
}
const ModalOverlay = (props) => {

    return (
        <div className={ModalClasses.modal}>
             <div className={ModalClasses.content}>{props.children}</div>
        </div>
    )
}
const overlayElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
       <Fragment>
        {ReactDOM.createPortal(<BackDrop {...props}/>,overlayElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlayElement)}
       </Fragment>
    )
}
export default Modal