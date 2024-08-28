"use client"
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, easeIn ,useTransform } from "framer-motion";

function AIHome() {
    const heroData:string[] = ["4+ years of exp", "Product Design", "UX Strategy", "Motion"];
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
    ]
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 0,
        leaveDelay: 0
    });
    let mouseXPosition:any = 0;
    let mouseYPosition:any = 0;

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
        ease:"backOut"
    };

    function projectEnter(event:any) {
    setCursorText("View");
    setCursorVariant("project");
    }

    function projectLeave(event:any) {
    setCursorText("");
    setCursorVariant("default");
    }

    return (
        <div ref={ref}>
            {/* circle cursor */}
            <motion.div
            variants={variants}
            className="lg:flex hidden fixed z-50 lg:flex-row items-center justify-center top-0 left-0 h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-center text-[16px]"
            animate={cursorVariant}
            transition={cursor}
            style={{cursor:"none"}}
            >
            <span className=" flex-1 text-inherit pointer-events-none m-auto">{cursorText}</span>
            </motion.div>

            {/* hero Section */}
            <div className="w-full px-[20px] pt-[15vh] lg:pl-[48px] flex flex-col  h-screen pb-[50px]">
                <p className="flex-grow font-dmsans font-[450] leading-[40px] text-[40px] lg:text-[80px] lg:leading-[80px] home-4k:w-[80%] home-4k:leading-[90px] ">
                    I&apos;m Frank , a multi-disciplinary designer with 5 years of experience, driven by curiosity. Currently building products at  <span className="text-[#00C7A8]"><a href="https://www.dmsolving.com/">Dmsolving</a></span>, previously at <span className="text-[#00C7A8]"><a href="https://www.tencent.com/">Tencent</a></span>.
                </p>
                <div className="w-full self-end">
                    <div className="flex flex-wrap gap-x-2 gap-y-2 ">
                        {
                            heroData.map((label,idx) => (
                                <div key={idx} className="whitespace-nowrap border-[1px] rounded-full border-[#D7D7D7] w-fit h-[32px] py-[9px] px-[13px] text-[14px] font-dmsans leading-[14px]">
                                    {label}
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-[20px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
                    <div className="w-full flex font-dmsans font-normal text-[16px] leading-[16px]">
                        <p className=" text-[#898989] lg:flex-grow">Based in Toronto, Canada</p>
                        <a href="#works" className="font-dmsans hidden lg:self-end lg:flex gap-x-1">
                        See Selected Works
                        <svg fill="#00C7A8" width="13px" height="17px" viewBox="0 0 16.25 16.25" ><path d="M9.376 9.393V1.625H6.809v7.768L2.876 5.85v3.998l5.216 4.713 5.216 -4.713V5.85z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* remaining part */}
            <div className="layout h-fit ">
                    {/* projects */}
                    <div id="works" className="w-full h-fit mt-[189px] lg:mt-[60px]">
                        <div className="w-full lg:flex hidden font-dmsans font-normal text-[48px] leading-[48px] mb-[66px]">
                        <h1 className=" flex-grow">Selected Works</h1>
                        <h1 className=" self-end"> 21&apos;-24&apos;</h1>
                        </div>
                        

                        {/* main project: NoQ AI*/}
                        <div className="w-full h-fit lg:mb-[88px] mb-[52px]">
                            <div className="w-full transition-transform duration-300 transform hover:scale-[1.02] cursor-none relative"
                                onMouseEnter={projectEnter} 
                                onMouseLeave={projectLeave}>
                            <div className="w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                                <a href="https://noqclinic.com" className="font-bold text-[15px] cursor-none absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                                    {`->`}
                                </a>
                            </div>
                            <div className="w-[56px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#384C5D] rounded-2xl  flex items-center justify-center text-white font-dmsans font-medium leading-[14px] text-[14px]">
                                NEW
                            </div>

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
                            <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">Noqclinic</h6>
                            <p className="font-san font-normal text-[16px] text-[#898989] leading-[16px] mt-[5px]">Healthcare Appointment Platform</p>
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
        </div>
    )
}

export default AIHome