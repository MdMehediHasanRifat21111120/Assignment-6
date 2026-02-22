import { Outlet } from "react-router";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";

export default function RootLayout(){
    return(
        <>
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}