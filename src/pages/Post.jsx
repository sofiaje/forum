import { NavLink, useLoaderData, Link } from "react-router-dom";
import { toUpperCase } from "../utility/toUpperCase";

const Post = () => {

    const { userData, postData, comments } = useLoaderData()


    const Post = ({ postData, userData }) => {
        return (
        <div className="postDetails">
                <h2>{toUpperCase(postData.title)}</h2>
                <p>{toUpperCase(postData.body)}</p>
                <p>Blog author: <Link to={`/user/${userData.id}`}>{userData.username}</Link></p>
        </div>
        )
    }

    const Comment = ({comment}) => {
        return (
            <div className="comment">
               <h3>{toUpperCase(comment.name)}</h3>
                <p>{comment.email}</p>
                <p>{toUpperCase(comment.body)}</p>
            </div>
        )
    }

  
    
    return (
        <div>
            <NavLink to="/"> Back to posts</NavLink>

            <Post postData={postData} userData={userData} key={postData.id} />

            <h2>Comments</h2>
            {comments.map(comment => (
                <Comment comment={comment} key={comment.id}/>
            ))}
            
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