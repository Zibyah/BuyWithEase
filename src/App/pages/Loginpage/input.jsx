import style from './input.style.module.css'
import React from 'react'
import { ReactComponent as EyeIcon } from "../../assets/Icons/eyeIcon.svg";
import { ReactComponent as EyeIconOpen } from "../../assets/Icons/eyeiconopen.svg";

export const CustomInput = ({ label, ...props }) => {
    const [show, setShow] = React.useState(false)
    let type = props.type
    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    } 
    const handleIconToggle = () => {
        setShow(!show)
    }
    return (
        <div className={style['input']}>
            <label>{label}</label>
            <input {...props} className={style['input-field']} 
            type= {type}/>
        {
            props.type === 'password' && <div onClick={handleIconToggle} className={style.icon}>
                {
                !show ? 
                <EyeIcon size={"1rem"} /> : <EyeIconOpen size={"1rem"} />}

            </div>
        }
            
        </div>
    )
    
}