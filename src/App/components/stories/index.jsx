import style from './style.module.css';
import { CustomButton } from '../Buttons';
import { ReactComponent as StoryImage} from "../../assets/Images/storiesimage.svg";

export const Stories = () => {
    return (<section className={style.wrapper}>
        <h2 className={style.title}>OUR SUCCESS STORIES</h2>
        <div className={style.story}>
            <div className={style.text}>
                <p className={style.description}>Meet Sarah, a small business owner who struggled to manage her inventory effectively. With our SME app, Sarah easily tracks stock levels, streamlines orders, and boosts customer satisfaction. Now, she spends less time managing inventory and more time growing her business. Join Sarah and thousands of others who have transformed their businesses with our app.</p>
                <CustomButton className={style.button} onClick={() => {}}> Read More</CustomButton>
                <a className={style.link} href="#/TryIt">Try it now</a>
            </div>
            <div>
                <StoryImage className={style.image} />
            </div>
        </div>
    </section>)
}