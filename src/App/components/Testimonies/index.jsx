import style from './style.module.css';
import { testimoniesSection } from './data';

export const TestimoniesSection = () => {
    return ( <section className={style.testimonies}>
        <div className={style.list}>
            {testimoniesSection.map((testimoniesSection) => (
                <div>
                    <h2 className={style.title}>{testimoniesSection.title}</h2>
                    <p className={style.description}>{testimoniesSection.description}</p>
                </div>
            ))}
        </div>
    </section>
    )
}