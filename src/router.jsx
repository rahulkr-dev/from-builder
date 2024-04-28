import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/HomePage";
import FormBuilder from "./pages/form-builder/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"/dashboard",
    element:<DashboardLayout />,
    children:[
      {
        path:"home",
        element:<HomePage />
      },
        {
            path:"form-builder",
            element:<FormBuilder />
        },
    ]
  }
]);
