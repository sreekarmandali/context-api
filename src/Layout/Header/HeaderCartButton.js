import CartButtonStyle from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon'


const HeaderCartButton = (props) => {


    return (
        <button className={CartButtonStyle.button} onClick={props.cartClickHandler}>
            <span className={CartButtonStyle.icon}>
               <CartIcon></CartIcon> 
            </span>
            <span >
                Your Cart
            </span>
            <span className={CartButtonStyle.badge}>
                {props.count}
            </span>
        </button>
    )
}
export default HeaderCartButton