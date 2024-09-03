import React from 'react'

type props={
    text:string,
    subtext:string,
    tag:string
}

function PageHeadingComponent({text,subtext,tag}:props) {
  return (
    <div className='mt-[200px] mb-[20px] layout-2 flex 1130:items-center bg-purple-20 1130:flex-row flex-col gap-y-3' >
      <h1 className='bg-red-40 text-[55px] md:text-[64px] flex-1 '>{text}</h1>
      <h2 className='bg-yellow-5 text-[30px]  md:text-[32px] flex-1 text-[#898989]'>{subtext}</h2>
    </div>
  )
}

export default PageHeadingComponent
