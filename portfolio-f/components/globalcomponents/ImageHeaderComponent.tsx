'use client'
import Image from 'next/image'
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import banner from "@/public/images/noq-banner.jpg"

type imageprops = {
    image: string,
    height?: string,
    customStyle?: string
}

function ImageHeaderComponent() {
    return (
        < div className="bg-black h-[800px] wrapper1">

            <div className='container'>

                <div className='bg-red-400 h-[800px]   '>
                    {/* <Image alt='1' width={10000} height={10000} className='background object-cover w-full h-full object-left-botto' src={'/images/noq-banner.jpg'} /> */}
                </div>

            </div>
        </div>
    )
}

export default ImageHeaderComponent;
