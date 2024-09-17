"use client";
import IntroComponent, {
  IntroProps,
} from "@/components/globalcomponents/IntroComponent";
import PageHeadingComponent from "@/components/globalcomponents/PageHeadingComponent";
import ProjectBriefComponent, {
  BriefProps,
} from "@/components/globalcomponents/ProjectBriefComponent";
import React, { useState } from "react";
import ImageHeaderComponent from "@/components/globalcomponents/ImageHeaderComponent";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import useMouse from "@react-hook/mouse-position";
import BackButton from "@/components/BackButton";
import Line from "@/components/globalcomponents/Line";
import AtetSwiper from "@/components/AtetSwiperComponents/AtetSwiper";

const briefData: BriefProps = {
  summary:
    "I was the design lead for the ATET AUTO official website, enhancing user experience for the electric vehicle industry.",
  product: "Atet Auto",
  skills: [
    "User Research",
    "Quality Assurance",
    "Interaction Design",
    "UI/UX Design",
  ],
  role: "Senior UI/UX Designer",
  timeline: "Q4 2023",
  url: "https://atet-auto.vercel.app/",
};

const introData: IntroProps = {
  project: "Atet Auto",
  title: "A electric car brand owned by WM Motor Technology",
  img: "/images/atetauto/logo.png",
  description:
    "ATET AUTO (WM Motor Technology) is an emerging leader in the electric vehicle industry. With a focus on North America, ATET AUTO required a new digital experience to reflect its innovative approach and commitment to sustainable mobility. We worked with ATET AUTO to create a modern, forward-thinking website that showcases their leadership in the EV industry and highlights the cutting-edge products they offer.",
};

function AtetAutoPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);

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
      <BackButton/>
      <PageHeadingComponent
        text="Atet Auto"
        subtext="Electric car brand"
        tag="SHIPPED"
      />
      <ImageHeaderComponent image="/images/atetauto/hero.png" />
      <ProjectBriefComponent data={briefData} />
      <IntroComponent data={introData} />

      {/* Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="w-full mt-[130px]  lg:mt-[280px]"
      >
        <Image alt="Atet Auto" width={1920} height={945} src="/images/atetauto/sec1.png" className="w-full"/>
      </motion.div>

      {/* Challenge Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="layout-2 mt-[100px]"
      >
        <Line/>
        <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[64px]">
          <h3 className="flex-1 font-dmsans font-[450] text-[38px] leading-[40px] lg:text-[48px] lg:leading-[48px]">Challenge</h3>
          <p className="flex-1 text-[16px] leading-[21px]">{`ATET AUTO (WM Motor Technology) is an emerging leader in the electric vehicle industry. With a focus on North America, ATET AUTO required a new digital experience to reflect its innovative approach and commitment to sustainable mobility. We worked with ATET AUTO to create a modern, forward-thinking website that showcases their leadership in the EV industry and highlights the cutting-edge products they offer.`}</p>
        </div>
      </motion.div>

      {/* video section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="w-full mt-[120px]"
      >
        <video ref={videoRef} width={1920} height={818} loop preload="auto" playsInline  muted autoPlay className=" w-full">
          <source src="/files/atet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

       {/* repositioning Section */}
       <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="layout-2 mt-[90px] lg:mt-[138px]"
      >
        <Line/>
        <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[64px]">
          <h3 className="flex-1 font-dmsans font-[450] text-[38px] leading-[40px] lg:text-[48px] lg:leading-[48px] ml-[4.5%]">
            Repositioning a <br/> Global Brand
            </h3>
          <p className="flex-1 text-[16px] leading-[21px]">{`As the design team lead at dmsolving, I worked closely with ATET AUTO's stakeholders to explore innovative strategies for expanding their digital brand, aligning with their new market positioning. I developed tailored digital design foundations and a flexible component library based on the brand guidelines. This groundwork led to a new information architecture, UX, and interface design system that brought the brand to life while ensuring adaptability for future growth.`}</p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="w-full lg:mt-[60px] mt-[40px]"
      >
        <Image alt="Atet Auto" width={1920} height={1932} src="/images/atetauto/sec2.png" className="w-full lg:block hidden"/>
        <Image alt="Atet Auto" width={380} height={386} src="/images/atetauto/sec2Mobile.png" className="w-full lg:hidden block"/>
      </motion.div>

      {/* UX Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="layout-2 mt-[100px]"
      >
        <Line/>
        <div className="flex flex-col lg:flex-row gap-y-[64px] mt-[20px]">
          <h3 className="flex-1 font-dmsans font-[450] text-[38px] leading-[40px] lg:text-[48px] lg:leading-[48px]">Building a Brand Through UX</h3>
          <p className="flex-1 text-[16px] leading-[21px]">{`The majority of ATET AUTO customers begin their purchase journey online. With ATET AUTO's commitment to customer experience, it was crucial to offer a uniquely compelling way to explore and personalize their products. Leveraging our design thinking process, dmsolving collaborated with ATET AUTO stakeholders to ideate and define detailed customer journeys, leading to the creation of a refined experience optimized for conversion.`}</p>
        </div>
        <Image alt="Atet Auto" width={380} height={215} src="/images/atetauto/sec3Mobile.png" className="mt-[45px] lg:mt-[180px] w-full lg:hidden block"/>
        <Image alt="Atet Auto" width={1334} height={761} src="/images/atetauto/sec3.png" className="mt-[45px] lg:mt-[180px] w-full hidden lg:block"/>
        
      </motion.div>
      
      {/* <div className="lg:mt-[300px] mt-[100px] w-[88%] mx-auto">
      <AtetSwiper data={["/files/A.mp4","/files/B.mp4","/files/C.mp4"]}/>
      </div> */}
      

      {/* Website Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="layout-2 mt-[100px] lg:mt-[330px]"
      >
        <Line/>
        <h3 className="font-dmsans font-[450] text-[32px] leading-[40px] lg:text-[64px] lg:leading-[64px] mt-[20px]">Atet Auto Website</h3>
          <div className="mt-[100px] lg:mt-[213px] hidden lg:block">
            <Image alt="Atet Auto" width={1296} height={1640} src="/images/atetauto/sec4.png" className="w-full "/>
            <Image alt="Atet Auto" width={1307} height={1660} src="/images/atetauto/sec5.png" className="w-full mt-[18px] lg:mt-[54px]"/>
          </div>
          <div className="mt-[100px] lg:mt-[213px] lg:hidden block">
            <Image alt="Atet Auto" width={380} height={480} src="/images/atetauto/sec4Mobile.png" className="w-full "/>
            <Image alt="Atet Auto" width={380} height={482} src="/images/atetauto/sec5Mobile.png" className="w-full mt-[18px] lg:mt-[54px]"/>
          </div>
      </motion.div>

      {/* Client Success Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="layout-2 mt-[71px] lg:mt-[210px]"
      >
        <Line/>
        <div className="flex flex-col lg:flex-row gap-y-[64px] mt-[20px]">
          <h3 className="flex-1 font-dmsans font-[450] text-[38px] leading-[40px] lg:text-[48px] lg:leading-[48px] ">Client Success</h3>
          <p className="flex-1 text-[16px] leading-[21px]">{`The new Atet Auto site has proven to be an intuitive, high-performing, and optimized web experience that "showcases the bold new direction to a new generation of Atet Auto enthusiasts" (Atet Auto Digital Marketing). Since the launch of the new site, Atet Auto has seen a significant impact on brand equity, customer engagement, and lead capture.`}</p>
        </div>
      </motion.div>

      {/* Next Project Section */}
      <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{type: 'tween', duration: 0.3, ease: 'easeInOut'}}
      className="layout-2 flex flex-col lg:flex-row mb-[43px] lg:mb-[230px] mt-[200px]">
          <h1 className="flex-1 font-dmsans font lg:text-[64px] lg:leading-[80px] text-[48px] leading-[60px] ">
          Next project
          </h1>
          <div className="flex-1 mt-[28px]">
          <div  className="w-full transition-transform duration-200 transform hover:scale-[1.02] cursor-none"
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}>
                  <a  href="/works/noqclinic"  className="cursor-none w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                      <p className=" absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                          {`->`}
                      </p>
                  </a>
                  <div className="w-[85px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#00C7A8] rounded-2xl  flex items-center justify-center text-black font-dmsans font-medium leading-[14px] text-[14px]">
                      SHIPPED
                  </div>
              
              <Image
                  alt="Noqclinic"
                  src="/images/atetauto/noqclinic.png"
                  width={653}
                  height={373}
                  className="w-full lg:block hidden"
              />
              <Image
                  alt="Noqclinic"
                  src="/images/atetauto/noqclinicMobile.png"
                  width={390}
                  height={370}
                  className="w-full block lg:hidden"
              />
            </div>
            <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">NoqClinic</h6>
            <p className="font-dmsans text-[16px] text-[#898989] leading-[16px] mt-[5px]">Healthcare Appointment Platform</p> 
          </div>        
      </motion.div>
    </section>
  )
}

export default AtetAutoPage;