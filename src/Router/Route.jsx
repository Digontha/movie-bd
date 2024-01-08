import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register.jsx/Register";
import Trending from "../Components/Trending/Trending";
import TopRated from "../Components/TopRated/TopRated";
import MovieDetails from "../Components/Details/MovieDetails";



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
            path: "/trending",
            element:<Trending></Trending>
        },
        {
            path: "/toprated",
            element:<TopRated></TopRated>
        }
        ,
        {
            path: "/movieDetails/:id",
            element:<MovieDetails></MovieDetails>,
            loader:({params})=>fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ceb836801d754447d4c89925b2dda930&language=en-US`)
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