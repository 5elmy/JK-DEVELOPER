import React from 'react'
import Style from "./GreatSoftware.module.css"
import img from "../../assets/software/Rectangle 17.png"
export default function GreatSoftware() {
    return (


        <section>
            <div className={`${Style.how} border-[#E7DAED] bg-white border-t-[1px]  my-5 p-3`}>
                <div className='flex flex-col  item-center mt-10'>
                    <span className={`${Style.title1}`}>Way of building </span>
                    <br />
                    <span className={`${Style.title2}  m-auto`}>Great Software</span>

                </div>

                <div className='flex justify-center items-center mt-5'>
                <div className='grid grid-cols-12 lg:w-[90%] xl:w-[70%]  mt-5 '>
                <div className='col-span-6   p-5  flex justify-center items-center   '>
                       <div >
                       <h3 className={`${Style.title3}`}>Build the right team to scale</h3>
                       
                       <p className={`${Style.text1} my-1 `}>
                            Finding the right talent is not easy. We help you find the talent <br/> that suits your needs, follows your processes, and sticks with <br/> you long term (not the case with freelancers
                       </p>
                       <p className={`${Style.text1} my-1`}>
                       Our <span className={`${Style.specific_text}`}> delivery model </span>  helps you cut costs and deliver within budget.
                       </p>

                       <div className='border-[#57007B] border-l-2' >
                           <p className={`${Style.quote} ms-1`}>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</p>

                       </div>
                       </div>
                       
                    </div>
                    <div className='col-span-6  '>
                        <div className={`${Style.main} `}>
                           <div className=' translate-x-1 '>
                           <img src={img} className='' alt="" />
                           </div>

                        </div>
                    </div>
                      
                </div>
                </div>
                <div className='flex justify-center items-center mt-5'>
                <div className='grid grid-cols-12 lg:w-[90%] xl:w-[70%]   '>
                    
                                {/* {2} */}
                    
                    <div className='col-span-6  '>
                        <div className={`${Style.main2}`}>
                           <div className=''>
                           <img src={img} className=' translate-x-1' alt="" />
                           </div>

                        </div>
                    </div>
                   
                    <div className='col-span-6   p-5  flex justify-center items-center   '>
                       <div >
                       <h3 className={`${Style.title3}`}>Build the right team to scale</h3>
                       
                       <p className={`${Style.text1} my-1 `}>
                            Finding the right talent is not easy. We help you find the talent <br/> that suits your needs, follows your processes, and sticks with <br/> you long term (not the case with freelancers
                       </p>
                       <p className={`${Style.text1} my-1`}>
                       Our <span className={`${Style.specific_text}`}> delivery model </span>  helps you cut costs and deliver within budget.
                       </p>

                       <div className='border-[#57007B] border-l-2' >
                           <p className={`${Style.quote} ms-1`}>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</p>

                       </div>
                       </div>
                       
                    </div>
                    
                    

                </div>
                </div>
                <div className='flex justify-center items-center mt-5'>
                <div className='grid grid-cols-12 lg:w-[90%] xl:w-[70%] mt-5 '>
                  
                  
                    {/* 3 */}
                            
                    <div className='col-span-6   p-5  flex justify-center items-center   '>
                       <div >
                       <h3 className={`${Style.title3}`}>Build the right team to scale</h3>
                       
                       <p className={`${Style.text1} my-1 `}>
                            Finding the right talent is not easy. We help you find the talent <br/> that suits your needs, follows your processes, and sticks with <br/> you long term (not the case with freelancers
                       </p>
                       <p className={`${Style.text1} my-1`}>
                       Our <span className={`${Style.specific_text}`}> delivery model </span>  helps you cut costs and deliver within budget.
                       </p>

                       <div className='border-[#57007B] border-l-2' >
                           <p className={`${Style.quote} ms-1`}>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</p>

                       </div>
                       </div>
                       
                    </div>
                    <div className='col-span-6  '>
                        <div className={`${Style.main3}`}>
                           <div className=''>
                           <img src={img} className=' translate-x-1 translate-y-1' alt="" />
                           </div>

                        </div>
                    </div>
                    

                </div>
                </div>

            </div>
        </section>
    )
}
