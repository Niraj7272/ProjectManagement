import React from 'react'
import Header from './layouts/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Footer from './layouts/Footer'

const MyRoute = () => {

    const Layout = () =>{
        return(
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        )
    }

    const routeStart = createBrowserRouter(
        [
            {
                path:"/",
                element:<Layout/>,
                children:[
                    {
                        path:"/",
                        element:<Home/>
                    },
                    {
                        path:"/aboutUs",
                        element:<AboutUs/>
                    },
                    {
                        path:"/contactUs",
                        element:<ContactUs/>
                    }
                ]
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    )

  return (
    <div>
        <RouterProvider router={routeStart}/>
    </div>
  )
}

export default MyRoute