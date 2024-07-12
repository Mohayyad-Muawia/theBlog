import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <>
        <div className="notFound">
            <h1>404</h1>
            <h3>Sorry bro, this page does't exist</h3>
            <Link to="/" className="btn">Go to home page</Link>
        </div>
        </>
     );
}
 
export default NotFound;