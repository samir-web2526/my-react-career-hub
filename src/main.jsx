import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch(`jobs.json`)
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch(`jobs.json`)
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
