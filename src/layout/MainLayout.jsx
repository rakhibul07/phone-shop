import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
        if(loc.pathname == "/"){
            document.title = `Phone-home`
        }
        else{
            document.title = `Phone ${loc.pathname.replace("/","-")}`;
        }
        if(loc.state){
            document.title = ` ${loc.state}`;
        }
     
    },[loc.pathname,loc.state]);
   
    return (
        <div className="lg:px-16 dark:bg-slate-600">
            <Navbar ></Navbar>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;