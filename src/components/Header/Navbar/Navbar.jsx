import { AiOutlineMenu } from "react-icons/ai";
import { ImMobile2 } from "react-icons/im";
import { RxCross1} from "react-icons/rx";
import Link from "../Link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] =useState(false);
    const [mode, setMode] = useState(false)
    const [theme, setTheme] = useState("light")
    useEffect(()=>{
      if(theme === "dark"){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }
     
    },[theme])
 const handleThemeSwitch = () =>{
        setTheme(theme  === "dark" ? "light" : "dark")
      }
    const links = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/favorites", name: "Favorites" },
        { id: 3, path: "/login", name: "Login" }
      ];
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-10 ">
        <div className="bg-white dark:bg-slate-600 md:flex md:justify-between py-6 px-7 md:px-10">
          <div className="text-2xl font-bold flex  items-center text-gray-800 cursor-pointer">
            <span className="text-2xl text-indigo-600 pt-1 mr-1">
              <ImMobile2></ImMobile2>
            </span>
            <h1>Phone Hunter</h1>
          </div>
          <div>
         
          </div>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-6 top-6 md:hidden cursor-pointer">
          {
                    (open === true ? <RxCross1></RxCross1> :<AiOutlineMenu ></AiOutlineMenu>) 
          }
          </div>
          <ul className={`md:flex md:justify-center  items-center md:gap-4 pb-4 md:pb-0 absolute md:static bg-white dark:bg-slate-600 px-5 md:px-0 w-full md:z-auto z-[-1] left-0 md:w-auto pl-8 md:pl-0 transition-all duration-500 ease-in ${open? "top-16 opacity-100" : "top-[-460px] opacity-0 md:opacity-100 duration-300 "}`}>
            {links.map((link) => (
              <Link key={link.id} link={link}></Link>
            ))}
            <div onClick={()=>setMode(!mode)}>
            <button onClick={handleThemeSwitch}
             className="bg-indigo-600 px-2 py-2 rounded-lg shadow-sm text-white font-semibold hover:bg-indigo-400">
            {mode? "Light" : "Dark"}
            </button>
            </div>
          </ul>
         
        </div>
      </div>
    );
};

export default Navbar;