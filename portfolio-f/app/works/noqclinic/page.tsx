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
import FiguresComponent, { figureProps } from "@/components/globalcomponents/FiguresComponent";
import ImageHeaderComponent from "@/components/globalcomponents/ImageHeaderComponent";
import useMouse from "@react-hook/mouse-position";
import NoqClinicSwiper, { Slider } from "@/components/NoqClinicSwiper";
import BackButton from "@/components/BackButton";
import Line from "@/components/globalcomponents/Line";
const briefData: BriefProps = {
  summary:
    "I was the design lead for Platform Noqclinic - a seamless AI-driven healthcare online booking platform.",
  product: "Noqclinic",
  skills: [
    "Product design",
    "Heuristic UX audit",
    "Interactive prototyping",
    "User research & testing",
  ],
  role: "Senior UI/UX Designer",
  timeline: "Q32023 - Now",
  url: "https://noqclinic.com",
};

const introData: IntroProps = {
  project: "Noqclinic",
  title: "An AI-driven healthcare online booking platform",
  img: "/images/noqclinic/logo.png",
  video:"/files/noq.mp4",
  description:
    "A virtual healthcare platform combining AI with telemedicine for efficient at-home care. Patients use AI for assessments and book real doctors for comprehensive care, bridging the gap between patients and providers.",
  labels: [
    "Some numbers for this project",
    "web pages",
    "teams",
    "cloud services & tools",
  ],
  figures: ["2300+", "50+", "80+"],
};

const issuesData=[
  {
    title:"Prolonged Wait Times & Lack of Transparency",
    description:"Before patients can even secure an appointment, they often endure long wait times and a confusing booking process. Most patients are unaware of available slots or the best providers for their needs, leading to a sense of frustration and helplessness."
  },
  {
    title:"Administrative Overload & Fragmented Data",
    description:"Providers are caught in a web of manual scheduling, managing no-shows, and dealing with scattered patient information. This inefficiency prevents them from focusing on patient care and improving healthcare outcomes."
  },
  {
    title:"Limited Use of Technology & Integration",
    description:"Current systems lack advanced technology integration. They fail to utilize AI to predict patient needs or optimize provider schedules, resulting in underutilized resources and patient dissatisfaction."
  }
]

const designData=[
  {
    video:"/files/A.mp4",
    brief:"Start your day on the new NoQClinic Home.",
    d1:"When you open the new NoQClinic Home, you’ll know where to focus your time. View all of the day’s upcoming appointments, and easily navigate to patient messages, forms, or payments on the sidebar. At the top of Home, you’ll also see practice insights—making it easier to keep track of your performance in key areas.",
    d2:"And use the calendar view to switch to a new day and check for unconfirmed appointments."
  },
  {
    video:"/files/B.mp4",
    brief:"Effortlessly Fill Open Slots with Waitlist",
    d1:"We’ve made it even easier to fill open calendar slots right from NoQClinic Home. With just a few clicks, you can fill any open calendar slots with Waitlist.",
    d2:""
  },
  {
    video:"/files/C.mp4",
    brief:"Scroll through the Patient Activity Feed and respond",
    d1:"The Patient Activity Feed curates important patient updates and makes it simple to follow up. You can see when patients book appointments, accept Waitlist requests, review your practice, complete a form, and submit a payment.",
    d2:""
  },
  {
    video:"/files/D.mp4",
    brief:"Messaging that feels like iMessage and WhatsApp",
    d1:"NoQClinic patient messaging is now much easier to use on desktop and mobile, without sacrificing the security and privacy you need.",
    d2:"Notification badges draw your attention to unread messages, and you can reply with text or emojis. Add pictures or other attachments, and view them in the context of the patient conversation. Stay on top of your Messaging feed by archiving conversations or marking messages unread if you need to follow up later."
  },
  {
    video:"/files/E.mp4",
    brief:"Announce medical history pre-filling",
    d1:"When you open the Forms tab in NoQClinic, you’ll notice a new Forms dashboard that is automatically organized by open form requests. Easily filter by incomplete Forms and send batch reminders to all patients with outstanding form requests. Your archived Forms will now be accessible in a separate tab – no need to scroll.",
    d2:"And we’re excited to announce medical history pre-filling, which will save time for patients by automatically populating forms with any available medical history from your practice management system."
  },
]

const figureData:figureProps={
  figures:["35%","92%","7.2"],
  labels:["decrease in no-show rate","accuracy in AI pre-diagnosis","minutes reduce in appointment waiting"],
  arrows:[-1,1,-1]
}

const sliderData:Slider[]=[
  {
    title:"Tailored Healthcare Solutions for Different User Needs",
    description:"NoQClinic caters to three key healthcare users: Patients, Primary Providers, and Specialists. Each group has distinct needs, ranging from seamless appointment booking and record access for patients, to efficient care coordination for specialists. The platform offers tailored solutions for each user, ensuring an optimal and integrated healthcare experience across various levels of care.",
    img:"/images/noqclinic/user-flow.png"
  },
  {
    title:"Pre-Booking: Scheduling & Confirmation",
    description:"This section covers the steps where users input symptoms, receive AI-analyzed doctor recommendations, select a doctor, and schedule their appointment (online or in-person). AI handles timezone conversion, generates available time slots, and sends a confirmation along with preparation advice and reminders.",
    img:"/images/noqclinic/user-flow1.png"
  },
  {
    title:"Appointment Day: Check-In and Attendance",
    description:"On the day of the appointment, users check-in for either an on-site or online consultation. AI assists with traffic and weather alerts for in-person visits and manages virtual or physical queues to streamline the process.",
    img:"/images/noqclinic/user-flow2.png"
  },
  {
    title:"Post-Booking: Follow-Up and Feedback",
    description:"This section covers the steps where users input symptoms, receive AI-analyzed doctor recommendations, select a doctor, and schedule their appointment (online or in-person). AI handles timezone conversion, generates available time slots, and sends a confirmation along with preparation advice and reminders.",
    img:"/images/noqclinic/user-flow3.png"
  }
]

function NoqClinicPage() {
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
        text="Noqclinic"
        subtext="Healthcare Appointment Platform"
        tag="new"
      />
      <ImageHeaderComponent image="/images/noqclinic/noq-banner.jpg" />
      <ProjectBriefComponent data={briefData} />
      <IntroComponent data={introData} />
      {/* Context section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  mb-[350px] mt-[280px]"
      >
        <Line/>
        <div className='flex flex-col lg:flex-row gap-y-[40px] mt-[10px]'>
          <div className='flex-1 '>
            <p className="font-medium text-[20px] leading-[25px] lg:text-[24px] lg:leading-[30px] font-dmsans">Context</p>
            <p className="font-medium text-[20px] leading-[25px] lg:text-[24px] lg:leading-[30px] font-dmsans text-[#898989] w-[70%]">&quot;Can We Make Healthcare Appointments Easier for Everyone?&quot;</p>
          </div>
          <div className='flex-1 '>
            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>Introduction</p>
            <p className="text-[17px] font-[350] leading-[24px] text-[#898989] mt-[10px] mb-[20px]">The idea emerged from a common frustration in our daily life—always facing the complex and outdated system of healthcare appointments. We always see people waiting on hold for hours, only to find out the next available doctor&apos;s appointment is weeks away. This scenario plays out daily for countless patients, while doctors face their own challenges: overbooked schedules, administrative overload, and missed appointments.
              <br/><br/>
              Seeing this disconnect, we envisioned a solution: a platform that would transform healthcare booking by making it as simple as a few clicks...
            </p>

            <Line/>
            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px] mt-[10px]'>Project goal</p>
            <p className="font-dmsans text-[22px] leading-[28px] lg:text-[32px] lg:leading-[41px] mb-[62px]">
              Build an AI-powered platform that doesn&apos;t just manage appointments but transforms them. Our platform is designed to make appointment management seamless for both patients and providers, ensuring that every interaction is efficient, timely, and user-friendly.
            </p>

            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>Key metrics</p>
            <Line/>
            <p className="text-[16px] leading-[22px] mb-[10px] mt-[20px]">Achieve a 50% reduction in no-show rates by making the process of scheduling and attending appointments as easy as possible.</p>
            <Line/>
            <p className="text-[16px] leading-[22px] mb-[10px] mt-[20px]">Increase booking efficiency by 40% with intelligent, AI-driven scheduling tools, and boost overall patient satisfaction to 90% by the end of Q4 FY1.</p>

          </div>
        </div>
      </motion.div>
      {/* What we learned section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  mb-[200px]"
      >
        <Line/>
        <div className='flex flex-col lg:flex-row gap-y-[40px]  mt-[10px]'>
          <div className='flex-1 '>
            <p className='font-dmsans lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px]'>What we learned</p>
            <p className='font-dmsans lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] text-[#898989] w-[90%]'>The Current Healthcare Booking Systems Are Outdated and Fragmented</p>
          </div>
          <div className='flex-1 '>
            <p className="text-[17px] font-[350] leading-[24px] text-[#898989] mb-[60px]">We spoke with numerous patients and healthcare providers to understand the challenges within the existing healthcare appointment booking systems. We discovered that these systems are often relics of the past—outdated, cumbersome, and far from patient-friendly. Patients face prolonged wait times and a frustrating lack of transparency, while providers are overwhelmed by administrative burdens and disconnected patient data. This situation creates a cycle of dissatisfaction and inefficiency, highlighting the urgent need for a more modern, integrated approach.</p>
            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>Major Issues</p>
            {
              issuesData.map((issue,idx)=>(
                <div key={idx} className="w-full">
                    <Line/>
                    <p className="text-[17px] font-[350] leading-[24px] text-[#898989] mt-[10px] mb-[12px]">{issue.title}</p>
                    <p className="text-[17px] font-[350] leading-[24px] mb-[20px]">{issue.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </motion.div>
      {/* Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  mb-[240px]"
      >
        <Image alt="Pain-Points" width={1312} height={720} src="/images/noqclinic/pain.png" className="w-full"/>
      </motion.div>
      {/* Process section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className=" layout-2  mb-[325px]"
      >
        <Line/>
        <p className="lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans mb-[67px]  mt-[10px]">Process</p>
        <NoqClinicSwiper data={sliderData}/>
      </motion.div>
      {/* demo section */}
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className=" layout-2  mb-[290px] "
      >
        <Line/>
        <h2 className=" lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] mb-[50px] font-dmsans  mt-[10px]">
          Final Design
        </h2>

        {
          designData.map((design,idx)=>(
            <div key={idx*3} className="w-full lg:mb-[125px] mb-[106px]">
              <video width={1312} height={737} loop preload="auto" playsInline autoPlay className="rounded-[20px] w-full mb-[40px]">
                <source src={design.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Line/>
              <div className="flex flex-col lg:flex-row gap-y-[44px]  mt-[10px]">
                <h6 className="flex-1 font-dmsans text-[18px] leading-[22px] lg:text-[24px] lg:leading-[30px] font-[450]">
                  {design.brief}
                </h6>
                <p className="flex-1 text-[16px] leading-[24px]">
                  {design.d1}
                  <br/><br/>
                  {design.d2}
                </p>
              </div>
            </div>
          ))
        }
      </motion.div>
      {/* Impact section */}
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className=" layout-2  mb-[290px] "
      >
        <Line/>
        <div className=" flex flex-col lg:flex-row gap-x-[3%] gap-y-[40px]  mt-[10px]">
            <h2 className="flex-1 lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans ">
              Impact
            </h2>
            <div className="flex-1">
              <p className="text-[17px] font-[350] leading-[24px] text-[#898989] mb-[20px]">Within 6 months of rolling out these updates:</p>
                <FiguresComponent data={figureData}/>
            </div>
        </div>
      </motion.div>
      {/* case study page */}
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className=" layout  mb-[290px] "
      >
        <Line/>
        <div className="ml-[50%] mt-[25px]">
          <h6 className="lg:text-[32px] lg:leading-[32px] text-[22px] leading-[27px] font-medium font-dmsans mb-[24px]">Request a case study</h6>
          <p className="text-[21px] leading-[21px] mb-[66px] text-[#898989]">Want to learn more about this project? Get in touch to request a case study.</p>
          <a href="mailto:franketns@gmail.com" className="bg-[#00C7A8] py-[10px] px-[21px] rounded-[20px]"> GET IN TOUCH</a>
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
                  <a  href="/works/tencentcloud"  className="cursor-none w-full h-full transition duration-500 transform opacity-0 translate-x-0 lg:hover:opacity-100 ease-smooth-in-out  hover:translate-x-5  z-10 bg-transparent absolute">
                      <p className=" absolute flex items-center justify-center right-[48px] top-[28px] w-[66px] h-[66px] rounded-full bg-[#00C7A8]">
                          {`->`}
                      </p>
                  </a>
                  <div className="w-[85px] h-[31px] absolute lg:left-[28px] lg:top-[28px] left-[14px] top-[14px]  bg-[#00C7A8] rounded-2xl  flex items-center justify-center text-black font-dmsans font-medium leading-[14px] text-[14px]">
                      SHIPPED
                  </div>
              
              <Image
                  alt="Tencent Cloud"
                  src="/images/noqclinic/tencent.png"
                  width={653}
                  height={373}
                  className="w-full lg:block hidden"
              />
              <Image
                  alt="Tencent Cloud"
                  src="/images/noqclinic/tencentMobile.png"
                  width={390}
                  height={370}
                  className="w-full block lg:hidden"
              />
      
            </div>
            <h6 className="font-dmsans font-medium text-[16px] leading-[16px] mt-[13px]">Tencent Cloud</h6>
            <p className="font-dmsans text-[16px] text-[#898989] leading-[16px] mt-[5px]">Cloud computing service</p> 
          </div>        
      </motion.div>
    </section>
  );
}

export default NoqClinicPage;
