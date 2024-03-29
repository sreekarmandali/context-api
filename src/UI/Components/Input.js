import { forwardRef } from "react"
import InputClass from "./Input.module.css"
const Input = forwardRef((props, ref) => {

    return (
        <div className={InputClass.input}>
           <label htmlFor={props.input.id}> {props.label}</label>
           <input ref ={ref} {...props.input}/>
        </div>
    )
})
export default Input