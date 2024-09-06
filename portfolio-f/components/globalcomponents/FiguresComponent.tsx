import React from 'react'
export type figureProps={
    figures:string[],
    labels:string[],
    arrows:number[] //-1 stands for down arrow, 1 stands for up arrow
}
function FiguresComponent({data}:{data:figureProps}) {
  return (
    <div className='w-full'>
        {
            data.figures.map((figure,idx)=>(
                <div key={idx}>
                    <div className="mb-[13px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
                    <div className='w-full flex gap-x-[10px]'>
                        <h3 className='lg:text-[64px] lg:leading-[97px] text-[48px] leading-[72px] font-medium font-dmsans'>{data.figures?.[idx] }</h3>
                        {
                            data.arrows[idx]<0 ? (
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className='self-center'>
                                    <path d="M20 0L10 10L8.74228e-07 -1.74846e-06L20 0Z" fill="#00C7A8"/>
                                </svg>
                            ):(
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className='self-center'>
                                    <path d="M0 10L10 0L20 10H0Z" fill="#00C7A8"/>
                                </svg>
                            )
                        }
                    </div>
                    
                    <p className='text-[16px] leading-[24px] mb-[15px]'>{data.labels?.[idx]}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FiguresComponent