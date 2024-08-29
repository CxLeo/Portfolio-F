"use client"
import Image from "next/image";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, easeIn, useTransform, useScroll, stagger } from "framer-motion";

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
    const experienceData = [
        {
            company:"Dmsolving",
            title:"Senior UI/UX Designer",
            date:"2024-Today",
            detail:"Served high-profile clients in healthcare AI (NoQClinic), private education, and gaming websites, identifying and creating new product value propositions in concept sprints to inform key business decisions."
        },
        {
            company:"Dmsolving",
            title:"Senior UI/UX Designer",
            date:"2023",
            detail:"Created design concepts and brand identity for Claclaws. Collaborated with the team to implement UX solutions, boosting user engagement."
        },
        {
            company:"Tencent",
            title:"UI/UX Designer Co-op",
            date:"2021",
            detail:"Worked on the UI design for high-profile projects such as Tencent Cloud and Joox. I focused on creating intuitive interfaces and user experiences during concept sprints, helping to enhance product value and inform key business decisions."
        }
    ]

    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");
    const [angles, setAngles] = useState([0,0,0]);
    const handleClick = (idx:number):void => {
        let updatedAngles=[];
        switch (angles[idx]) {
        case 0:
            updatedAngles = angles.map((angle, i) => 
                i === idx ? 45 : angle
            );
            setAngles(updatedAngles);
            break;
        case 45:
            updatedAngles = angles.map((angle, i) => 
                i === idx ? 0 : angle
            );
            setAngles(updatedAngles);
            break;
        }
    }

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
        <section ref={ref}>
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
                className="fixed z-50 hidden lg:flex flex-row items-center justify-center top-0 left-0 h-[10px] w-[10px] bg-transparent rounded-full pointer-events-none text-white text-center text-[16px]"
                animate={cursorVariant}
                transition={cursor}
                style={{ cursor: "none" }}
            >
                <span className=" flex-1 text-inherit pointer-events-none m-auto">{cursorText}</span>
            </motion.div>

            {/* hero Section */}
            <div className="w-full px-[5.81%] pt-[15vh] lg:pl-[48px] flex flex-col  h-screen pb-[50px] ">
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
            <div className="layout h-fit">
                {/* projects */}
                <div id="works" className="w-full h-fit mt-[189px] lg:mt-[60px]">
                    <h1 className="lg:block hidden font-dmsans font-normal text-[48px] leading-[48px] mb-[66px]">Signature Projects</h1>

                    {/* main project: NoQ AI*/}
                    <div className="w-full h-fit mb-[88px]">
                        <div className="w-full transition-transform duration-200 transform hover:scale-[1.02] cursor-none"
                            onMouseEnter={projectEnter}
                            onMouseLeave={projectLeave}>
                                <div className="w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                                    <a href="https://noqclinic.com" className="cursor-none absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                                        {`->`}
                                    </a>
                                </div>
                                <div className="w-[56px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px] bg-[#384C5D] rounded-2xl  flex items-center justify-center text-white font-dmsans font-medium leading-[14px] text-[14px]">
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
                        <h6 className="font-dmsans font-semibold text-[16px] leading-[16px] mt-[13px]">Noqclinic</h6>
                        <p className="font-dmsans font-semibold text-[16px] text-[#898989] leading-[16px] mt-[5px]">Healthcare Appointment Platform</p>
                    </div>

                    <div className="w-full flex flex-wrap gap-x-[3.3%] lg:gap-y-[88px] gap-y-[52px] ">
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
                
                {/* About Section */}
                <div className="mt-[300px] w-full flex flex-wrap  h-fit lg:relative">
                    <div className="w-full lg:w-[50%] h-fit  lg:sticky lg:top-[28px]">
                        <div className="mb-[20px] w-[90%]  h-0 border-[1px] border-[#D9D9D9]"/>
                        <h1 className="font-dmsans text-[48px] leading-[48px] lg:text-[64px] lg:leading-[64px] font-medium lg:ml-[70px]">About</h1>
                    </div>
                    <div className="w-full lg:w-[50%] h-fit mt-[40px] lg:pr-[100px]  ">
                        <p className="text-[22px] leading-[26px] lg:text-[34px] lg:leading-[41.8px] font-normal font-dmsans">
                        I am a multi-disciplinary product designer with over 5 years of experience, currently based in Toronto. I am currently a Senior UI/UX Designer at <span className="text-[#00C7A8]">Dmsolving</span>, where I help clients across various industries such as education, retail, energy, AI technology, healthcare, and telecommunications to launch disruptive digital products and services and help grow clients&apos; own design teams.
                        <br/><br/>
                        Before Dmsolving, I worked in a UI/UX co-op position at <span className="text-[#00C7A8]">Tencent</span>, where I contributed to two significant projects: Tencent Cloud and Joox. Driven by curiosity and a mission to design empathetic products, I strive to balance user experience with business impact.
                        <br/><br/>
                        In my downtime, I enjoy exploring new destinations with my trusty camera.
                        </p>

                        <h3 className="text-[14px] leading-[14px] tracking-tight font-medium mt-[200px] -mb-4 text-[#00C7A8]">
                            Experience 
                        </h3>
                        {
                            experienceData.map((experience,idx) => (
                                <div key={idx} className="w-full h-fit mt-[40px]">
                                    <div className="mb-[20px] w-full h-0 border-[1px] border-[#D9D9D9]"/>
                                    <div className="mt-[20px] flex w-full h-fit">
                                        <div className="w-fit h-fit space-y-2 lg:space-y-4 flex-grow">
                                            <h3 className="text-[22px] leading-[22px] lg:text-[32px] lg:leading-[32px] font-dmsans font-medium">
                                                {experience.company}
                                            </h3>
                                            <h4 className="text-[22px] leading-[22px] lg:text-[32px] lg:leading-[32px] font-normal text-[#898989]">
                                                {experience.title}
                                            </h4>
                                        </div>
                                        
                                        <div
                                        className="w-fit flex">
                                        <motion.svg 
                                        onClick={()=>{handleClick(idx)}}
                                        animate={{rotate:angles[idx]}}
                                        transition={{type:"tween",duration:"0.2", ease:"easeInOut"}}
                                        className="h-[16px] w-[16px] text-black mx-auto self-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                                        </motion.svg>
                                        </div>
                                    </div>
                                    {
                                        angles[idx]===45 && 
                                        <div 
                                        className="w-full h-fit relative mt-[30px] text-[16px] text-[#898989] ">
                                            <motion.div initial={{height:0}}
                                        animate={{height:"100%"}}
                                        transition={{ type: 'tween', duration: 0.15, delay: 0.1}}
                                        className="w-full h-full bg-white overflow-hidden absolute">
                                               <p className="font-dmsans font-normal leading-[16px]">{experience.date}</p> 
                                               <p className="mt-[15px] font-normal leading-[23px]">{experience.detail}</p>
                                            </motion.div>
                                            <p  className="opacity-0 font-dmsans font-normal leading-[16px]">{experience.date}</p>
                                            <p  className="opacity-0 mt-[15px] font-normal leading-[23px]">{experience.detail}</p>
                                        </div>
                                    }
                                </div>
                            ))
                        }
                        
                        {/* download cv section */}
                        <motion.a className="rounded-full mt-[40px] mb-[170px] pt-[17px] pl-[20px] w-[198px] h-[59px] bg-[#00C7A8] hover:bg-[#05E3C0] hover:shadow-[0_0_20px_5px_#00E7C34D] flex gap-x-[8px]">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="mt-[5px]">
                            <rect y="13" width="12" height="1" fill="black"/>
                            <path d="M3.5 5V0H8.5V5H12L6 11L0 5H3.5Z" fill="black"/>
                        </svg>
                        <p className="text-[22px] leading-[22px]">Download CV</p>
                        </motion.a>

                        <Image alt="Frank Zhang - Designer" width={638} height={605} src="/images/ai-home/profile.png" className="w-full"/>
                    </div>
                </div>

                {/* skill section */}
                <div className="mt-[230px] w-full mb-[230px] lg:mb-[410px]">
                    <div className="mb-[20px] w-full h-0 border-[1px] border-[#D9D9D9]"/>
                    <div className="flex w-full flex-col lg:flex-row mt-[18px] gap-y-[39px]">
                        <h4 className="lg:w-1/2 w-full lg:text-[22px] lg:leading-[22px] text-[18px] leading-[18px]">What I&apos;m known for</h4>
                        <h5 className="text-[42px] leading-[42px] lg:text-[68px] lg:leading-[68px] lg:w-1/2 w-full font-[430]">
                        User Experience Design <br/><br/>
                        User Interface Research<br/><br/>
                        High Fidelity Prototyping<br/><br/>
                        User Research<br/><br/>
                        Product Design<br/><br/>
                        Motion Design<br/><br/>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AIHome