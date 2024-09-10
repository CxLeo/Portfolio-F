"use client"
import React, { useState } from 'react'
import { useScroll, motion, useMotionValueEvent, useCycle } from "framer-motion";


function BackButton() {
    const {scrollY}=useScroll();
    const [isOpen, toggleOpen] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest)
        if (latest>1000) toggleOpen(true);
        if (latest<=1000) toggleOpen(false);
    });

    const btnvariants = {
        closed: {
            opacity: 0,
            x:-100,
            y:20
        },
        open: {
            opacity: 1,
            x: 0,
            y:20
        },
    };

    return (
        <motion.div 
        initial={false}
        variants={btnvariants}
        animate={isOpen ? "open" : "closed"}
        transition={{type: "tween", ease: "backOut", duration:0.5}}
        className='sticky top-[105px] pl-[2.7%] z-[1000] bg-red-40 w-fit md:block hidden'>
            <a href="/" className='bg-blue-40 rounded-full border-[1px] border-[#CACACA] w-[121px] h-[54px] flex justify-center items-center backdrop-blur-lg'>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 7.46912L3.71294 7.46912L7.87633 11.6295L6.50478 13L-2.84124e-07 6.5L6.50478 -2.83915e-07L7.87633 1.37054L3.71294 5.53088L13 5.53087L13 7.46912Z" fill="#00C7A8"/>
                </svg>
                <p className='ml-[15px] font-dmsans text-[22px] leading-[26px]'>Back</p>
            </a>
        </motion.div>
    )
}

export default BackButton