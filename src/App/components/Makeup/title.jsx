import style from './style.module.css';
import {ReactComponent as DropdownIcon} from "../../assets/Icons/dropdown.svg";

export const Title = () => {
    return (
        <div className={style.makeupcollection}>
                <h1 className={style.title}>MAKEUP COLLECTION</h1>
                <div className={style.text}>
                    <p>115 Items Found</p>
                    <div className={style.sortby}>
                        <h4>Sort By:</h4>
                        <p>Popularity</p>
                        <DropdownIcon />
                    </div>
                </div>
            </div>
    )
}