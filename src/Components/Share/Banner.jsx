import { IoIosRocket } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Banner = () => {
    return (


        <div className="hero min-h-[80vh]  rounded-xl" style={{ backgroundImage: 'url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)' }}>
            <div className="hero-overlay bg-opacity-700 rounded-xl"></div>
            <div className="">
                <div className="space-y-10">
              
                    <p className="mb-5 text-3xl font-plus text-red-700 bg-white p-3 rounded-full bg-opacity-60 font-bold">Free Feel To Enjoy Our Website.....</p>
                   <div className="">
                   <button className="btn btn-outline text-white bg-red-800"><IoIosRocket></IoIosRocket> Get Started</button>
                    <button className="btn btn-outline  text-black bg-white  ml-6"><MdOutlineWorkspacePremium></MdOutlineWorkspacePremium>Latest</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;