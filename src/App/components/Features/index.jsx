import { CustomButton } from '../Buttons';
import style from './style.module.css';
import HangerOne from "../../assets/Images/hanger1.svg";
import HangerTwo from "../../assets/Images/hanger2.svg";
import HangerThree from "../../assets/Images/hanger3.svg";

export const Features = () => {
    return (<section className={style.wrapper}>
        <div className={style.text}>
            <h2>BRAND FEATURES</h2>
            <h3>Marks & Spencer</h3>
            <p>Shop from our featured brand of designers</p>
            <CustomButton className={style.button} onClick={() => { }}>Shop Brand Now</CustomButton>
        </div>
        <div className={style.image}>
            <img className={style.imageone} src={HangerOne} />
            <img className={style.imagetwo} src={HangerTwo} />
            <img className={style.imagethree} src={HangerThree} />
        </div>
    </section>)
}