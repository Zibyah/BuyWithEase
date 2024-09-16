import style from './style.module.css'
import { ReactComponent as Image } from "../../assets/Images/logo-picture.svg";
import CustomButton from '../../components/CustomButton'

const Verify = () => {
    return ( 
        <section className={style.container}>
            <aside className={style.image}> 
               <Image />
            </aside>
            <aside className={style.text}>
                <h1>Verify your email</h1>
                <p>Enter the one time code we sent to your email.</p>
                <p>Didn’t get a code? <a>Resend</a></p>
                <CustomButton onClick={() => navigate('Verify')}>
                    Verify Code
                </CustomButton>
                <br />
            </aside>
        </section>
     );
}
 
export default Verify;