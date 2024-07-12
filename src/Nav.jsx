import { Link } from "react-router-dom/cjs/react-router-dom.min";
let Nav =  () => {
    return (
        <>

        <nav>
            <h2>MD Blog</h2>
            <ul className="navList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/add">Add Blog</Link></li>
            </ul>
        </nav>
        
        </>

    )

}

export default Nav;
