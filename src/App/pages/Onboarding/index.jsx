import { Logo } from "../../components/Logo";
import style from './style.module.css';
import { CustomButton } from "../../components/Buttons";
import React from "react";

export const Onboarding = () => {
    return (
        <div className={style.wrapper}>
             <Logo useWhite={false} />
             <p>Do you want to connect with new customers or Big organizations? Try Buy With Ease.</p>
             <div>
             <CustomButton onClick={()=>{}} type="secondary">Login</CustomButton>
             <CustomButton onClick={()=>{}}>Signup</CustomButton>
             </div>
        </div>
    )
}