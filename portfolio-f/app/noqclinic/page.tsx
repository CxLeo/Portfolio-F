"use client";
import IntroComponent, {
  IntroProps,
} from "@/components/globalcomponents/IntroComponent";
import PageHeadingComponent from "@/components/globalcomponents/PageHeadingComponent";
import ProjectBriefComponent, {
  BriefProps,
} from "@/components/globalcomponents/ProjectBriefComponent";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FiguresComponent, { figureProps } from "@/components/globalcomponents/FiguresComponent";

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

function page() {
  return (
    <section>
      <PageHeadingComponent
        text="Noqclinic"
        subtext="Healthcare Appointment Platform"
        tag="new"
      />
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
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className='flex flex-col lg:flex-row gap-y-[40px]'>
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

            <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>Project goal</p>
            <p className="font-dmsans font-medium text-[22px] leading-[28px] lg:text-[32px] lg:leading-[41px] mb-[62px]">
              Build an AI-powered platform that doesn&apos;t just manage appointments but transforms them. Our platform is designed to make appointment management seamless for both patients and providers, ensuring that every interaction is efficient, timely, and user-friendly.
            </p>

            <p className='text-[14px] leading-[21px] text-[#00C7A8] mb-[10px]'>Key metrics</p>
            <div className="mb-[20px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
            <p className="text-[16px] leading-[22px] mb-[10px]">Achieve a 50% reduction in no-show rates by making the process of scheduling and attending appointments as easy as possible.</p>
            <div className="mb-[20px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
            <p className="text-[16px] leading-[22px] mb-[10px]">Increase booking efficiency by 40% with intelligent, AI-driven scheduling tools, and boost overall patient satisfaction to 90% by the end of Q4 FY1.</p>

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
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className='flex flex-col lg:flex-row gap-y-[40px]'>
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
                    <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
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
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <p className="lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] font-dmsans">Process</p>
        <div className="mt-[67px] flex flex-col lg:flex-row gap-x-[3%] gap-y-[40px]">
            <div className="lg:w-[23%] w-full">
              <p className="text-[16px] leading-[23px]">
              Limited Use of Technology & Integration
              </p>
              <p className="text-[16px] leading-[24px] text-[#898989]">
              Current systems lack advanced technology integration. They fail to utilize AI to predict patient needs or optimize provider schedules, resulting in underutilized resources and patient dissatisfaction.
              </p>
            </div>
            <Image width={972} height={548}  alt="design user flows" src="/images/noqclinic/user-flow.png" className="lg:w-[73.5%] w-full"/>
        </div>
      </motion.div>
      {/* demo section */}
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className=" layout-2  mb-[290px] "
      >
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <h2 className=" lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px] mb-[50px] font-dmsans">
          Final Design
        </h2>

        {
          designData.map((design,idx)=>(
            <div key={idx*3} className="w-full lg:mb-[125px] mb-[106px]">
              <video width={1312} height={737} loop preload="auto" playsInline autoPlay className="rounded-[20px] w-full mb-[40px]">
                <source src={design.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
              <div className="flex flex-col lg:flex-row gap-y-[44px]">
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
        <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className=" flex flex-col lg:flex-row gap-x-[3%] gap-y-[40px]">
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
        <div className="mb-[25px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
        <div className="ml-[50%]">
          <h6 className="lg:text-[32px] lg:leading-[32px] text-[22px] leading-[27px] font-medium font-dmsans mb-[24px]">Request a case study</h6>
          <p className="text-[21px] leading-[21px] mb-[66px] text-[#898989]">Want to learn more about this project? Get in touch to request a case study.</p>
          <a href="mailto:franketns@gmail.com" className="bg-[#00C7A8] py-[10px] px-[21px] rounded-[20px]"> GET IN TOUCH</a>
        </div>
      </motion.div>

      
      
      
    </section>
  );
}

export default page;
