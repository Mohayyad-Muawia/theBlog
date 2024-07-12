import  BlogList  from './BlogList'
import Loading from './Loading';
import useFetch from './useFetch';

let Home =  () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <>
        <div className="home">
            { isPending && <Loading /> }
            { error && <div> { error } </div> }
            { blogs && <BlogList blogs={blogs} title='all blogs' /> }
        </div>
        </>
    )
}

export default Home;