"use client";
import IntroComponent, {
  IntroProps,
} from "@/components/globalcomponents/IntroComponent";
import PageHeadingComponent from "@/components/globalcomponents/PageHeadingComponent";
import ProjectBriefComponent, {
  BriefProps,
} from "@/components/globalcomponents/ProjectBriefComponent";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageHeaderComponent from "@/components/globalcomponents/ImageHeaderComponent";
import useMouse from "@react-hook/mouse-position";
import BackButton from "@/components/BackButton";
import Line from "@/components/globalcomponents/Line";

const briefData: BriefProps = {
  summary:
    "I was the UI/UX designer for a major mobile music product, contributing to the art style, interaction design, and mascot. I also created icons, logos, buttons, and supported app updates and optimizations",
  product: "JOOX",
  skills: [
    "Brand Consistency",
    "Visual Design",
    "Motion Design",
    "User Interface Design",
  ],
  role: "UI/UX Designer co-op",
  timeline: "Q2 2021",
  url: "https://www.joox.com/my-en",
};

const introData: IntroProps = {
  project: "JOOX",
  title: "A music streaming service",
  img: "/images/joox/logo.png",
  description: "JOOX is a music streaming service owned by Tencent, launched in January 2015. It is the biggest music streaming app in Asian markets such as Hong Kong, Indonesia, Malaysia, Myanmar and Thailand.",
};

function JooxPage
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
        text="JOOX"
        subtext="Music streaming player"
        tag="shipped"
      />
      <ImageHeaderComponent image="/images/joox-banner.png" />
      <ProjectBriefComponent data={briefData} />
      <IntroComponent data={introData} />
      {/* Background Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mt-[200px]"
      >
        <Line/>
        <div className="mt-[20px] flex flex-col lg:flex-row  gap-y-[40px]">
            <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
              Background
            </h2>
            <p className="flex-1 text-[16px] leading-[21.6px] ">
            In the previous design, JOOX&apos;s product structure and visuals did not fully showcase its unique features. With a diverse user base and evolving trends, a refined design became necessary. This redesign optimizes the product architecture and visual representation, enhancing user experience while strengthening brand identity and functionality.
             <br/><br/>
             Continuing the <span className="text-[#00C7A8]">“youthful, fresh, and dynamic”</span> philosophy, the redesign expands the music experience beyond sound, exploring sight, interaction, and rhythm. By offering a richer, multi-dimensional experience, JOOX aims to deepen users’ sensory connection to music.
            </p>
        </div>
      </motion.div>

      {/* Problem */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 lg:mt-[400px] mt-[200px]"
      >
        <Line/>
        <h2 className="mt-[10px] flex-1 lg:text-[48px] lg:leading-[48px] text-[32px] leading-[40px] font-dmsans mb-[54px] lg:mb-[100px]">Problem</h2>
        <Image src="/images/joox/problem.png" alt="JOOX" width={1312} height={738} className="w-full"/>
      </motion.div>

      {/* UI Design Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 lg:mt-[400px] mt-[260px]"
      >
        <Line/>
        <div className="mt-[20px]  flex flex-col lg:flex-row  gap-y-[40px] mb-[80px]">
            <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
              UI Design
            </h2>
            <p className="flex-1 text-[16px] leading-[21.6px] ">
            {`With the rise of flat design, many apps have adopted similar visual styles, so we sought to find JOOX's unique personality in our design. Centered around the keywords "youthful, fresh, dynamic," we experimented with the recently popular light and transparent design language, incorporating subtle skeuomorphic textures. To create a strong sense of change, we focused on key interfaces and prominent areas such as the "My" page, Music Library, Playback page, App bottom tab, and the iconic brand green, maximizing the highlights and features of the light and transparent design.`}
            </p>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/ui1.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
              {`"My" Page`}
            </h6>
            <p className="flex-1 text-[16px] leading-[21px]">
              The two most significant changes to the &quot;My&quot; page are the user info card and the asset accumulation area. <br/><br/> <span className="text-[#979797]">The</span> design goal <span className="text-[#979797]">for the user info card is to enhance</span> transparency and usability<span className="text-[#979797]">. We rearranged the original information, ensuring that elements are no longer crowded together. Each element block is clearly defined, with appropriate white space between areas, creating a stronger sense of space and clear hierarchy throughout the card.</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/ui2.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
              {`User Asset Accumulation Area`}
            </h6>
            <p className="flex-1 text-[16px] leading-[21px] ">
            <span className="text-[#979797]">In the user asset accumulation area, the conventional approach is to use icons as entry points. However, this time, we made a bold attempt by using a transparent magical color gradient combined with album cover art, creating a visual effect resembling a vinyl record wrapped in translucent tracing paper. Additionally, we added quick play and pause actions to streamline the user&apos;s music listening experience,</span> shortening the core path to playing songs.
            </p>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/ui3.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
              {`Icon Update`}
            </h6>
            <div className="flex-1 text-[16px] leading-[21px] text-[#979797] whitespace-pre-line">
            Icons serve as a graphical language alongside text. In this update, we made several enhancements to the icons:<br/><br/>
            <ul className="list-disc list-outSide text-[#979797] ml-5">
              <li>Shape: We optimized unclear symbols and made the overall icon shapes lighter and more rounded.</li>
              <li>Color: The original dark green highlight of the UI was adjusted to a more youthful and dynamic fluorescent green.</li>
              <li>Texture: We broke away from the flat, single-texture design by introducing a dual-color scheme with fluorescent green and gray. This includes a transparent, semi-gradient effect, and for the bottom tab, we added subtle gradient textures and shadows. This gives the icons a richer, more three-dimensional appearance with more details and highlights.</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/ui4.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
              {`Icon Update - Actionsheet page`}
            </h6>
            <p className="flex-1 text-[16px] leading-[21px] text-[#979797]">
            We also optimized the icons on the Actionsheet, unifying their style.
            </p>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/ui5.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
              {`Icon Update - Playback page`}
            </h6>
            <p className="flex-1 text-[16px] leading-[21px] text-[#979797]">
            The icons were updated with a simpler, clearer, and more polished look, featuring rounded edges and subtle gradients. This modern design enhances both aesthetics and usability across the playback page.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Playback Page */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2 mt-[260px] lg:mt-[400px]"
      >
        <Line/>
        <div className="mt-[20px]  flex flex-col lg:flex-row  gap-y-[40px] mb-[80px]">
            <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
            Playback Page
            </h2>
            <p className="flex-1 text-[16px] leading-[21.6px] ">
            {`To further expand and enrich the multi-sensory experience of "seeing" and "listening," and to enhance the immersive music experience, in the new version , we explored more dynamic effects on the playback page background.`}
            </p>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/play1.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[24px] font-[450]">
              {`Seeing the Colors of Music – Colorful Gradients`}
            </h6>
            <div className="flex-1 text-[16px] leading-[21px] text-[#979797] whitespace-pre-line">
            The album cover is a visual expression of the musician&apos;s work, creating a sensory connection between the cover and the song. We dynamically upgraded the magic color of the playback page background, giving the music more layers and meaning.<br/>The rich and smooth gradient colors can create an atmosphere and convey emotions.
            The colorful gradient light effects are composed of a two-layer structure to ensure a clear and vibrant color hierarchy:<br/><br/>
            <ul className="list-disc list-outSide text-[#979797] ml-5">
              <li>Upper Layer: All control information is in bright magic colors.</li>
              <li>Bottom Layer: Dynamic colorful gradient effects.</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          <Image src="/images/joox/play2.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[24px] font-[450]">
              {`Minibar`}
            </h6>
            <div className="flex-1 text-[16px] leading-[21px] text-[#979797] whitespace-pre-line">
            We extended the colorful gradients and dynamic light effects to the minibar, bringing vibrancy and youthfulness to the overall page redesign. It was a bold visual experiment
            </div>
          </div>
        </div>

        <div className="w-full lg:mb-[160px] mb-[106px]">
          {/* <Image src="/images/joox/play3.png" alt="JOOX" width={1312} height={738} className="rounded-[20px] w-full mb-[40px]"/> */}
          <video width={1312} height={738} loop preload="auto" playsInline autoPlay className="rounded-[20px] w-full mb-[40px]">
            <source src={'/files/joox.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Line/>
          <div className="mt-[20px] flex flex-col lg:flex-row gap-y-[44px]">
            <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[24px] font-[450]">
              {`Seeing the Rhythm of Music`}
            </h6>
            <div className="flex-1 text-[16px] leading-[21px] text-[#979797] whitespace-pre-line">
            These gradient effects are generated through algorithms based on the album cover. Using new color extraction technology, we calculate the cover&apos;s colors to extract the primary hue, then apply color manipulation rules to further process the primary color and generate two related magic colors, resulting in the final gradient.<br/><br/>The magic colors are mapped to dynamic assets, allowing each album&apos;s colors to flow and blend with the music.
            </div>
          </div>
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
                <a  href="/works/clashofclaws"  className="cursor-none w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                    <p className=" absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                        {`->`}
                    </p>
                </a>
                <div className="w-[85px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#00C7A8] rounded-2xl  flex items-center justify-center text-black font-dmsans font-medium leading-[14px] text-[14px]">
                    SHIPPED
                </div>
            <Image
                alt="Clash of the Claws"
                src="/images/joox/clash.png"
                width={653}
                height={373}
                className="w-full lg:block hidden"
            />
            <Image
                alt="Tencent Cloud"
                src="/images/joox/clashMobile.png"
                width={390}
                height={370}
                className="w-full block lg:hidden"
            />
          </div>
          <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">Clash of The Claws</h6>
          <p className="font-dmsans text-[16px] text-[#898989] leading-[16px] mt-[5px]">VR game website</p> 
        </div>        
      </motion.div>
    </section>
  )
}

export default JooxPage
