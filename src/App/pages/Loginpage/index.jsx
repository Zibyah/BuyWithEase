import { CustomButton } from "../../components/Buttons";
import { Logo } from "../../components/Logo";
import style from "./style.module.css";
import {ReactComponent as Image} from "../../assets/Images/logo-picture.svg";
import {ReactComponent as HandIcon} from "../../assets/Icons/hand.svg";
import {ReactComponent as FacebookLogo} from "../../assets/Icons/facebook.svg";
import {ReactComponent as GoogleLogo} from "../../assets/Icons/google.svg";
import { CustomInput } from "./input";
import React from "react";
import {Signup} from "../Signup";
import { loginUser } from "./login";


export const LoginPage = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
        loginUser(form.username, form.password)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=home'
            })
            .catch(()=>{
                alert('invalid user credentials')
            })}
    
    return <section className={style.login}>
        <div className={style.left}>
        <Image className={style.image} />
            <Logo className={style.logo} useWhite />

        </div>

        <div className={style.bodytext}>
            <div className={style.title}>
                <h1>Welcome Back</h1>
                <HandIcon />
            </div>
            <p>Good to have you back! Let’s make set you in.</p>
            <br />
            <div className={style.field}>
                    {/* <label>Email</label> */}
                <label className={style['input-label']}>{'Email'}</label>
                <CustomInput name="username" onChange={(event)=>setForm({...form, username: event.target.value })} id="email" type="email" placeholder= {'Enter your email adress'}>
                </CustomInput>
                <br />
                {/* <CustomInput placeholder={'Enter your email address or full name'} label={'Email'} /> */}

                <label className={style['input-label']}>{'Password'}</label>
                <div className={style['password-label']}>
                    <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })}id="password" placeholder= "Password" type="password" />
                </div>
                    {/* <CustomInput  label={'Password'} placeholder={'Enter your password'}  /> */}
                <div className={style.rememberbox}>
                    <input className={style.inputbox} id="remember-me" type="checkbox" />
                    <p htmlFor="remember-me" className={style.label}>Remember me</p>
                </div>  
            </div>

            <div className={style.button}>
                <div>
                    <CustomButton className={style.loginbutton} onClick={handleLogin} type="submit"> Login </CustomButton>
                </div>
                <br />
                <a href="/forgot-password">Forgot password?</a>
                <br />
                <br />
                <div className={style.divider}>
                    <span>Or</span>
                </div>

                <br />
                <br />
                <br />
                <br />
                <CustomButton className={style.facebook} onClick={handleLogin} type="outline">
                    <FacebookLogo className={style.FacebookLogo}/>
                    Continue with facebook
                </CustomButton>
                <br />
                <CustomButton className={style.google} onClick={()=>{}} type="outline">
                    <GoogleLogo className={style.GoogleLogo} />
                    Continue with Google
                </CustomButton>
                <div className={style.signup}>
                    Don’t  have an account?
                    <a href="/SignUp" onClick={()=> {}}>{Signup}</a>
                </div> 
            </div>
        </div>
    </section>
}
