import { createBrowserRouter } from "react-router-dom";
import Master from "../layout/master";
import Addcategory from "../modules/Category/AddCategory";
import Dashboard from "../modules/Dashboard";
import Error500 from "../modules/Error500";



const ProjectRouter = createBrowserRouter([
    {
        path:"/",
        element:<Master></Master>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
            {
                 path:'/category/create',
                 element:<Addcategory></Addcategory>
            },
            {
                path:'/error-500',
                element:<Error500></Error500>
            }
        ]
    }
])

export default ProjectRouter;