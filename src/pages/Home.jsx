import { Link, useLoaderData } from "react-router-dom";
import { toUpperCase } from "../utility/toUpperCase";

const Home = () => {
    const posts = useLoaderData()
    return ( 
        <div>
            <h2>Threads</h2>
            {posts?.map(post => {
                let title = toUpperCase(post.title)

                return (
                    <div className="post" key={post.id}>
                        <Link to={`/post/${post.id}`}>{title}</Link>
                    </div>
                )}
            )}
        </div>
     );
}
 
// loader function
export const postsLoader = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return res.json()
}


export default Home;
