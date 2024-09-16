import style from './input.style.module.css';
import React from 'react';

export const ContactInput = ({ label, ...props }) => {
    return (
        <div className={style['input']}>
            <label>{label}</label>
            <input {...props} className={style['input-field']} />
        </div>
    )
}