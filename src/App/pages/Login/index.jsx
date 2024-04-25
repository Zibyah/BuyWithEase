import { CustomButton } from "../../components/Buttons";
import { Logo } from "../../components/Logo";
import style from "./style.module.css";
import {ReactComponent as Image} from "../../assets/Images/logo-picture.svg";
import {ReactComponent as HandIcon} from "../../assets/Icons/hand.svg";
import {ReactComponent as FacebookLogo} from "../../assets/Icons/facebook.svg";
import {ReactComponent as GoogleLogo} from "../../assets/Icons/google.svg";
import { CustomInput } from "./input";
import React, {useEffect, useState} from "react";
import {Signup} from "../Signup";
import { useNavigation } from "../hooks/useNavigation";
import { loginUser } from "./login";
import { isUserLogin } from "../../../utils/user";
import { routes } from "../../routes";
import { Landing } from "../Landing";


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('');
    
    const { navigate } = useNavigation()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRememberMeCheckbox = (event) => {
        setRememberMe(event.target.checked)
    }

    const handleLogin = async () => {
        setIsSubmitting (true)
        const payload = {
            username: email,
            password,
            rememberMe
        }
        console.log ({payload}, "I'm inside handleLogin")
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
    // const [form, setForm] = React.useState({})
    // const handleLogin = ()=> {
    //     loginUser(form.username, form.password)
    //         .then((res) => {
    //             localStorage.setItem('user', JSON.stringify(res))
    //             window.location.href = routes.landing()
    //         })
    //         .catch(()=>{
    //             alert('invalid user credentials')
    //         })
        
    // }
    const data = await response.json()
    if (response.status >= 400) {
        console.error('Invalid user credentials');
    }else
     {
        console.log("I got a login success", data)
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = routes.landing()
    }
    setIsSubmitting(false)
    }

    useEffect(()=>{
        const user = isUserLogin()
        if (user) {
            window.location.href = routes.landing()
        }
    }, [])

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
                <CustomInput onChange={handleEmail} id="email" type="email" placeholder= {'Enter your email adress'}>
                </CustomInput>
                <br />
                {/* <CustomInput placeholder={'Enter your email address or full name'} label={'Email'} /> */}
                
                <label className={style['input-label']}>{'Password'}</label>
                <div className={style['password-label']}>
                    <CustomInput onChange={handlePassword} id="password" placeholder= "Password" type="password" />
                </div>
                    {/* <CustomInput  label={'Password'} placeholder={'Enter your password'}  /> */}
                <div className={style.rememberbox}>
                    <input className={style.inputbox} id="remember-me" type="checkbox" onChange={handleRememberMeCheckbox} />
                    <p htmlFor="remember-me" className={style.label}>Remember me</p>
                </div>  
            </div>
        
            <div className={style.button}>
                <div>
                    <CustomButton className={style.handleLogin} onClick={handleLogin} disabled={isSubmitting} type="submit"> Login </CustomButton>
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
                <CustomButton className={style.facebook} onClick={() => {navigate('home')}} type="outline">
                    <FacebookLogo className={style.FacebookLogo}/>
                    Continue with facebook
                </CustomButton>
                <br />
                <CustomButton className={style.google} onClick={navigate('home')} type="outline">
                    <GoogleLogo className={style.GoogleLogo} />
                    Continue with Google
                </CustomButton>
                <div className={style.signup}>
                    Don’t  have an account?
                    <a href="/SignUp" onClick={()=> navigate('signup')}>{Signup}</a>
                </div> 
            </div>
        </div>
    </section>
}