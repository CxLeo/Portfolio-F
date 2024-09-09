"use client"
import ImageHeaderComponent from '@/components/globalcomponents/ImageHeaderComponent'
import IntroComponent, { IntroProps } from '@/components/globalcomponents/IntroComponent';
import PageHeadingComponent from '@/components/globalcomponents/PageHeadingComponent'
import ProjectBriefComponent, { BriefProps } from '@/components/globalcomponents/ProjectBriefComponent'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import useMouse from '@react-hook/mouse-position';

function TencentCloudPage
() {

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

  const briefData: BriefProps = {
    summary:
      "I was the UI/UX designer for Platform Tencent Cloud - a Cloud computing service\n\n At Tencent Cloud, the design team adopted my visual design revamp proposal.",
    product: "Tencent Cloud",
    skills: [
      "UI Design",
      "Visual Identity Development",
      "Interactive UI/UX Prototyping",
      "User Interface Research & Aesthetic Testing",
    ],
    role: "UI/UX Designer co-op",
    timeline: "Q3 2021 - Q4 2021",
    url: "https://www.tencentcloud.com/",
  };

  const introData: IntroProps = {
    project: "Tencent Cloud",
    title: "A Cloud computing service ",
    img: "/images/tencentcloud/introImage.png",
    description:
      "An internal tool that serves as a one-stop shop and workspace for technologists to access cloud-based tooling in a secured environment to host their interactive client deliverables.",
    labels: [
      "Some numbers for this product",
      "teams",
      "internal and external users",
      "cloud services & tools",
    ],
    figures: ["700+", "30k", "600+"],
  };
  
  return (
    <section ref={ref}>
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
    <PageHeadingComponent
      text="Tencent Cloud"
      subtext="Cloud computing service"
      tag="Shipped"
    />
    <ImageHeaderComponent image="/images/tencentcloud/hero.png" height="1100px"/>
    <ProjectBriefComponent data={briefData} />
    <IntroComponent data={introData} />
    {/* background section */}
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  lg:mb-[240px] mb-[144px] mt-[200px]"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px]">
            <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
              Background
            </h2>
            <p className="flex-1 text-[16px] leading-[21.6px] mt-[40px]">
            In the previous design system, some interface styles are outdated and do not fully reflect Tencent Cloud&apos;s technological innovation. Additionally, the diversity of products challenges visual consistency. To address these issues, the Tencent Cloud design team is overhauling the platform&apos;s visual design, adopting a modern, unified, and user-friendly approach.
            <br/><br/>
            The primary goal of this redesign is to reinforce Tencent Cloud&apos;s leadership in cloud computing through innovative visuals, while enhancing user efficiency and satisfaction. The new design will focus on simplicity, advanced technology, and strong brand recognition, ensuring a consistent and exceptional user experience across all products.
            </p>
        </div>
      </motion.div>
    
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mb-[80px] lg:mb-[150px]"
      >
        <Image
            alt="Tencent Cloud"
            src="/images/tencentcloud/tencentImage.png"
            width={1312}
            height={829}
            className="w-full lg:block hidden"
        />
        <Image
            alt="Tencent Cloud"
            src="/images/tencentcloud/tencentImageMobile.png"
            width={380}
            height={239}
            className="w-full block lg:hidden"
        />
      </motion.div>

      

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  lg:mb-[113px] mb-[41px]"
      >
        <h3 className='font-bold text-[16px] leading-[19.36px] text-[#3A3A3A] text-center w-full mb-[30px]'>The Birth of Cloud Products</h3>
        <div className='w-full mb-[20px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec1.png"
              width={1312}
              height={426}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec1Mobile.png"
              width={430}
              height={138}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='w-[80%] mx-auto'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec2.png"
              width={995}
              height={483}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec2Mobile.png"
              width={380}
              height={183}
              className="w-full block lg:hidden"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 lg:mb-[143px] mb-[41px]"
      >
        <h3 className='font-bold text-[16px] leading-[19.36px] text-[#3A3A3A] text-center w-full mb-[30px]'>Product Image Design</h3>
        <div className='w-full'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec3.png"
              width={1312}
              height={426}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec3Mobile.png"
              width={430}
              height={138}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='mb-[25px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec4.png"
              width={1313}
              height={435}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec4Mobile.png"
              width={430}
              height={138}
              className="w-full block lg:hidden"
          />
        </div>
        <div>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec5.png"
              width={1313}
              height={836}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec5Mobile.png"
              width={430}
              height={274}
              className="w-full block lg:hidden"
          />
        </div>
      </motion.div>
      {/* Virtual Texture Study */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mb-[55px] lg:mb-[200px] "
      >
        <h3 className='font-bold lg:text-[24px] lg:leading-[28px] text-[10px] leading-[8px] text-[#3A3A3A]  lg:mb-[80px] mb-[20px]'>{`// Virtual Texture Study`}</h3>
        <div className='w-full'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec6.png"
              width={1311}
              height={372}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec6Mobile.png"
              width={380}
              height={103}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='flex w-full gap-x-[0.5%] mt-[20px]'>
          <p className='font-medium text-[12px] leading-[16px] lg:text-[20px] lg:leading-[24px] flex-1'>Originates from virtual</p>
          <p className='font-medium text-[12px] leading-[16px] lg:text-[20px] lg:leading-[24px] flex-1'>Flexible application</p>
          <p className='font-medium text-[12px] leading-[16px] lg:text-[20px] lg:leading-[24px] flex-1'>Intelligent manifestation</p>
        </div>
      </motion.div>
      {/* // Product System */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mb-[53px]  lg:mb-[223px]"
      >
        <h3 className='font-bold lg:text-[24px] lg:leading-[28px] text-[10px] leading-[8px] text-[#3A3A3A]  lg:mb-[80px]'>{`// Product System`}</h3>
        <div className='w-full'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec7.png"
              width={1311}
              height={447}
              className="w-full lg:block hidden ml-10"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec7Mobile.png"
              width={380}
              height={124}
              className="w-full block lg:hidden"
          />
        </div>
        <div className=' w-full mt-[20px] lg:flex hidden'>
          <div className='flex-1 flex'>
            <p className='font-bold text-[21px] leading-[24.2px]'>24px</p>
              <svg width="77" height="11" viewBox="0 0 77 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[25px]'>
                <line x1="1.40479" y1="0.591797" x2="1.40478" y2="10.9022" stroke="black"/>
                <path d="M76.5144 5.74805L1.76393 5.74805" stroke="black"/>
                <line x1="76.155" y1="0.591797" x2="76.155" y2="10.9022" stroke="black"/>
              </svg>
          </div>
          <div className='flex-1 flex'>
            <p className='font-bold text-[21px] leading-[24.2px]'>40px</p>
            <svg width="202" height="11" viewBox="0 0 202 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[25px]'>
              <line x1="1.17261" y1="0.591797" x2="1.17261" y2="10.9022" stroke="black"/>
              <path d="M201.726 6.17578L1.10245 6.17578" stroke="black"/>
              <line x1="201.366" y1="0.591797" x2="201.366" y2="10.9022" stroke="black"/>
            </svg>

          </div>
          <div className='flex-1 flex'>
            <p className='font-bold text-[21px] leading-[24.2px]'>100px</p>
            <svg width="355" height="11" viewBox="0 0 355 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[25px]'>
              <line x1="1.36865" y1="0.591797" x2="1.36865" y2="10.9022" stroke="black"/>
              <path d="M354.001 6.17578L1.62375 6.17578" stroke="black"/>
              <line x1="353.64" y1="0.591797" x2="353.64" y2="10.9022" stroke="black"/>
            </svg>
          </div>
        </div>

        <div className=' w-full mt-[20px] flex lg:hidden'>
          <div className='flex-1 flex'>
            <p className='font-bold text-[12px] leading-[16px]'>24px</p>
            <svg width="23" height="4" viewBox="0 0 23 4" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[10px]'>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.109 3.88014L0.109 0.898437L0.398193 0.898438L0.398193 3.88014L0.109 3.88014Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.357271 2.24401L21.9746 2.24401V2.5332L0.357271 2.5332V2.24401Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M21.7262 3.88014L21.7262 0.898437L22.0154 0.898438L22.0154 3.88014L21.7262 3.88014Z" fill="black"/>
            </svg>
          </div>
          <div className='flex-1 flex'>
            <p className='font-bold text-[12px] leading-[16px]'>40px</p>
            <svg width="60" height="4" viewBox="0 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[10px]'>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.934928 3.88014L0.934928 0.898437L1.22412 0.898438L1.22412 3.88014L0.934928 3.88014Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.05943 2.36901L59.0784 2.36901V2.6582L1.05943 2.6582V2.36901Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M58.8297 3.88014L58.8297 0.898437L59.1189 0.898438L59.1189 3.88014L58.8297 3.88014Z" fill="black"/>
            </svg>
          </div>
          <div className='flex-1 flex'>
            <p className='font-bold text-[12px] leading-[16px]'>100px</p>
            <svg width="103" height="4" viewBox="0 0 103 4" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-[10px]'>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.29943 3.88014L0.29943 0.898437L0.588623 0.898438L0.588623 3.88014L0.29943 3.88014Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.518036 2.36901L102.423 2.36901V2.6582L0.518036 2.6582V2.36901Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M102.174 3.88014L102.174 0.898437L102.463 0.898438L102.463 3.88014L102.174 3.88014Z" fill="black"/>
            </svg>
          </div>
        </div>
      </motion.div>
      {/* States System */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mb-[53px]  lg:mb-[250px]"
      >
        <h3 className='font-bold lg:text-[24px] lg:leading-[28px] text-[10px] leading-[8px] text-[#3A3A3A]  mb-[15px] lg:mb-[60px]'>{`// States System`}</h3>
        <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec8.png"
              width={1313}
              height={1244}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec8Mobile.png"
              width={380}
              height={360}
              className="w-full block lg:hidden"
          />
      </motion.div>

      {/* Tencent cloud website */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mb-[53px]  lg:mb-[250px]"
      >
        <h3 className='font-bold lg:text-[24px] lg:leading-[28px] text-[10px] leading-[8px] text-[#3A3A3A]  mb-[15px] lg:mb-[60px]'>{`// Tencent Cloud Website`}</h3>
        <div className='w-full mb-[20px] lg:mb-[67px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec9.png"
              width={1313}
              height={3043}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec9Mobile.png"
              width={360}
              height={880}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='w-full mb-[20px] lg:mb-[67px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec10.png"
              width={1313}
              height={737}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec10Mobile.png"
              width={380}
              height={213}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='w-full mb-[20px] lg:mb-[67px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11.png"
              width={1313}
              height={1879}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11Mobile.png"
              width={380}
              height={543}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='w-full mb-[20px] lg:mb-[67px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11.png"
              width={1313}
              height={1420}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11Mobile.png"
              width={380}
              height={410}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='w-full mb-[20px] lg:mb-[67px]'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11.png"
              width={1313}
              height={1361}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec11Mobile.png"
              width={380}
              height={393}
              className="w-full block lg:hidden"
          />
        </div>
      </motion.div>

      <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{type: 'tween', duration: 0.3, ease: 'easeInOut'}}
      className="layout-2 flex flex-col lg:flex-row mb-[43px] lg:mb-[230px]">
          <h1 className="flex-1 font-dmsans font lg:text-[64px] lg:leading-[80px] text-[48px] leading-[60px] ">
          Next project
          </h1>
          <div className="flex-1 mt-[28px]">
          <div  className="w-full transition-transform duration-200 transform hover:scale-[1.02] cursor-none"
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}>
                  <a  href="/works/joox"  className="cursor-none w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                      <p className=" absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                          {`->`}
                      </p>
                  </a>
                  <div className="w-[85px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#00C7A8] rounded-2xl  flex items-center justify-center text-black font-dmsans font-medium leading-[14px] text-[14px]">
                      SHIPPED
                  </div>
              
              <Image
                  alt="Joox"
                  src="/images/tencentcloud/joox.png"
                  width={653}
                  height={373}
                  className="w-full lg:block hidden"
              />
              <Image
                  alt="Joox"
                  src="/images/tencentcloud/jooxMobile.png"
                  width={390}
                  height={370}
                  className="w-full block lg:hidden"
              />
      
            </div>
            <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">Joox</h6>
            <p className="font-dmsans text-[16px] text-[#898989] leading-[16px] mt-[5px]">Music Streaming Player</p> 
          </div>        
      </motion.div>

  </section>
  )
}

export default TencentCloudPage
