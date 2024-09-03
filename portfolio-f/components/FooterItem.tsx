'use client'
import React, { useState } from 'react';
import { motion, easeIn, useTransform, useScroll, stagger } from "framer-motion";

function FooterItem({label,url}:{label:string,url:string}) {
    const [hovered, setHovered] = useState(false);
    return (
        <div className='flex'>
        {
            hovered && <p className='-mt-2 text-[#00C7A8] text-2xl font-bold'>.</p>
        }
        <motion.p
            onHoverStart={()=>setHovered(true)} 
            onHoverEnd={()=>setHovered(false)} 
            initial={{x:0}} 
            whileHover={{x:7}} 
            transition={{type:"tween",duration:"0.25"}} 
            className='w-full'>
            <a href={url} className='text-[16px] leading-[16px]'>
                {label}
            </a>
        </motion.p>
        </div>
    )
}

export default FooterItem