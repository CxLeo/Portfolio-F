'use client'
import { motion } from "framer-motion";
import Line from "./Line";
import { useTheme } from "next-themes";
import { cn } from "@/utilities/utilities";

export type BriefProps={
    summary:string,
    product:string,
    skills:string[],
    role:string,
    timeline:string,
    url:string,
}


function ProjectBriefComponent({data,marginTop,marginBottom}:{data:BriefProps,marginTop?:String,marginBottom?:String}) {
    const marginTop1=marginTop?marginTop:'mt-[48px]'
    const marginBottom1=marginBottom?marginBottom:'mb-[218px] lg:mb-[353px]'
    const { theme } = useTheme();
    const bgColor = cn(theme === 'system' ? 'hover:bg-[#D9D9D9]' : theme === 'dark' ? 'bg-[#181818] hover:bg-[#303030]' : 'hover:bg-[#D9D9D9]')

  return (
    <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{type: 'tween', duration: 0.3, ease: 'easeInOut'}} 
    className={`${marginTop1} ${marginBottom1} layout-2 bg-red-30 flex flex-col lg:flex-row gap-x-[40px] gap-y-[40px] `}>
        {/* Left Column */}
        <div className="flex-[0.9] ">
            <Line/>
            <p className="w-full mt-[10px] font-medium font-dmsans text-[22px] leading-[28px] lg:text-[32px] lg:leading-[41px] whitespace-pre-line">{data.summary}</p>
            <a href={data.url}
            className={` ${bgColor} backdrop-blur-sm transition-colors duration-300 ease-in-out uppercase text-[15px] font-medium leading-[18px] px-3 py-2 border-[1px] border-[#CACACA] rounded-full hidden lg:flex  w-fit mt-[80px]`}>
                {data.product}
                <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='self-center ml-1'>
                    <path d="M3.30409 1H10.2163M10.2163 1L10.2163 7.77173M10.2163 1L1 10.029" stroke="#00C7A8"/>
                </svg>
            </a>
        </div>
        {/* Right Column */}
        <div className="flex-1">
            <Line/>
            <h6 className="mt-[15px] text-[16px] leading-[16px] text-[#898989] ">
                Product
            </h6>
            <p className="text-[17px] leading-[17px] font-medium font-dmsans mt-[6px] mb-[15px]">
                {data.product}
            </p>

            <Line/>
            <h6 className="mt-[15px] text-[16px] leading-[16px] text-[#898989] ">
                Skills
            </h6>
            <ul className=" mt-[18px] mb-[15px] space-y-[6px] ">
                {data.skills.map((skill,idx)=>(
                    <li key={idx} className="text-[17px] leading-[23.5px] font-medium font-dmsans">
                        {skill}
                    </li>
                ))}
            </ul>

            <Line/>
            <h6 className="mt-[15px] text-[16px] leading-[16px] text-[#898989] ">
                My role
            </h6>
            <p className="text-[17px] leading-[17px] font-medium font-dmsans mt-[18px] mb-[15px]">
                {data.role}
            </p>

            <Line/>
            <h6 className="mt-[15px] text-[16px] leading-[16px] text-[#898989] ">
                Timeline
            </h6>
            <p className="text-[17px] leading-[17px] font-medium font-dmsans mt-[18px]">
                {data.timeline}
            </p>
        </div>
    </motion.div>
  )
}

export default ProjectBriefComponent