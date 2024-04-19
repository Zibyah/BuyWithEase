import style from './style.module.css'
import { benefits } from "./benefits";
import { Title } from "./title";

export const OurBenefits = () => {
    return ( <section className={style.wrapper}>
        <Title />
        <div className={style.benefits}>
            {benefits.map((benefits) => (
                <div>
                <img className={style.Image} src={benefits.Image} />
                <div>
                    <h5 className={style.heading}>{benefits.title}</h5>
                    <p className={style.description}>{benefits.description}</p>
                </div>
        </div>
    ))}
    </div>     
    </section>

    )
}