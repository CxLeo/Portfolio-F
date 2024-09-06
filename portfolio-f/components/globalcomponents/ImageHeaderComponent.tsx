'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type imageprops = {
    image: string,
    height?: string,
    customStyle?: string
}

/**
 * Image Animation Component
 * 
 * This component displays an image with an optional parallax effect.
 * 
 * @param {String} image - The source URL of the image (required).
 * @param {String} [height] - Optional. The height for the parallax container. Defaults to a predefined height if not provided.
 * @param {String} [customStyle] - Optional. Additional custom styles for the image container. Useful for testing or specific styling needs.
 * 
 * Example usage:
 * <ImageHeaderComponent image="/path/to/image.jpg" height="500px" customStyle="border-radius: 10px" />
 */

function ImageHeaderComponent({image,height}:imageprops) {
    const targetParallax = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetParallax,
        offset: ["end start", "start start"]
    })
    const customheight=height?height:'1000px'
    console.log(customheight)
    const y = useTransform(scrollYProgress, [1, 0], [0,250])

    return (
        < motion.div
            className={`h-[50vh] md:h-[${customheight}]  overflow-y-clip`}>

            <motion.div
                style={{ y }}
                // style={{:scrollYProgress}}
                ref={targetParallax}
                className='   w-full h-full  '>
                    <img className=' object-center object-cover md:object-cover  md:object-bottom w-full h-full' src={image}/>
                    {/* <img className='object-cover w-full h-full' src={'https://framerusercontent.com/images/EyzBztYZzL43QARvr8Hy7L2brY.png?scale-down-to=2048'}/> */}
                    {/* <Image width={10000} height={10000} alt='image-1' className='object-cover w-full h-full' src={'/images/noq-banner.jpg'}/> */}

            </motion.div>

        </motion.div>
    )
}

export default ImageHeaderComponent;
