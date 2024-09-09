"use client"
import ImageHeaderComponent from '@/components/globalcomponents/ImageHeaderComponent'
import IntroComponent, { IntroProps } from '@/components/globalcomponents/IntroComponent';
import PageHeadingComponent from '@/components/globalcomponents/PageHeadingComponent'
import ProjectBriefComponent, { BriefProps } from '@/components/globalcomponents/ProjectBriefComponent'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

function TencentCloudPage
() {
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
    <section>
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
        className=" layout-2  mb-[240px] mt-[200px]"
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
        className=" layout-2  mb-[240px] lg:mt-[200px] mt[144px]"
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
        className=" layout-2  mb-[240px] lg:mt-[100px] mt-[50px]"
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
        className=" layout-2  mb-[240px] lg:mt-[150px] mt-[80px]"
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
        className=" layout-2  mb-[240px] lg:mt-[150px] mt-[80px]"
      >
        <h3 className='font-bold text-[24px] leading-[28px] text-[#3A3A3A]  lg:mb-[80px] mb-[20px]'>{`// Virtual Texture Study`}</h3>
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
        className=" layout-2 mb-[53px]  lg:mb-[223px] lg:mt-[150px] mt-[80px]"
      >
        <h3 className='font-bold text-[24px] leading-[28px] text-[#3A3A3A]  lg:mb-[80px]'>{`// Product System`}</h3>
        <div className='w-full'>
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec7.png"
              width={1311}
              height={447}
              className="w-full lg:block hidden"
          />
          <Image
              alt="Tencent Cloud"
              src="/images/tencentcloud/sec7Mobile.png"
              width={380}
              height={124}
              className="w-full block lg:hidden"
          />
        </div>
        <div className='flex w-full mt-[20px]'>
          <div className='flex-1 flex'>
            
          </div>
        </div>
      </motion.div>


  </section>
  )
}

export default TencentCloudPage
