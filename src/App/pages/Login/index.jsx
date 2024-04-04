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


export const Login = () => {
    const [form, setForm] = React.useState({})
    const handleLogin = ()=> {
        loginUser(form.username, form.password)
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
            <Logo className={style.logo} useWhite={false} />
            <Image className={style.image} />
        </div>
        
        <div className={style.bodytext}>
            <div className={style.title}>
                <h1>Welcome Back</h1>
                <HandIcon />
            </div>
            <p>Good to have you back! Let’s make set you in.</p>
            <br />
            <div className={style.field}>
                    <CustomInput name="username" onChange={(event)=>setForm({...form, username: event.target.value })} placeholder= {'Enter your email adress'} label= {'Email'}/>
                {/* <CustomInput placeholder={'Enter your email address or full name'} label={'Email'} /> */}
                    {/* <CustomInput onChange={(event)=> setForm({...form, password: event.target.value })} placeholder= "Password" type="password" /> */}
                    <CustomInput placeholder={'Enter your password'} label={'Password'} />
                <div className={style.rememberbox}>
                    <input className={style.inputbox} type="checkbox" placeholder="Remember me" />
                    <p>Remember me</p>
                </div>  
            </div>
        
            <div className={style.button}>
                <CustomButton onClick={handleLogin}> Login </CustomButton>
                <br />
                <p>Forgot password?</p>
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