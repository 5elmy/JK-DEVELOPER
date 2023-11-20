import React from 'react'
import Style from "./DevelopmentApproach.module.css"
import rocket from "../../assets/approach/Rocket_perspective_matte.png"
import img2 from "../../assets/approach/Code_perspective_matte2.png"
import img3 from "../../assets/approach/Heart_rate_perspective_matte3.png"
import img4 from "../../assets/approach/Shield_perspective_matte4.png"
import img5 from "../../assets/approach/Success_perspective_matte5.png"
import img6 from "../../assets/approach/Padlock_perspective_matte6.png"

let items =[
    {
        key:1,
        img:<div  className='w-[59px] h-[56px] bg-black rounded-[10px] flex justify-center items-center'> <img src={rocket} alt="" /> </div>,
        title:"UX Driven Engineering",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
        key:2,
        img:<div style={{   background: "var(--gradient-primary-bg, linear-gradient(225deg, #509CF5 0%, #68DBF2 100%))"}} className='w-[59px] h-[56px] rounded-[10px] flex justify-center items-center'> <img src={img2} alt="" /> </div>,
        title:"Developing Shared Understanding",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
        key:3,
        img:<div  style={{background: "#FF3D9A"}} className='w-[59px] h-[56px] rounded-[10px] flex justify-center items-center'> <img src={img3} alt="" /> </div>,
        title:"Proven Experience and Expertise",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
        key:4,
        img:<div style={{background: "#24E795"}} className='w-[59px] h-[56px] rounded-[10px] flex justify-center items-center'> <img src={img4} alt="" /> </div>,
        title:"Security & Intellectual Property (IP)",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
        key:4,
        img:<div style={{   background: "var(--gradient-primary-bg, linear-gradient(225deg, #F7936F 0%, #FFEF5E 100%))"}} className='w-[59px] h-[56px] rounded-[10px] flex justify-center items-center'> <img src={img5} alt="" /> </div>,
        title:"Code Reviews",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
    {
        key:4,
        img:<div style={{  background: "var(--gradient-primary-bg, linear-gradient(225deg, #F76680 0%, #57007B 100%))"}} className='w-[59px] h-[56px] rounded-[10px] flex justify-center items-center'> <img src={img6} alt="" /> </div>,
        title:"Quality Assurance & Testing",
        desc:"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
    },
]
export default function DevelopmentApptoach() {
    return (
        <div className={`${Style.how} bg-[#F7F7FA] border-[#E7DAED] border-t-[0.5px]  my-5 p-3`}>
            <div className='flex flex-col  item-center my-10'>
                <span className={`${Style.title1}`}>Our design and </span>
                <br />
                <span className={`${Style.title2}  m-auto`}>development approach</span>

            </div>

            <div className='flex justify-center items-center'>
            <div className='grid grid-cols-12  lg:w-[80%] xl:w-[60%] gap-6'>
                {items.map((ele)=>{
                    return <div className={`${Style.item} col-span-6 flex gap-3 m-3 p-3`}>
                    <div>
                        {ele.img}
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <p className={`${Style.title}`}>{ele.title}</p>
                        <p className={`${Style.desc}`}>{ele.desc}</p>
                    </div>
    
                </div>

                })}
            </div>
            </div>


        </div>

    )
}
