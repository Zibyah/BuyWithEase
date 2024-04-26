import { CustomButton } from '../Buttons';
import { bagProduct } from './product';
import style from './style.module.css';
import { Title } from "./title";
import { ReactComponent as FirstArrow } from "../../assets/Icons/doublepreviousarrow.svg";
import { ReactComponent as NextArrow } from "../../assets/Icons/nextarrow.svg";
import { ReactComponent as LastArrow } from "../../assets/Icons/lastarrow.svg";
import { ReactComponent as PreviousArrow } from "../../assets/Icons/previousarrow.svg";
import { ReactComponent as FilledLikeIcon } from "../../assets/Icons/filledlikeicon.svg";
import { ReactComponent as EmptyLikeIcon } from "../../assets/Icons/blanklikeicon.svg";
import React from 'react';

export const BagProductsList = () => {
    // const [show, setShow] = React.useState(false)
    // const handleIconToggle = () => {
    //     setShow(!show)
    // }
    return (<section className={style.list}>
        <Title />
        <div className={style.products}>
            {bagProduct.map((bagProduct) => (
                <div>
                    {/* {
            <div  className={style.likeicon}>
                {
                !show ? 
                <button onClick={handleIconToggle}><EmptyLikeIcon /></button> : <button><FilledLikeIcon size={"1rem"} /> </button>}
            </div>
        }
                     */}
                    <div>
                        <img className={style.Image} src={bagProduct.Image}/>
        
                    </div>
                    <div className={style.wrap}>
                        <div className={style.name}>
                            <h5 className={style.heading}>{bagProduct.title}</h5>
                            <div className={style.amount}>
                                <p className={style.money}>{bagProduct.amount}</p>
                                <img className={style.rating} src={bagProduct.rating} />
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