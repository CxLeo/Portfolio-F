'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import FooterItem from './FooterItem';
import { cn } from '@/utilities/utilities';
import { useTheme } from 'next-themes';
import Line from './globalcomponents/Line';

function Footer() {
    const { theme } = useTheme();
    const [themeState,setThemeState] = useState("light");

    useEffect(() => {
        if (localStorage.getItem('themes')===null){
            localStorage.setItem('themes','light');
        }
        const themeLocal = localStorage.getItem('themes');
        if (themeLocal) {
            setThemeState(themeLocal);
        }
    });



    const footerNavs = [
        {
            label: "About",
            url: "/#about"
        },
        {
            label: "LinkedIn",
            url: "https://ca.linkedin.com/in/frank-zhang-0947b223a?trk=public_profile_project_contributor-image"
        },
        {
            label: "Works",
            url: "/#works"
        },
        {
            label: "See full CV",
            url: "/files/frank-resume.pdf"
        }
    ]

    

    return (
        <section
            // className='w-full bg-[#EEEEEE h-fit '
            className={cn('w-full h-fit',
                
                themeState === 'dark' ? 'bg-[#1e1e1f]' : "bg-[#EEEEEE]"
            )}
        >
            <div className='layout pt-[55px] lg:pt-[120px]'>
                <div className='w-full flex flex-wrap gap-y-[26px] gap-x-[43.7%]'>
                    <svg width="35" height="50" viewBox="0 0 35 50" fill="" xmlns="http://www.w3.org/2000/svg"
                        // className='text-black w-[35px]  h-[50px] lg:ml-20 hover:-translate-y-[6px] transition-transform duration-200 transform'
                        className={cn('w-[35px] text-red-400 h-[50px] lg:ml-20 hover:-translate-y-[6px] transition-transform duration-200 transform')}
                    >

                        <path d="M20.4122 0.00943498C25.0178 0.00943498 30.3931 0 34.9987 0C35.0002 2.80977 35.0013 6.37122 34.9959 9.181C34.9899 12.1636 33.4481 14.1629 30.8846 15.4768C29.8704 15.9962 28.7627 16.191 27.6285 16.1918C18.6842 16.1964 8.94486 16.1948 0.000611802 16.1941C-0.000908683 13.4032 0.002786 9.90505 0.00277839 7.07504C-0.0261108 4.47452 1.20852 2.51974 3.28475 1.12168C4.42511 0.353656 5.71143 -0.00344206 7.10952 0.00262329C11.5433 0.0215775 15.9777 0.00943498 20.4122 0.00943498Z"
                             fill ={cn( themeState==='light' ? 'black' : 'white')} />
                        <path d="M12.4324 21.9101C12.1906 22.1095 12.0386 22.2429 11.8789 22.3665C9.70084 24.0534 8.59622 26.2703 8.92008 29.0096C9.26143 31.8997 10.8921 33.9255 13.6191 34.9976C14.2258 35.2364 15.5098 35.3062 16.1652 35.3941C16.1606 39.8544 16.1606 44.9668 16.1682 49.4263C16.1682 49.8403 16.0101 49.9972 15.5935 49.9957C12.5875 49.9836 9.58148 50.0268 6.57625 49.9707C3.89031 49.9206 1.03713 47.6749 0.299695 45.0987C0.130161 44.5065 0.0252463 43.875 0.0229656 43.2609C0.00395957 36.0484 0.0166385 28.1578 0.00067343 20.9453L0 20.9464C2.83845 20.9464 6.20145 20.9578 8.9596 20.9556C10.1615 20.9548 11.2806 21.2452 12.4324 21.9101Z"
                              fill ={cn( themeState==='light' ? 'black' : 'white')} />
                        <path d="M23.4765 20.957C27.4586 20.9495 30.7079 24.2005 30.7155 28.1998C30.7224 32.2333 27.4814 35.5139 23.4712 35.501C19.2465 35.4874 16.1462 32.2553 16.0999 28.2529C16.0527 24.1944 19.3605 20.9654 23.4765 20.957Z"
                            fill="#7C7C7C" />
                    </svg>

                    {/* <Image src="/images/ai-home/logo.png" alt="Frank Zhang Design - Logo" width={35} height={50} className='w-[35px]  h-[50px] lg:ml-20 hover:-translate-y-[6px] transition-transform duration-200 transform ' /> */}
                    <div className='w-[400px] flex flex-col '>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-[48px] lg:leading-[48px] text-[40px] leading-[40px]'>Let&apos;s talk</h1>
                            <a href="mailto:franketns@gmail.com" className='flex hover:opacity-60'>
                                <h1 className='lg:text-[48px] lg:leading-[48px] text-[40px] leading-[40px]'>Drop me a line</h1>
                                <svg width="34" height="34" viewBox="0 0 27 26" fill="none" className='self-end ml-3'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.225193 22.2599L17.3952 5.08981L2.00649 5.09574L2.00844 0.0262148L26.0514 0.0169506L26.0421 24.0599L20.9726 24.0619L20.9785 8.67314L3.80851 25.8432L0.225193 22.2599Z" fill="#00C7A8" />
                                </svg>
                            </a>
                        </div>
                        <div className=' mt-[53px] w-full flex flex-wrap gap-x-[30%] lg:gap-x-[50%] gap-y-2'>
                            {
                                footerNavs.map((item, idx) => (
                                    <div key={idx + item.label} className=' w-[100px]'>
                                        <FooterItem label={item.label} url={item.url} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full lg:mt-[50px] mt-[82px]'><Line/></div>
                
                <div className='w-[90%]  mx-auto mt-[26px] pb-[26px] flex flex-col lg:flex-row gap-y-2'>
                    <p className='flex-grow text-[14px] leading-[14px] font-dmsans text-[#898989]'> © 2024 Frank Zhang </p>
                    {/* <p className=' lg:self-end text-[14px] leading-[14px] font-dmsans text-[#898989]'> Coded by Chenxuan Wang, Rohan Vania </p> */}
                </div>
            </div>
        </section>
    )
}

export default Footer;