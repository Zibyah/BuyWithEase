import style from './input.style.module.css'
import React from 'react'

export const CustomInput = (props) => {
    return (
    <div className={style['input']}>
        {/* <label>"Email address or username"</label>
        <input {...props} className={style['input-field']} />
         */}
         <label>{props.label}</label>
         <input placeholder={props.placeholder} />
    </div>
    )
}