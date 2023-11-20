import React from 'react'

export default function Ball({props}) {
    let { size , top ,left} = props
    console.log({ size, top ,left});
  return (

     <div  className={  `w-[64px] h-[64px] bg-red-500   rounded-full absolute top-[-30px] left-[-30px] `}></div>
      
    
  )
}
