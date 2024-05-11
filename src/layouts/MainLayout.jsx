import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-72px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;