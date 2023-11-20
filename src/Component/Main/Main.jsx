import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import BestDeveloper from '../BestDeveloper/BestDeveloper'
import HowDevelopment from '../HowDevelopment/HowDevelopment'
import GreatSoftware from '../GreatSoftware/GreatSoftware'
import DevelopmentApptoach from '../DevelopmentApproach/DevelopmentApptoach'
import FeedBack from '../FeedBack/FeedBack'

export default function Main() {
  return (
   <>
   {/* <Navbar/>
   <Outlet/>
   <Footer/> */}
   <Navbar />
   <Home/>
   <FeedBack/>
   <GreatSoftware/>
   <DevelopmentApptoach/>
   <HowDevelopment/>
   <BestDeveloper/>
   <Footer/>
   </>
  )
}
