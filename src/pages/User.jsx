import { useLoaderData, useNavigate  } from "react-router-dom";


const User = () => {
    let { username, email, address, company } = useLoaderData()
    
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    }
    
    return ( 
        <div>
            <a onClick={goBack}> Back to post</a>

            <h2>User details for {username}</h2>
            <p><span className="bold">Name:</span> {username}</p>
            <p><span className="bold">Email:</span> {email}</p>
            <p><span className="bold">City:</span> {address?.city}</p>
            <p><span className="bold">Company:</span> {company?.name}</p>

        </div>
     );
}
 

export const userInfoLoader = async ({ params }) => {
    const { userId } = params
    let res = await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    return res.json();
}

export default User;