import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toUpperCase } from "../utility/toUpperCase";

const Home = () => {
    const posts = useLoaderData()
    const navigate = useNavigate()

    return ( 
        <div>
            <h2>Blog posts</h2>
            {posts?.map(post => {
                let title = toUpperCase(post.title)

                return (
                    <div className="post">
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
