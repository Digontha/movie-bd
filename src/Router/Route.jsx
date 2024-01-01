import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register.jsx/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/about",
            element:<About></About>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
        
        {
            path: "/login",
            element:<Login></Login>
        },
        
        {
            path: "/register",
            element:<Register></Register>
        },
      ]
    },
  ]);

  export default router