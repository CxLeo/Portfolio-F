'use client'
import React, { useState } from 'react';
import { motion, easeIn, useTransform, useScroll, stagger } from "framer-motion";

function NavItem({label,url}:{label:string,url:string}) {
    const [hovered, setHovered] = useState(false);
    return (
        <div className='flex flex-row'>
        {
            hovered && <motion.div initial={{opacity:0, scale:0.2}} animate={{ opacity: 1, scale: 1 }} exit={{opacity:0, scale:0}}
            transition={{ duration: 0.3 }} className='w-[11px] h-[11px] rounded-full self-center justify-self-center bg-[#00C7A8] text-8xl font-bold'></motion.div>
        }
        <motion.p
            onHoverStart={()=>setHovered(true)} 
            onHoverEnd={()=>setHovered(false)} 
            initial={{x:0}} 
            whileHover={{x:7}} 
            transition={{type:"tween",duration:"0.3", ease:"easeInOut"}} 
            className='w-full'>
            <a href={url} className='text-[64px] leading-[64px] tracking-tight'>
                {label}
            </a>
        </motion.p>
        </div>
    )
}

export default NavItem;