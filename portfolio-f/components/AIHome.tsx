"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, easeIn, useTransform } from "framer-motion";
import { reverse } from "dns";


function AIHome() {


    const [loading, setLoading] = useState(true);
    const heroData: string[] = ["4+ years of exp", "Product Design", "UX Strategy", "Motion"];
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = React.useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])

    const mouse = useMouse(ref, {
        enterDelay: 0,
        leaveDelay: 0
    });
    let mouseXPosition: any = 0;
    let mouseYPosition: any = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 0,
            height: 0,
            width: 0,
            fontSize: "16px",
            backgroundColor: "transparent",
            x: mouseXPosition,
            y: mouseYPosition,
            // transition: {
            //     type: "spring",
            //     mass: 0.6
            // }
        },
        project: {
            opacity: 1,
            backgroundColor: "#00C7A8",
            color: "#000",
            height: 140,
            width: 140,
            fontSize: "18px",
            x: mouseXPosition - 70,
            y: mouseYPosition - 70,

        },
    };
    const cursor = {
        type: "tween",
        ease: "backOut"
    };

    function projectEnter(event: any) {
        setCursorText("View");
        setCursorVariant("project");
    }

    function projectLeave(event: any) {
        setCursorText("");
        setCursorVariant("default");
    }



    return (
        <>
            <div ref={ref}>
                {/* circle cursor */}
                <motion.div
                    variants={variants}
                    className="fixed z-50 flex flex-row items-center justify-center top-0 left-0 h-[10px] w-[10px] bg-[#00C7A8 bg-transparent rounded-full pointer-events-none text-white text-center text-[16px]"
                    animate={cursorVariant}
                    transition={cursor}
                    style={{ cursor: "none" }}
                >
                    <span className=" flex-1 text-inherit pointer-events-none m-auto">{cursorText}</span>
                </motion.div>

                {/* hero Section */}
                <div className="w-full px-[20px] pt-[15vh] lg:pl-[48px] flex flex-col  h-screen pb-[50px] ">
                    <p className="flex-grow font-dmsans font-[450] leading-[40px] text-[40px] lg:text-[80px] lg:leading-[80px] home-4k:w-[80%] home-4k:leading-[90px] ">
                        I&apos;m Frank , a multi-disciplinary designer with 5 years of experience, driven by curiosity. Currently building products at  <span className="text-[#00C7A8]"><a href="https://www.dmsolving.com/">Dmsolving</a></span>, previously at <span className="text-[#00C7A8]"><a href="https://www.tencent.com/">Tencent</a></span>.
                    </p>
                    <div className="w-full self-end">
                        <div className="flex flex-wrap gap-x-2 gap-y-2 ">
                            {
                                heroData.map((label, idx) => (
                                    <div key={idx} className="whitespace-nowrap border-[1px] rounded-full border-[#D7D7D7] w-fit h-[32px] py-[9px] px-[13px] text-[14px] font-dmsans leading-[14px]">
                                        {label}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="my-[20px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
                        <div className="w-full flex font-dmsans font-normal text-[16px] leading-[16px]">
                            <p className=" text-[#898989] lg:flex-grow">Based in Toronto, Canada</p>
                            <a href="#works" className="hidden lg:self-end lg:flex gap-x-1">
                                See Selected Works
                                <svg fill="#00C7A8" width="13px" height="17px" viewBox="0 0 16.25 16.25" ><path d="M9.376 9.393V1.625H6.809v7.768L2.876 5.85v3.998l5.216 4.713 5.216 -4.713V5.85z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* remaining part */}
                
            </div >
        </>

    )
}

export default AIHome

