import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;