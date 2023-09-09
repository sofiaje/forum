import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages 
import Root from './pages/Root'
import Home, { postsLoader } from './pages/Home'
import Post, { postInfoLoader } from './pages/Post';
import User, { userInfoLoader } from './pages/User';
import ErrorPage from './pages/ErrorPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index loader={postsLoader} element={<Home />} />
        <Route path="/post/:postId" loader={postInfoLoader} element={<Post />} />
        <Route path="/user/:userId" loader={userInfoLoader} element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>  
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
