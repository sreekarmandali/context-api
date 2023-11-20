import { useContext} from "react"
import MealForm from '../MealForm/MealForm'
import MealClasses from './MealItem.module.css'
import CartContext from "../../Store/Cart-context"

const MealItem = (props) => {
const priceData = `$${props.price}`
const cartContext = useContext(CartContext)
const addToCartHandler = (amount) => {
    cartContext.addItem({id:props.name+props.price,name: props.name, description: props.description, price: props.price,
    amount
    })
}
    return (
        <li className={MealClasses.meal} key={props.id}>
            <div>
            <h3>
                {props.name}
            </h3>
            <div className={MealClasses.description}>
                {props.description}
            </div>
            <div className={MealClasses.price}>
                {priceData}
            </div>
            </div>
            <div>
                <MealForm id={props.id}  {...props} addToCartHandler={addToCartHandler} />
            </div>
        </li>
    )
}
export default MealItem