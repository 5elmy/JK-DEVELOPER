import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter, useRoutes } from 'react-router-dom'
import Main from './Component/Main/Main'
import Home from './Component/Home/Home'
import Notfound from './Component/NotFound/Notfound'

// import Navbar from './Component/Navbar/Navbar'
import Navbarmain from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import BestDeveloper from './Component/BestDeveloper/BestDeveloper'
import HowDevelopment from './Component/HowDevelopment/HowDevelopment'
import DevelopmentApptoach from './Component/DevelopmentApproach/DevelopmentApptoach'
import GreatSoftware from './Component/GreatSoftware/GreatSoftware'
import Services from './Component/Services/Services'
import FeedBack from './Component/FeedBack/FeedBack'


export default function App() {

  const router = createHashRouter([
    {path:"/" ,element:<Main/>,children:[
  {path:"navbar" ,  element:<Navbarmain/>},
  {index:true ,  element:<Home/>},
  {path:"footer" ,  element:<Footer/>},
  {path:"best/developer" ,  element:<BestDeveloper/>},
  {path:"how-development" ,  element:<HowDevelopment/>},
  {path:"development-approach" ,  element:<DevelopmentApptoach/>},
  {path:"development/software" ,  element:<GreatSoftware/>},
  {path:"service" ,  element:<Services/>},
  {path:"feedback" ,  element:<FeedBack/>},
 



  {path:"*" ,  element:<Notfound/>},

  ]}
  ])


  
  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}
