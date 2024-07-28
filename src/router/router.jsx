import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../Components/Header/Header";
import Cities from "../Components/Cities/Cities";
import Images from "../Components/Images/Images";
import Posts from "../Components/Posts/Posts";

// Define the routes
const routes = [
  {
    path: "/",
    element: <App />, 
    children: [
        {
          path:"/" ,
          element: <Cities />
        },  {
          path: "/images", 
          element: <Images />
        },
        {
          path: "/posts", 
          element: <Posts />
        }
    ],
  },
];

// Create the router instance
const router = createBrowserRouter(routes);

export default router;
