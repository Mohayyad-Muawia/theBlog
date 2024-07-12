import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault(); 
        const blog = {title, body, auther};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
            
        })
        .then(() => {
            console.log("new blog added");
            setIsPending(false);
            history.push("/");
        })
    }

    return ( 
        <>
        <div className="addBlog">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Blog Title:</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Blog Body:</label>
                    <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    
                    >
                    </textarea>
                </div>

                <div>
                    <label>Blog Auther:</label>
                    <select
                    required
                    value={auther}
                    onChange={(e) => setAuther(e.target.value)}
                    
                    >
                        <option value="mario">mario</option>
                        <option value="luigi">luigi</option>
                    </select>
                </div>

                <div>
                    {!isPending && <input id="submit" className="btn" type="submit" value="Add" />}
                    {isPending && <input disabled className="btn" id="submit" type="submit" value="Adding..." />}
                </div>

            </form>
        </div>
        </>
     );
}
 
export default AddBlog;