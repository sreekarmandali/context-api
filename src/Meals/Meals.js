import {Fragment} from 'react'
import AvailableMeals from './AvailableMeals'
import MealSummary from './MealSummary'

const Meals = (props) => {


    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}
export default Meals