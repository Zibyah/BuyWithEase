import { products } from './products';
import style from './style.module.css';
import { CustomButton } from '../Buttons';

export const ProductsCollection = () => {
    return (
        <section className={style.collections}>
            <h3>OUR PRODUCTS COLLECTION</h3>
            <div className={style.products}>
                {products.map((products) => (
                    <div>
                        <img className={style.image} src={products.Image} />
                        <div>
                            <h5 className={style.heading}>{products.title}</h5>
                            <p className={style.description}>{products.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomButton className={style.button} onClick={() => { }}>View More</CustomButton>
        </section>
    )
}