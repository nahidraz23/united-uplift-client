import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import NeedVolunteer from "../pages/NeedVolunteer";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddVoulunteer from "../pages/AddVoulunteer";
import VolunteerDetails from "../pages/VolunteerDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/needVolunteer',
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/registration',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/addvolunteer',
                element: <AddVoulunteer></AddVoulunteer>
            },
            {
                path: '/volunteerDetails/:id',
                element: <VolunteerDetails></VolunteerDetails>,
                loader: ({params}) => fetch(`http://localhost:5300/volunteers/${params.id}`)
            }
        ]
    }
])

export default router;