import {Fragment} from 'react'
import HeaderStyles from './Header.module.css'
import MealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import Meals from '../../Meals/Meals'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-context'

const Header = (props) => {

const cartCxt = useContext(CartContext);

    return (
        <Fragment>
            <header className={HeaderStyles.header} > React Meals
            <HeaderCartButton {...props}  count={cartCxt.items.length}/>
            </header>
            <div className={HeaderStyles['main-image']}>
                    <img src={MealsImage} alt="meal image"></img>
            </div>
            <Meals/>
        </Fragment>
    )
}
export default Header