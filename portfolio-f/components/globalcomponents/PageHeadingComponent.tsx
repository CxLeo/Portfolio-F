import React from 'react'

type props = {
  text: string,
  subtext: string,
  tag: string
}

function PageHeadingComponent({ text, subtext, tag }: props) {
  return (
    <>
      <div className='mt-[200px] mb-[20px] layout-2 flex 1130:items-center bg-purple-20 1130:flex-row flex-col gap-y-3' >
        <h1 className='bg-red-40 text-[55px] md:text-[64px] flex-1 flex flex-col '>
          <span className='text-[16px] uppercase bg-[#00c7A8] w-fit ml-1 px-5 py-2 rounded-[27px]'>new</span>
          {text}
        </h1>
        <h2 className='bg-yellow-5 text-[24px] sm:text-[30px]  md:text-[32px] flex-1 text-[#898989] 1130:mt-10'>{subtext}</h2>
      </div>
    </>
  )
}

export default PageHeadingComponent
