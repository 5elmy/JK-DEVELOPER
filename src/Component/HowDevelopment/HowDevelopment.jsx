import React from 'react'
import Style from "./howdevelopment.module.css"
import cup from "../../assets/How Developement/Trophy_perspective_matte.png"

let itemsTop =[
{
    key:1,
    hash:"#1",
    title:"Assemble the right team",
    desc:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
},
{
    key:2,
    hash:"#2",
    title:"Assemble the right team",
    desc:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
},
{
    key:3,
    hash:"#3",
    title:"Assemble the right team",
    desc:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
},
{
    key:4,
    hash:"#4",
    title:"Assemble the right team",
    desc:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
},
{
    key:5,
    hash:"#5",
    title:"Assemble the right team",
    desc:`We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.`
},
{
    key:6,
    hash:"#6",
    title:"Assemble the right team",
    desc:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
},
]
export default function HowDevelopment() {
    
  return (
    <div className={`${Style.how} border-[#E7DAED] border-t-[0.5px]  my-5 p-3`}>
        <div className='flex flex-col  item-center mt-10'>
        <span className={`${Style.title1}`}>How development </span>
        <br/>
        <span className={`${Style.title2}  m-auto`}>through Alcaline works</span>

        </div>

        <div className={`flex justify-center items-center gap-8 w-[80%]  mb-3 my-12`}>
            {
                itemsTop.map((ele)=>{
                    if(ele.key %2 !=0 ){
                        return<div className={`${Style.dev} ${Style.item3}  p-4`}>
                            <div className='flex gap-2 p-2'>
                                <p className={`${Style.hash}`} >{ele.hash}</p>
                                <p className={`${Style.title_hash}`} >{ele.title}</p>
                            </div>
                            <p className={`${Style.desc_hash}`} >{ele.desc}</p>


                         
                    </div>
                    }
                })
            }
            
        </div>
        <div className='flex gap-2 items-center'>
        <div  className={` ${Style.line}   my-12 w-[90%]`}>
        
        </div>
        <img src={cup} className='w-[50px] h-[50px]'  alt="" />
        </div>

            <div className=' w-[90%] mx-12  flex justify-end  items-center'>


        <div className={`flex justify-center items-center gap-8  mb-3 `}>
            {
                itemsTop.map((ele)=>{
                    if(ele.key %2 ==0 ){
                        return<div className={`${Style.dev} ${Style.item4}  p-4`}>
                            <div className='flex gap-2 p-2'>
                                <p className={`${Style.hash}`} >{ele.hash}</p>
                                <p className={`${Style.title_hash}`} >{ele.title}</p>
                            </div>
                            <p className={`${Style.desc_hash}`} >{ele.desc}</p>

                         
                    </div>
                    }
                })
            }
            
        </div>
            </div>
    </div>
  )
}
