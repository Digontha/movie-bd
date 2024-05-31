

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import img from "../../public/CHOBI.jpg"
import useTheme from "../Hooks/useTheme";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GenreMovie from "../Components/Genre/GenreMovie";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })

    }

    const { handleModeChange, mode } = useTheme();

    const [genre, setGenre] = useState([]);
    const [genreId, setGenreId] = useState();
    console.log(genreId)

    console.log(genre);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=ceb836801d754447d4c89925b2dda930`)
            .then(res => {
                setGenre(res.data.genres);
            })
    }, [])

    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-white px-3 dark:bg-[#2D2842]  dark:text-white rounded text-black" : "bg-red-700 px-3 text-black dark:bg-white rounded"
        }><li><p>Home</p></li></NavLink>

        <NavLink to="" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-red-700 hover:bg-white px-3 dark:bg-[#2D2842]  dark:text-white  rounded text-black" : "bg-red-700 px-3  text-black dark:bg-white  rounded"
        }><li   className="dropdown dropdown-hover"><div tabIndex={0} className="m-1">Genre</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        genre.map(gen => <div onClick={()=>setGenreId(gen.id)}   key={gen.id}><li><a>{gen.name}</a></li></div>)
                    }

                </ul>
            </li></NavLink>

        {/* <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-white px-3 dark:bg-[#2D2842]  dark:text-white  rounded text-black" : "bg-red-700 px-3  text-black rounded dark:bg-white"
        }><li><p>Contact</p></li></NavLink> */}

        <div className="ml-2">

            {mode === "light" ? (

                <svg onClick={handleModeChange}

                    size={27}
                    className=" translate-x-1  transform  transition  fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0," /></svg>
            ) : (

                <svg onClick={handleModeChange}

                    size={27} className="fill-current relative rotate-180  items-center translate-x-1  transform  transition  w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            )}

        </div>


    </>


    return (

        <>
            <div className="navbar text-white bg-opacity-95 md:fixed md: z-10 dark:bg-[#282828] bg-[#001F3F] lg:px-20  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-plus menu-sm dropdown-content mt-3 z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52 text-xl">
                            {navLinks}
                        </ul>
                    </div>
                    <a href="/" className="flex items-center gap-2">
                        <img src={img} className="w-12 h-12 rounded-full" alt="" />
                        <p className="text-xl font-plus">CHOBI</p>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu font-plus menu-horizontal text-[16px] font-semibold gap-3">
                        {navLinks}
                    </ul>
                </div>

                <div className="hidden lg:flex">
                    {
                        user ?

                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} ><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-52">
                                    <p className="font-semibold text-black">{user.displayName}</p>
                                    <Link><button onClick={handleLogOut} className="btn  btn-outline btn-sm mt-3">Sign out</button></Link>
                                </ul>
                            </div>

                            :
                            <Link to="/login"><button className="btn  btn-outline btn-sm text-white ">Login</button></Link>
                    }
                </div>

                <div className="navbar-end lg:hidden">
                    {
                        user ?

                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} ><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box lg:w-52">
                                    <p className="font-semibold text-black ">{user.displayName}</p>
                                    <Link><button onClick={handleLogOut} className="btn btn-outline btn-sm w-full text-[10px] mt-3">Sign out</button></Link>
                                </ul>
                            </div>

                            :
                            <Link to="/login"><button className="btn  btn-outline btn-sm text-white">Login</button></Link>
                    }
                </div>


            </div>
        </>
    );
};

export default Navbar;