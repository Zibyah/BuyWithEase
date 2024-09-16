
import { Logo } from '../Logo';
import { ReactComponent as SettingIcon } from "../../assets/Icons/settingicon.svg";
import { ReactComponent as CartIcon } from "../../assets/Icons/cart.svg"; 
import { ReactComponent as UserImgae } from "../../assets/Images/profile.svg";
import { ReactComponent as DropdownIcon } from "../../assets/Icons/dropdown.svg";
import { ProductNavigation } from './ProductNavigation';

export const ProductPageHeader = () => {
    return (<header className='header'>
        <div className="logo">
            <Logo useWhite />
        </div>
        <div className='menu'>
            <ProductNavigation />
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