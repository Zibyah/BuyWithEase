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