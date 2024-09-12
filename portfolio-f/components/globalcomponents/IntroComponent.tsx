"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";


export type IntroProps={
    project:string,
    title:string,
    img:string,
    video?:string,
    description:string,
    labels?:string[],
    figures?:string[]
}

function IntroComponent({data}:{data:IntroProps}) {
  return (
    <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{type: 'tween', duration: 0.3, ease: 'easeInOut'}} className=' layout-2'>
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className='flex flex-col lg:flex-row gap-y-[50px]'>
            <div className='flex-1'>
                <p className='font-dmsans lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px]'>
                    What&apos;s {data.project}?
                </p>
                <p className='font-dmsans lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] text-[#898989] '>
                    {data.title}
                </p>
            </div>
            <div className=' flex-1 '>
                {
                    !data.video && <Image src={data.img} width={636} height={636} alt={data.project} className='w-full'/>
                }
                {
                    data.video && (<video width={636} height={636} loop preload="auto" playsInline autoPlay className="rounded-full w-full">
                    <source src={data.video} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>)
                } 
                
                <p className='text-[17px] font-[350] leading-[24px] text-[#898989] mt-[63px]'>
                    {data.description}
                </p>

                {
                    data.labels && data.figures && (
                    <div className='mt-[60px]'>
                        <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>{data.labels[0]}</p>
                        <div className='w-full'>
                            {
                                data.figures.map((figure,idx)=>(
                                    <div key={idx} >
                                        <div className="mb-[13px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
                                        <h3 className='lg:text-[64px] lg:leading-[97px] text-[48px] leading-[72px] font-medium font-dmsans'>{data.figures?.[idx] }</h3>
                                        <p className='text-[16px] leading-[24px] mb-[15px]'>{data.labels?.[idx+1]}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </motion.div>
  )
}

export default IntroComponent