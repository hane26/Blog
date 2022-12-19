import {
  createBrowserRouter,
  RouterProvider,

  
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import "./style.scss"

const Layout = () => {
  return(
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", // path of the route
    element: <Layout/>,// this is the page we are visiting
    children: [
  
      {
        path: "/",// main url
        element: <Home/>,// this is the page we are visiting
      },
   
      // {
      //   path: "/write",
      //   element: <Write/>,
      // },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/post/:id",// main url
    element: <Single/>,// this is the page we are visiting
  },


]);

function App() {
  return (
    <div className="app">
      <div className="container"> 
      <RouterProvider router = {router}/>
      </div>
    </div>
  );
}


export default App;
