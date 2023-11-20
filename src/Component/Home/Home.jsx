import React from 'react'
import webDeveloper from "../../assets/Home/web-development 1.png"
import Style from "./Home.module.css"
import { Button } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <section className='grid grid-cols-12 my-5 '>
        <div className='col-span-6 flex justify-center items-center '>
         <div >
         <p className={`${Style.main}`}>
            Great
            <span className={`${Style.item_product}`}>Product</span>  is <br/>
           <span className={`${Style.item_build}`}> built by great </span> 
            <span className={`${Style.teams}`}> teams </span>
          </p>

          <p className={`${Style.desc} my-7`}>We help build and manage a team of world-class developers <br/> to bring your vision to life</p>


          <Button className={`${Style.btn}  my-7`}> Let’s get started!</Button>
         </div>

        </div>
        <div className='col-span-6 flex justify-center items-center h-full'>
          <img src={webDeveloper} alt="" />
        </div>

      </section>


    </>

  )
}
