import { Link, Outlet } from "react-router-dom";

export const HeaderNavigation = (props) => {
    return (<>
            <ul className={props.className}>
                <li>
                    <Link className="active" to="/">Home</Link>
                </li>
                <li>
                    <Link to="product" reloadDocument>Product</Link>
                </li>
                <li>
                    <a href="#/Testimonies">Testimonies</a>
                </li>
                <li><a href="#/Benefits">Benefits</a></li>
                <li>
                    <a href="#/Stories">Stories</a>
                </li>
                <li>
                    <a href="#/Support">Support</a>
                </li>
            </ul>
        <Outlet />
            </>
    )
}