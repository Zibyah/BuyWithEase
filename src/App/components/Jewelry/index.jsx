import style from './style.module.css';
import { ReactComponent as FirstArrow } from "../../assets/Icons/doublepreviousarrow.svg";
import { ReactComponent as NextArrow } from "../../assets/Icons/nextarrow.svg";
import { ReactComponent as LastArrow } from "../../assets/Icons/lastarrow.svg";
import { ReactComponent as PreviousArrow } from "../../assets/Icons/previousarrow.svg";
import React from 'react';
import { CustomButton } from '../Buttons';
import { jewelriesProduct } from './product';
import { Title } from './title';

export const JewelryProducts = () => {
    return (
        <section>
            <Title />
            <div className={style.products}>
            {jewelriesProduct.map((jewelriesProduct) => (
                <div>
                    <div>
                        <img className={style.Image} src={jewelriesProduct.Image} />
                    </div>
                    <div className={style.wrap}>
                        <div className={style.name}>
                                <h5 className={style.heading}>{jewelriesProduct.title}</h5>
                            <div className={style.amount}>
                                <p className={style.money}>{jewelriesProduct.amount}</p>
                                <img className={style.rating} src={jewelriesProduct.rating} />
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