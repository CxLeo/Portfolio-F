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
import ImageHeaderComponent from "@/components/globalcomponents/ImageHeaderComponent";

const briefData: BriefProps = {
  summary:
    "I led the design of the Plush Up website, a dynamic and feature-rich platform that enhances user engagement and retention through a captivating, user-friendly interface.",
  product: "Plush Up",
  skills: [
    "Consistency",
    " Visual Identity Development",
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

function page() {
  return (
    <section>
      <PageHeadingComponent
        text="Plush Up"
        subtext="VR game Website"
        tag="new"
      />
      <ImageHeaderComponent image="/images/Clashofclaws.png"/>
      <ProjectBriefComponent data={briefData} />
   
   
      
    </section>
  );
}

export default page;
