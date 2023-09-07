import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages 
import Root from './pages/Root'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
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
