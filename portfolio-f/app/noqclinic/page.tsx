import IntroComponent, { IntroProps } from '@/components/globalcomponents/IntroComponent'
import PageHeadingComponent from '@/components/globalcomponents/PageHeadingComponent'
import ProjectBriefComponent, { BriefProps } from '@/components/globalcomponents/ProjectBriefComponent'
import React from 'react'

const briefData:BriefProps={
  summary:"I was the design lead for Platform Noqclinic - a seamless AI-driven healthcare online booking platform.",
  product:"Noqclinic",
  skills:["Product design","Heuristic UX audit","Interactive prototyping","User research & testing"],
  role:"Senior UI/UX Designer",
  timeline:"Q32023 - Now",
  url:"https://noqclinic.com"
}

const introData:IntroProps={
  project:"Noqclinic",
  title:"An AI-driven healthcare online booking platform",
  img:"/images/noqclinic/logo.png",
  description:"A virtual healthcare platform combining AI with telemedicine for efficient at-home care. Patients use AI for assessments and book real doctors for comprehensive care, bridging the gap between patients and providers.",
  labels:["Some numbers for this project","Web pages","Teams","Cloud services & tools"],
  figures:["2300+","50+","80+"]
}

function page() {
  return (
    <section>
      <PageHeadingComponent text='Noqclinic' subtext='Healthcare Appointment Platform' tag='new'/>
      <ProjectBriefComponent data={briefData}/>
      <IntroComponent data={introData}/>
    </section>
  )
}

export default page;
