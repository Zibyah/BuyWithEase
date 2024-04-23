import { ProductPageHeader } from "../../components/Header/ProductPageHeader";
import style from './style.module.css';
import {ReactComponent as SearchIcon} from "../../assets/Icons/search.svg";
import { CustomButton } from "../../components/Buttons";
import { BagProductsList } from "../../components/BagProducts";
import { ClothProductsList } from "../../components/ClothesProduct";

export const Product = () => {
    function useState(initialValue) {
        let val = initialValue
        function change(newValue) {
            val = newValue
        }

        return [val, change]
    }
    return (
        <section className={style.wrapper}>
            <ProductPageHeader className={style.menu} />
            <div className={style.specialoffer}>
                <h1>Special Offer Get 20% off now</h1>
                <a href="#/">Get it now</a>
            </div>
            <div className={style.seachsection}>
                <div className={style.search}>
                    <SearchIcon className={style.icon} />
                    <input className={style.input}
                        type="search"
                        name="Search"
                        id="search"
                        placeholder="Search products and categories" />
                </div>
                <CustomButton className={style.button} onClick={()=>{}}>Search</CustomButton>
            </div>
            <div className={style.product}>
                <BagProductsList />
                <ClothProductsList />
            </div>
        </section>
    )
}