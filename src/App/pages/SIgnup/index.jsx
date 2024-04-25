import style from './style.module.css'
import CustomInput from "../../components/CustomInput/index";
import { ReactComponent as Image } from "../../assets/Images/logo-picture.svg";
import { ReactComponent as Logo } from '../../assets/Images/Logo.svg';
import Checkbox from '../../components/CheckBox';
import { ReactComponent as FacebookLogo } from "../../assets/Icons/facebook.svg";
import { ReactComponent as GoogleIcon } from '../../assets/Icons/google.svg';
import { ReactComponent as HandIcon } from '../../assets/Icons/hand.svg';
import { CustomButton } from '../../components/Buttons';
import React from 'react';
import {signupUser} from './signup';

export const Signup = () => {
    const [form, setForm] = React.useState({})
    const handleSignup = () => {
        signupUser(form.username, form.password, form.retypepassword)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=login'
            })
            .catch(() => {
                alert('Account successfully created, please return to login')
            })
    }

    console.log(form)

    return (
        <section className={style.container}>
            <aside className={style.image}>
                <Image />
                <Logo useWhite />
            </aside>
            <aside className={style.form}>
                <h1>Sign Up <HandIcon /> </h1>
                <p>Join us today and let us help you ease the stress <br />of connecting with new big brands and customers.</p>
                <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} type='email' placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} type='password' placeholder={'Enter your Password'} label={'Password'} />
                <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} type='password' placeholder={'Enter your Password'} label={'Re-type Password'} />
                <br />
                <div className={style.checkbox}>
                    <Checkbox label="By creating this account you agree to our
                    Terms and Conditions." />
                </div>
                <br />
                <CustomButton onClick={handleSignup}>
                    Sign up
                </CustomButton>
                <br />
                <div className={style.divider}>
                    <span>OR</span>
                </div>
                <br />
                <div className={style.signupbtn}>
                    <CustomButton type="outline" className={style.google} onClick={() => { }}>
                        <GoogleIcon /> Signup with Google
                    </CustomButton >
                    <CustomButton type="outline" className={style.facebook} onClick={() => { }}>
                        <FacebookLogo size={'1rem'} /> Signup with Facebook
                    </CustomButton>
                </div>
            </aside>
        </section>
    );
}

export default Signup;
