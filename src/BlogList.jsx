import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title, hadelDelete }) => {


    return(
        <>
        <div className="blogList">
            <h1>{ title }</h1>
            {
                blogs.map((blog) => (
                    <Link to={ `/blogs/${blog.id}` }>
                        <div className="blog" key={blog.id}>
                            <div> { blog.title } </div> 
                            <p> {blog.body} </p>
                            <p className="auther">writen by: { blog.auther }</p>
                        </div>
                    </Link>
                ))
            }

        </div>
        </>
    )
}

export default BlogList;