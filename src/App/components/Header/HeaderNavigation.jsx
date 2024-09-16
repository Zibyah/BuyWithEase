

export const HeaderNavigation = (props) => {
    return (<>
            <ul className={props.className}>
                <li>
                    <a className="active" href="/">Home</a>
                </li>
                <li>
                    <a href="product" reloadDocument>Product</a>
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
            </>
    )
}