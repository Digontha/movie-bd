import { NavLink } from "react-router-dom";


const Navbar = () => {

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

        <div className="navbar text-white bg-opacity-95 fixed z-10 bg-[#001F3F] lg:px-20  font-monster">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <p className="text-xl">CHOBI</p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal text-[18px] font-semibold gap-3">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;