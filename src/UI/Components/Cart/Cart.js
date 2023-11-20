import { useContext } from "react"
import CartContext from "../../../Store/Cart-context"
import Modal from "../Modal/Modal"
import CartClass from "./Cart.module.css"
import CartItem from "./CartItem/CartItem"
const Cart = (props) => {
    const cartCtx = useContext(CartContext)
const cartItems = (<ul className={CartClass["cart-items"]}>
{cartCtx.items.map(meal =>(<CartItem onAdd={cartCtx.addItem.bind(null, meal)} onRemove={cartCtx.removeItem.bind(null, meal.id)} meal={meal}></CartItem>))}
</ul>)

    return (
        <Modal {...props}>
            {cartItems}
            <div className={CartClass['total']}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={CartClass["actions"]}>
               <button className={CartClass["button--alt"]} onClick={props.hideCartHandler}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}
export default Cart