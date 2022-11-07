import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])