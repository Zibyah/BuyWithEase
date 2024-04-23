<<<<<<< HEAD
import { CustomButton } from "../../components/Buttons";
import { Logo } from "../../components/Logo";
import style from "./style.module.css";
import React from "react";
import { loginUser } from "./login";
import {ReactComponent as Image} from "../../assets/Images/logo-picture.svg";
import {ReactComponent as HandIcon} from "../../assets/Icons/hand.svg";
import {ReactComponent as FacebookLogo} from "../../assets/Icons/facebook.svg";
import {ReactComponent as GoogleLogo} from "../../assets/Icons/google.svg";
import { CustomInput } from "./input";
import { signupUser } from "./signup";
//  export const Login = () => {
//     const {url, navigate} = useNavigation()
//     return (
//         <section>
//             <main className={style.main}><h1>I am a {url} page</h1></main>
//             <CustomButton onClick={()=> navigate('home')}>
//                 Home
//             </CustomButton>
//             <CustomButton onClick={()=> navigate('home')}>
//                 Playlist
//             </CustomButton>
//         </section>
//     )
//  }


export const Signup = () => {
    const [form, setForm] = React.useState({})
    const handleSignup = ()=> {
        signupUser(form.username, form.password)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res))
                window.location.href = '?status=home'
            })
            .catch(()=>{
                alert('invalid user credentials')
            })
        }
    
    console.log(form)

    return <section className={style.login}>
        <div className={style.left}>
        <Image className={style.image} />
            <Logo className={style.logo} useWhite={false} />
            
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
                <CustomInput name="username" onChange={(event)=>setForm({...form, username: event.target.value })} placeholder= {'Enter your email adress'}>
                </CustomInput>
                <br />
                {/* <CustomInput placeholder={'Enter your email address or full name'} label={'Email'} /> */}
                
                <label className={style['input-label']}>{'Password'}</label>
                <div className={style['password-label']}>
                <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} placeholder= "Password" type="password" />
                
                </div>
                    {/* <CustomInput  label={'Password'} placeholder={'Enter your password'}  /> */}
                <div className={style.rememberbox}>
                    <input className={style.inputbox} type="checkbox" placeholder="Remember me" />
                    <p className={style.label}>Remember me</p>
                </div>  
            </div>
        
            <div className={style.button}>
                <CustomButton onClick={handleLogin}> Login </CustomButton>
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
                <CustomButton className={style.facebook} onClick={()=>{}} type="outline">
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
                    <a href="#/SignUp">Sign Up</a>
                </div> 
            </div>
        </div>
    </section>
}
=======
import style from './style.module.css'
import CustomInput from "../../components/CustomInput/index";
import { ReactComponent as Image } from "../../assets/Images/logo-picture.svg";
import { ReactComponent as Logo } from '../../assets/Images/Logo.svg';
import Checkbox from '../../components/CheckBox';
import { FaApple, FaFacebook } from "react-icons/fa6";
import { ReactComponent as GoogleIcon } from '../../assets/Icons/google.svg';
import { ReactComponent as HandIcon } from '../../assets/Icons/hand.svg';
import CustomButton from '../../components/CustomButton'

const Signup = () => {
    return (
        <section className={style.container}>
            <aside className={style.image}> 
               <Image />
               <Logo />
            </aside>
            <aside className={style.form}>
                <h1>Sign Up <HandIcon /> </h1>
                <p>Join us today and let us help you ease the stress <br />of connecting with new big brands and customers.</p>
                <CustomInput type='email' placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput type='password' placeholder={'Enter your Password'} label={'Password'} />
                <CustomInput type='password' placeholder={'Enter your Password'} label={'Re-type Password'} />
                <br />
                <div className={style.checkbox}>
                    <Checkbox label="By creating this account you agree to our
                    Terms and Conditions." />
                </div>
                <br />
                <CustomButton onClick={() => navigate('')}>
                    Sign up
                </CustomButton>
                <br />
                <div className={style.divider}>
                    <span>OR</span>
                </div>
                <br />
                <div className={style.signupbtn}>
                    <CustomButton type="outline" className={style.google} onClick={() => navigate('google')}>
                        <GoogleIcon /> Signup with Google
                    </CustomButton >
                    <CustomButton type="outline" className={style.facebook} onClick={() => navigate('facebook')}>
                        <FaFacebook size={'1rem'} /> Signup with Facebook
                    </CustomButton>
                </div>
            </aside>
        </section>
    );
}

export default Signup;
>>>>>>> 0309ac800b54c56f5792198285d4275fd590fa40
