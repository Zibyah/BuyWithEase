import { CustomButton } from '../Buttons';
import { clothProduct } from './product';
import style from './style.module.css';
import { Title } from "./title";
import { ReactComponent as FirstArrow } from "../../assets/Icons/doublepreviousarrow.svg";
import { ReactComponent as NextArrow } from "../../assets/Icons/nextarrow.svg";
import { ReactComponent as LastArrow } from "../../assets/Icons/lastarrow.svg";
import { ReactComponent as PreviousArrow } from "../../assets/Icons/previousarrow.svg";

export const ClothProductsList = () => {
    return (<section className={style.list}>
        <Title />
        <div className={style.products}>
            {clothProduct.map((clothProduct) => (
                <div>
                    <div>
                        <img className={style.Image} src={clothProduct.Image} />
                    </div>
                    <div className={style.wrap}>
                        <div className={style.name}>
                                <h5 className={style.heading}>{clothProduct.title}</h5>
                            <div className={style.amount}>
                                <p className={style.money}>{clothProduct.amount}</p>
                                <img className={style.rating} src={clothProduct.rating} />
                            </div>
                        </div>
                        <CustomButton className={style.button} onClick={() => { }}>Add to cart</CustomButton>
                    </div>
                </div>
            ))}
        </div>
        <div className={style.direction}>
            <FirstArrow />
            <NextArrow />
            <h5 className={style.number}>1 <span className={style.next}>2 3</span></h5>
            <PreviousArrow />
            <LastArrow />
        </div>
    </section>
    )
}