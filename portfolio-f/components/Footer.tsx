import React from 'react'
import Image from "next/image";
import FooterItem from './FooterItem';

function Footer() {
    const footerNavs = [
        {
            label:"About",
            url:"#about"
        },
        {
            label:"LinkedIn",
            url:"https://ca.linkedin.com/in/frank-zhang-0947b223a?trk=public_profile_project_contributor-image"
        },
        {
            label:"Works",
            url:"#works"
        },
        {
            label:"See full CV",
            url:"#"
        }
    ]

  return (
    <section className='w-screen bg-[#EEEEEE] h-fit fixed z-[1] bottom-0'>
        <div className='layout pt-[55px] lg:pt-[120px]'>
            <div className='w-full flex flex-wrap gap-y-[26px] gap-x-[43.7%]'>
                <Image src="/images/ai-home/logo.png" alt="Frank Zhang Design - Logo" width={41} height={20} className='w-[41px] h-[20px] lg:ml-20 hover:-translate-y-[6px] transition-transform duration-200 transform '/>
                <div className='w-[400px] flex flex-col '>
                    <div className='flex flex-col'>
                        <h1 className='lg:text-[48px] lg:leading-[48px] text-[40px] leading-[40px]'>Let&apos;s talk</h1>
                        <a href="mailto:franketns@gmail.com" className='flex hover:opacity-60'>
                            <h1 className='lg:text-[48px] lg:leading-[48px] text-[40px] leading-[40px]'>Drop me a line</h1>
                            <svg width="34" height="34" viewBox="0 0 27 26" fill="none" className='self-end ml-3'>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.225193 22.2599L17.3952 5.08981L2.00649 5.09574L2.00844 0.0262148L26.0514 0.0169506L26.0421 24.0599L20.9726 24.0619L20.9785 8.67314L3.80851 25.8432L0.225193 22.2599Z" fill="#00C7A8"/>
                            </svg>
                        </a>
                    </div>
                    <div className=' mt-[53px] w-full flex flex-wrap gap-x-[30%] lg:gap-x-[50%] gap-y-2'>
                        {
                            footerNavs.map((item,idx)=>(
                                <div key={idx+item.label} className=' w-[100px]'>
                                    <FooterItem label={item.label} url={item.url}/>
                                </div>
                            ))
                        }
                    </div>   
                </div>
            </div>
            <div className=" w-full lg:mt-[50px] mt-[82px] h-0 border-[1px] border-[#D9D9D9]"/>
            <div className='w-[90%]  mx-auto mt-[26px] pb-[26px] flex flex-col lg:flex-row gap-y-2'>
                <p className='flex-grow text-[14px] leading-[14px] font-dmsans text-[#898989]'> © 2024 Frank Zhang </p>
                <p className=' lg:self-end text-[14px] leading-[14px] font-dmsans text-[#898989]'> Developed by Chenxuan Wang, Rohan Vania </p>
            </div>
        </div>
    </section>
  )
}

export default Footer;