import { NavLink, useLoaderData, useNavigate, Link } from "react-router-dom";
import { toUpperCase } from "../utility/toUpperCase";

const Post = () => {
    const navigate = useNavigate()

    const { userData, postData, comments } = useLoaderData()
    const { title, body } = postData
    console.log("kommentarer", comments)

    return (
        <div>

            <div className="postDetails">
                <h2>{toUpperCase(title)}</h2>
                <p>{toUpperCase(body)}</p>
                <p>Blog author: <Link to={`/user/${userData.id}`}>{userData.username}</Link></p>
            </div><br /><br />
            <NavLink to="/"> Back to posts</NavLink>

            <div>
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div className="comment">
                        <h3>{toUpperCase(comment.name)}</h3>
                        <p>{comment.email}</p>
                        <p>{toUpperCase(comment.body)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// loader function
export const postsLoader = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return res.json()
}


export const postInfoLoader = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + params.postId)
    const postData = await res.json()

    const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/` + postData.userId)
    const userData = await res2.json()

    const res3 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + params.postId)
    const comments = await res3.json()

    return { postData, userData, comments }
}
 
export default Post;