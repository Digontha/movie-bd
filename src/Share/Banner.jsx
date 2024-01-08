import { IoIosRocket } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Banner = () => {


    const reload = () => {
        window.location.reload()
    } 



    const links = <>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-green-500 px-3 lg:p-3 p-1  text-white ml-5 " : "bg-red-700 text-white px-3 lg:p-3 p-1  ml-5"
        } to="/">
           <button className=" lg:w-[100px] w-[58px]  mx-auto">All</button>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-green-500 px-3 lg:p-3 p-1  text-white ml-5" : "bg-red-700 text-white px-3 lg:p-3 p-1  ml-5"
        } to="/trending">
           <button className=" lg:w-[100px] w-[58px] mx-auto">Trending</button>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-green-500 px-3 lg:p-3 p-1  text-white ml-5" : "bg-red-700 text-white px-3 lg:p-3 p-1  ml-5"
        } to="/toprated">
           <button className=" lg:w-[100px] w-[58px] mx-auto">Top Rated</button>
        </NavLink>
    </>
    return (


        <>
            <div className="hero min-h-[80vh]  rounded-xl" style={{ backgroundImage: 'url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)' }}>
                <div className="hero-overlay bg-opacity-700 rounded-xl"></div>
                <div className="">
                    <div className="space-y-10">

                        <p className="mb-5 lg:text-3xl font-plus text-red-700 bg-white p-3 rounded-full bg-opacity-60 font-bold">Free Feel To Enjoy Our Website.....</p>
                        <div className="">
                            <Link to="/login"> <button className="btn btn-outline text-white bg-red-800"><IoIosRocket></IoIosRocket> Get Started</button></Link>
                            <button className="btn btn-outline  text-black bg-white  ml-6"><MdOutlineWorkspacePremium></MdOutlineWorkspacePremium>Latest</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu font-plus menu-horizontal text-[12px] lg:text-[16px] font-semibold gap-3">

                {links}

            </div>

        </>
    );
};

export default Banner;