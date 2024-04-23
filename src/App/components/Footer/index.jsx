import style from './style.module.css';
import {ReactComponent as EmailIcon} from "../../assets/Icons/email.svg";
import {ReactComponent as FacebookIcon} from "../../assets/Icons/facebookicon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/Icons/twitter.svg";
import {ReactComponent as InstagramIcon} from "../../assets/Icons/instagram.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/Icons/linkedIn.svg";
import { CustomButton } from '../Buttons';
import { Logo } from '../Logo';
import { legalUrls } from './data';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <h2>Subscribe to our newsletter</h2>
            <p>Never miss a beat.
                <br /> 
                Get a weekly dose of design inspiration, secrets, tips,
                <br /> trends, and banter in your inbox.</p>
            <div className={style.button}>
                <div>
                    <EmailIcon className={style.icon}/>
                    <input className={style.input} type="email"  placeholder='Email address' />
                </div>
                <CustomButton type="outline" onClick={()=>{}} className={style.subsribe}>Subscribe</CustomButton>
            </div>
            <div className={style.contact}>
                <Logo useWhite={false} />
                <div className={style.contactsocial}>
                    <p className={style.text}>Contact us <a href="/#Email">hello@buywithease.com</a></p>
                    <div className={style.socialmedia}>
                        <p className={style.text}>Follow us</p>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedinIcon />
                    </div>
                </div>
            </div>
            <div className={style.legal}>
                <div className={style['legal-urls']}>
                    {
                        legalUrls.map(({ url, name}) => <a href={url}>{name}</a>)
                    }
                </div>
                <p className={style.copy}>© 2024 .Powered by BuyWithEase. All Rights Reserved.</p>
                
            </div>
        </div>
    )
}