import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../homeComponents/Banner";
import Features from "../homeComponents/Features";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner>
            <Features></Features> */}
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;