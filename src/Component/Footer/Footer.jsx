import React from 'react'
import Style from "./Footer.module.css"
import Logo from '../Navbar/Logo'
import google from "../../assets/Footer/google-page-speed 1.png"
import media from "../../assets/Footer/Group 12.png"



let links = ["About Us","Services","Case Studies","How it works","Blog","Careers","Areas We Serve"]
export default function Footer() {
    return (
        <section >
            <div className=' p-2'>

                <div className='grid grid-cols-12 gap-3 '>
                    <div className='col-span-4  '>
                        <div className="flex gap-3    items-center" >
                            <Logo />
                            <span className="font-[400] text-inherit font-[Inspiration] text-[24px]" >Ik developers</span>
                        </div>
                        <p className={`${Style.lorem} my-3`}>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>

                        <img className='my-3' src={google} alt="" />

                    </div>
                    <div className='col-span-4'>
                        <p className={`${Style.header}`}>Links</p>
                        {links.map(( ele)=>{
                            return <> <span  className={`${Style.links} my-3`}>{ele}</span> <br/></>
                        })}
                    </div>
                    <div className='col-span-4'>
                        <p className={`${Style.header}`}>Contact us</p>
                        <p className={`${Style.lorem} my-3`}>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. </p>
                        <span className={`${Style.lorem} my-3`}>+923183561921</span>
                        <div className='flex justify-end items-center gap-2'>
                            <img src={media} alt="" />

                        </div>
                    </div>
                </div>
            </div>



            
           <div className='w-full border-[#CBD5E0] border-t-1 flex justify-center items-center'>
           <span className={`${Style.foo} text-center m-auto my-2`}>© 2023 Copyright by IK Developers. All rights reserved.</span>
           </div>
        </section>
    )
}
