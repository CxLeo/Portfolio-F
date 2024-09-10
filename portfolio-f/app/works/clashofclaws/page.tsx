"use client";
import ImageHeaderComponent from "@/components/globalcomponents/ImageHeaderComponent";
import IntroComponent, {
  IntroProps,
} from "@/components/globalcomponents/IntroComponent";
import PageHeadingComponent from "@/components/globalcomponents/PageHeadingComponent";
import ProjectBriefComponent, {
  BriefProps,
} from "@/components/globalcomponents/ProjectBriefComponent";
import React from "react";
import Image from 'next/image'
import { motion } from 'framer-motion'

const briefData: BriefProps = {
  summary:
    "I led the design of the Plush Up website, a dynamic and feature-rich platform that enhances user engagement and retention through a captivating, user-friendly interface.",
  product: "Plush Up",
  skills: [
    "Consistency",
    "Visual Identity Development",
    "Interactive prototyping",
    "User research & testing",
  ],
  role: "Senior UI/UX Designer",
  timeline: "Q32023 - Now",
  url: "https://plush-up.com",
};

const introData: IntroProps = {
  project: "Noqclinic",
  title: "An AI-driven healthcare online booking platform",
  img: "/images/noqclinic/logo.png",
  description:
    "A virtual healthcare platform combining AI with telemedicine for efficient at-home care. Patients use AI for assessments and book real doctors for comprehensive care, bridging the gap between patients and providers.",
  labels: [
    "Some numbers for this project",
    "Web pages",
    "Teams",
    "Cloud services & tools",
  ],
  figures: ["2300+", "50+", "80+"],
};

const issuesData = [
  {
    title: "Prolonged Wait Times & Lack of Transparency",
    description: "Before patients can even secure an appointment, they often endure long wait times and a confusing booking process. Most patients are unaware of available slots or the best providers for their needs, leading to a sense of frustration and helplessness."
  },
  {
    title: "Administrative Overload & Fragmented Data",
    description: "Providers are caught in a web of manual scheduling, managing no-shows, and dealing with scattered patient information. This inefficiency prevents them from focusing on patient care and improving healthcare outcomes."
  },
  {
    title: "Limited Use of Technology & Integration",
    description: "Current systems lack advanced technology integration. They fail to utilize AI to predict patient needs or optimize provider schedules, resulting in underutilized resources and patient dissatisfaction."
  }
]

function page() {
  return (
    <section>
      <PageHeadingComponent
        text="Clash of Claws"
        subtext="VR game Website"
        tag="shipped"
      />

      <ImageHeaderComponent image="/images/Clashofclaws.png" />
      <ProjectBriefComponent data={briefData} marginBottom={'mt-[100px]'} marginTop={'mb-[140px]'} />
      <div className="layout-2  mb-[100px] md:mb-[200px]" >
        <Image src={'/images/clash1.png'} alt={'image-1'} width={1000} height={1000} className="mx-auto" />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"

      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] pb-[120px]">
          <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
            Solution
          </h2>
          <p className="flex-1 text-[16px]  mt-[40px">
            A dynamic video game website inspired by the aesthetics of neo-futurism and cyberpunk. Designed the Clash of the Claws website, which features the game and a daily sign-in rewards system to boost user retention, <span className="font-bold">contributing to an increase of over 500 game downloads.</span> In this project, We used Figma and Adobe Illustrator to create unique, striking visuals that emphasize the energy and immersion of the gaming world.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[40px] font-dmsans ">
            Problem
          </h2>
          <p className="flex-1 text-[16px]  mt-[40px">
            The arcade game market is highly competitive, with users often disengaging due to a lack of return incentives. Clash of the Claws faced challenges in retaining players and maintaining engagement, struggling with player loyalty and brand visibility without a structured reward system or strong digital presence to support advertising and promotion efforts.
            <span className="text-[26px] mt-[55px] block">
              Recognizing this, we saw an opportunity to boost user retention through gamified features and stronger brand outreach,
              <span className="text-[#00C7A8]">
                creating a more engaging user experience.
              </span>
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[40px] font-dmsans ">
            Style Guide
          </h2>
        </div>
        <div className=" mb-[200px] " >
          <Image src={'/images/styleguide.png'} alt={'image-1'} width={1000} height={1000} className="object-cover w-full h-full" />
        </div>

      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[40px] font-dmsans ">
            Daily Check-In
          </h2>
          <p className="flex-1 text-[16px]  mt-[40px">
            The introduction of the daily check-in feature significantly enhanced player engagement, resulting in an 18% increase in daily active users. This gamified approach not only incentivized users to return regularly but also contributed to fostering long-term player loyalty and overall game retention.
          </p>
        </div>
        <div className=" mb-[200px] " >
          <Image src={'/images/streak.png'} alt={'image-1'} width={1000} height={1000} className="object-cover w-full h-full" />
        </div>

      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[55px] font-dmsans ">
            Player<br /> Leaderboard
          </h2>
          <p className="flex-1 text-[16px]  mt-[40px">
            The Player Leaderboard significantly boosted player engagement by adding a competitive element to the game. Players can see their rankings within the community, motivating them to improve their performance and climb the leaderboard. This feature fosters healthy competition, driving users to return frequently and stay engaged, while also contributing to long-term player loyalty and retention.
          </p>
        </div>
        <div className=" mb-[200px] " >
          <Image src={'/images/DailyCheck.png'} alt={'image-1'} width={1000} height={1000} className="object-cover w-full h-full" />
        </div>

      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[40px] font-dmsans ">
            Full Preview
          </h2>
          <p className="flex-1 text-[16px]  mt-[40px">
            The landing page was designed with responsive features to ensure optimal performance across all devices, primarily serving as an advertisement to promote the game and attract new users.
          </p>
        </div>
        <div className=" mb-[200px] " >
          <Image src={'/images/fullaccess.png'} alt={'image-1'} width={1000} height={1000} className="object-cover w-full h-full" />
        </div>

      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  my-10"
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row  gap-y-[40px] mt-5 pb-[100px]">
          <h2 className="flex-1 lg:text-[48px]  text-[32px] leading-[40px] font-dmsans ">
            Next Project
          </h2>

          <div className=" mb-[200px]  flex-1  " >
            <Image src={'/images/carproject.png'} alt={'image-1'} width={1000} height={1000} className=" rounded-lg object-cover w-full h-full" />
            <p className="mt-7 text-black text-[30px]">
              Atet Auto
            </p>
            <p className="mt-2 text-[#898989] text-[19px]">
              Electric car brand
            </p>
          </div>
        </div>

      </motion.div>




    </section>
  );
}

export default page;
