import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../components/Phones/Phone";
const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: ()=> fetch("/phones.json")
            },
            {
                path: "/favorites",
                element:<Favorites></Favorites>
            },
            {
                path: "/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/phones/:id",
                element:<Phone></Phone>,
                loader: ()=> fetch("/phones.json")
            },
        ]
    }
])
export default myCreatedRoute;