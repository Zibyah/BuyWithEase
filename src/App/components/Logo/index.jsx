import LogoBlack from '../../assets/Images/Logo.svg';
import LogoWhite from '../../assets/Images/logo-white.svg';
import style from "./style.module.css";


export function Logo(props) {
    // props useWhite
    if (props.useWhite) {
        const myImage = props.useWhite ? LogoBlack : LogoWhite
        return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} />   
            </a>
        )
    } else {
        const myImage = props.useBlack ? LogoBlack : LogoWhite
        return (
            <a href='#/dasboard' className= {style.logo}>
                <img src={myImage} />   
            </a>
        )
    }
}