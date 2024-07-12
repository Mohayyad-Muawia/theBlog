import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import Loading from "./Loading";

const BlogDetails = () => {
    const { id } =  useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    function handleDelete() {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <>
            { isPending && <Loading />}
            { error && <div> { error } </div> }
            {blog &&
            <div className="blog-preview">
                <h1>{ blog.title }</h1>
                <h3>by: { blog.auther }</h3>
                <p>{ blog.body }</p>
                <a className="btn" onClick={handleDelete}>Delete</a>
            </div>
            }
        </>
     );
}
 
export default BlogDetails;