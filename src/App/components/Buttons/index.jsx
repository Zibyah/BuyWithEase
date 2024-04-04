import { combineClasses } from "./formats";

export const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
    }
    const className = classNames [props.type] || classNames.primary
    const classes = (combineClasses(className, props.className))
    return (
        props.onClick ?
        <button onClick= {props.onClick} className={classes}>
            {props.children}
        </button> 
            : 
        <a href="#"className={classes}>{props.children}</a>   
    )
}