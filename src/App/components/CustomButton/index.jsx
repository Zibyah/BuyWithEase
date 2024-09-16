import style from "./style.module.css"

function combineClasses(...classes) {
    return classes.filter(Boolean).join(' ');
  }  

const CustomButton = (props) => {
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const className= classNames[props.type] || classNames.primary
    const classes= combineClasses(className, props.className)
    const buttonStyle = props.white ? { color: 'white', borderColor: 'white' } : null;
    return (
        props.onClick ?
        <button onclick={props.onClick} style={buttonStyle} className={classes}>
            {props.children}
        </button>
        :
        <a href="#" style={buttonStyle} className={classes}>{props.children}</a>
    )

}

export default CustomButton;