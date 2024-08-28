"use client"
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, easeIn, useTransform } from "framer-motion";
import { reverse } from "dns";


function AIHome() {
    const projectsData=[
        {
            name:"Tecent Cloud",
            slung:"Cloud computing service",
            imgLong:"/images/ai-home/tencent.png",
            imgSquare:"/images/ai-home/tencentSquare.png",
        },
        {
            name:"Joox",
            slung:"Music streaming player",
            imgLong:"/images/ai-home/qq.png",
            imgSquare:"/images/ai-home/qqSquare.png",
        },
        {
            name:"Clash of The Claws",
            slung:"VR game website",
            imgLong:"/images/ai-home/claw.png",
            imgSquare:"/images/ai-home/clawSquare.png",
        },
        {
            name:"Atet Auto",
            slung:"Electric car brand",
            imgLong:"/images/ai-home/car.png",
            imgSquare:"/images/ai-home/carSquare.png",
        }
    ];


    const heroData: string[] = ["4+ years of exp", "Product Design", "UX Strategy", "Motion"];
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = React.useRef(null);
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
        <div ref={ref}>
            <div className="w-full h-screen flex justify-center items-center bg-black" id="splash-screen">
                <motion.svg
                    width="100"
                    height="100"
                    viewBox="0 0 41 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Define Mask for Fill Animation */}
                    <defs>
                        <mask id="mask1">
                            <motion.rect
                                x="0"
                                y="0"
                                
                                width="100%"
                                height="100%"
                                fill="#878787"
                                animate={{ width: ['0%', '100%'] }}
                                transition={{
                                    duration: 0.9,
                                    ease: "easeOut",
                                }}
                            />
                        </mask>


                        <mask id="mask2">
                            <motion.rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="yellow"
                                animate={{ width: ['0%', '100%'] }}
                                transition={{
                                    duration: 0.9,
                                    ease: "easeInOut",
                                }}
                            />
                        </mask>


                        {/* Define Gradient Fill */}
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="1000%" stopColor="#878787" />
                            <stop offset="300%" stopColor="#878787" />
                        </linearGradient>
                    </defs>

                    {/* Path with Mask and Gradient Fill */}
                    <motion.path
                        initial={{ pathLength: 1, }}
                        animate={{ pathLength: 1,opacity:0.8 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        stroke="yellow"
                        strokeWidth={0}
                        d="M31 20H0V0H10.1639L31 20Z"
                        fill="#878787"
                        mask="url(#mask1)"
                    />

                    <motion.path
                        initial={{ pathLength: 0, }}
                        animate={{ pathLength: 1, }}
                        transition={{
                            duration: 0.5,
                            //   duration: 1,
                            ease: "easeInOut",
                            repeatDelay: 1.3
                        }}
                        fill="white"
                        mask="url(#mask2)"
                        d="M11 20L31.1639 0H41V20H11Z" />

                </motion.svg>


            </div>
            {/* circle cursor */}
            <motion.div
                variants={variants}
                className="fixed z-50 flex flex-row items-center justify-center top-0 left-0 h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-center text-[16px]"
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
            <div className="layout h-fit ">
                {/* projects */}
                <div id="works" className="w-full h-fit mt-[189px] lg:mt-[60px]">
                    <h1 className="lg:block hidden font-dmsans font-normal text-[48px] leading-[48px] mb-[66px]">Signature Projects</h1>

                    {/* main project: NoQ AI*/}
                    <div className="w-full h-fit mb-[88px]">
                        <div className="w-full transition-transform duration-200 transform hover:scale-[1.02] cursor-none"
                            onMouseEnter={projectEnter}
                            onMouseLeave={projectLeave}>
                            <Image
                                alt="NoQ AI Client"
                                src="/images/ai-home/noq.png"
                                width={1459}
                                height={582}
                                className="w-full lg:block hidden"
                            />
                            <Image
                                alt="NoQ AI Client"
                                src="/images/ai-home/noqSquare.png"
                                width={390}
                                height={370}
                                className="w-full block lg:hidden"
                            />
                        </div>
                        <h6 className="font-dmsans font-semibold text-[16px] leading-[16px] mt-[13px]">Noqclinic</h6>
                        <p className="font-dmsans font-semibold text-[16px] text-[#898989] leading-[16px] mt-[5px]">Healthcare Appointment Platform</p>
                    </div>

                    <div className="w-full flex flex-wrap gap-x-[50px] lg:gap-y-[88px] gap-y-[52px]">
                            {
                                projectsData.map((project,idx)=>(
                                    <div key={idx} className="lg:w-[48.35%] w-full h-fit">
                                        <div className="w-full transition-transform duration-300 transform hover:scale-[1.02] cursor-none relative"
                                            onMouseEnter={projectEnter} 
                                            onMouseLeave={projectLeave}>
                                        <div className="w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                                            <a href="https://noqclinic.com" className="cursor-none absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                                                {`->`}
                                            </a>
                                        </div>
                                        <div className="w-[85px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#00C7A8] rounded-2xl  flex items-center justify-center text-black font-dmsans font-medium leading-[14px] text-[14px]">
                                            SHIPPED
                                        </div>
                                        
                                        <Image
                                            alt={project.name}
                                            src={project.imgLong}
                                            width={1459}
                                            height={582}
                                            className="w-full lg:block hidden"
                                        />
                                        <Image
                                            alt={project.name}
                                            src={project.imgSquare}
                                            width={390}
                                            height={370}
                                            className="w-full block lg:hidden"
                                        />
                                        </div>
                                        <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">{project.name}</h6>
                                        <p className="font-san font-normal text-[16px] text-[#898989] leading-[16px] mt-[5px]">{project.slung}</p>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </div >
    )
}

export default AIHome