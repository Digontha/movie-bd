
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import img from "../../public/CHOBI.jpg"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })
    }

    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-white px-3  rounded text-black" : "bg-red-700 px-3  rounded"
        }><li><p>Home</p></li></NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-white px-3  rounded text-black" : "bg-red-700 px-3  rounded"
        }><li><p>About</p></li></NavLink>

        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-white px-3  rounded text-black" : "bg-red-700 px-3  rounded"
        }><li><p>Contact</p></li></NavLink>


    </>


    return (

        <div className="navbar text-white bg-opacity-95 md:fixed md: z-10 bg-[#001F3F] lg:px-20  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-plus menu-sm dropdown-content mt-3 z-[1] p-2 gap-3 shadow bg-base-100 rounded-box w-52 text-xl">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src={img} className="w-12 h-12 rounded-full" alt="" />
                    <p className="text-xl font-plus">CHOBI</p>
                </div>
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
    );
};

export default Navbar;