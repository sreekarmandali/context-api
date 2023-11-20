
import Input from "../../UI/Components/Input"
import FormClasses from "./MealItemForm.module.css"
import {useRef } from "react"

const MealForm = (props) => {
    
  const inputRef = useRef()
  const submitCartHandler = (event) => {
    event.preventDefault()
    const amount = +inputRef.current.value
    props.addToCartHandler(amount)
  }
    return (
        <form className={FormClasses.form}>
            <Input lable='Amount' ref={inputRef} input={{id:'amount_'+props.id, type:'number',step:'1',min:'1',max:'5', defaultValue:'1'}}></Input>
            <button onClick={submitCartHandler}>Add to Cart</button>
        </form>
    )
}
export default MealForm