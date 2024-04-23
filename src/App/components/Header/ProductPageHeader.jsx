import React from 'react';
import { Logo } from '../Logo';
import { HeaderNavigation } from './HeaderNavigation';
import { ReactComponent as SettingIcon } from "../../assets/Icons/settingicon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/cart.svg"; 
import { ReactComponent as UserImgae } from "../../assets/Images/profile.svg";
import { ReactComponent as DropdownIcon } from "../../assets/Icons/dropdown.svg";

export const ProductPageHeader = () => {
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite />
        </div>
        <div className='menu'>
            <HeaderNavigation />
        </div>
        <div className='signedin'>
            <SettingIcon />
            <CartIcon />
            <div className='usericon'>
                <UserImgae />
                <DropdownIcon />
            </div>
        </div>
    </header>
    )
}