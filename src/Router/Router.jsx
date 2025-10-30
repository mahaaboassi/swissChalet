import { createBrowserRouter } from "react-router-dom";

// Home And Main Home1
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
// Home And Main Home2
import Main2 from "../Main/Main2";
import Home2 from "../Pages/Home2/Home2";
// Home And Main Home3
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
// Home And Main Home4
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";
// Home And Main Home-5
import Home5 from "../Pages/Home5/Home5";
import Main5 from "../Main/Main5";

// All InnerPage
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import FindRoom from "../Pages/InnerPage/FindRoom";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";
import Blog from "../Pages/InnerPage/Blog";
import BlogDetails from "../Pages/InnerPage/BlogDetails";
import Contact from "../Pages/InnerPage/Contact";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

// Starting React Router.
const router = createBrowserRouter([
    {
    path: "/",
    element: <Main4 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home4 />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/spaces",
        element: <Room />,
      },
      {
        path: "/space_details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog_details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },


]);

export default router;
