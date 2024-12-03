import { Children, ReactNode } from "react"
import styles from "./Button.module.scss"

interface Props{
    children:ReactNode  ,
    type: "Fill" | "Outline",    
}

const Button = (props:Props)=>{
    return(
        <button className={ `${styles.container} ${props.type=="Fill" ? styles.filleButton : styles.outlinedButton}`}>
            {props.children}
        </button>
    )
}

export default Button;