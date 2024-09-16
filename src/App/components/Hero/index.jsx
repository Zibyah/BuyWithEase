import style from './style.module.css';
import { CustomButton } from '../Buttons';


export const Hero = () => {
    return (
        <div className={style.hero}>
            <h1 className={style.title}>Connecting buyers to <span>SMEs</span> with ease.</h1>
            <p className={style.text}>Empowering SMEs, one connection at a time.</p>
            <CustomButton className={style.button} onClick={()=>{}}>Explore Products</CustomButton>
        </div>
    )
}