'use client'
import { motion } from "framer-motion";

export type BriefProps={
    summary:string,
    product:string,
    skills:string[],
    role:string,
    timeline:string,
    url:string
}

function ProjectBriefComponent({data}:{data:BriefProps}) {
  return (
    <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{type: 'tween', duration: 0.3, ease: 'easeInOut'}} className="mt-[48px] layout-2 bg-red-30 flex flex-col lg:flex-row gap-x-[40px] gap-y-[40px] mb-[218px] lg:mb-[353px]">
        {/* Left Column */}
        <div className="flex-[0.9] ">
            <div className="mb-[10px] w-full  h-0 border-[1px] border-[#D9D9D9]"></div>
            <p className="w-full font-medium font-dmsans text-[22px] leading-[28px] lg:text-[32px] lg:leading-[41px]">{data.summary}</p>
            <a href={data.url} className="bg-white hover:bg-[#D9D9D9] transition-colors duration-300 ease-in-out uppercase text-[15px] font-medium leading-[18px] px-3 py-2 border-[1px] border-[#CACACA] rounded-full hidden lg:flex  w-fit mt-[80px]">
                {data.product}
                <svg width="14" height="14" viewBox="0 0 27 26" fill="none" className='self-center ml-1'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.225193 22.2599L17.3952 5.08981L2.00649 5.09574L2.00844 0.0262148L26.0514 0.0169506L26.0421 24.0599L20.9726 24.0619L20.9785 8.67314L3.80851 25.8432L0.225193 22.2599Z" fill="#00C7A8"/>
                </svg>
            </a>
        </div>
        {/* Right Column */}
        <div className="flex-1">
            <div className="mb-[15px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
            <h6 className="text-[16px] leading-[16px] text-[#898989] ">
                Product
            </h6>
            <p className="text-[17px] leading-[17px] font-medium font-dmsans mt-[6px] mb-[15px]">
                {data.product}
            </p>

            <div className="mb-[15px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
            <h6 className="text-[16px] leading-[16px] text-[#898989] ">
                Skills
            </h6>
            <ul className=" mt-[18px] mb-[15px] space-y-[6px] ">
                {data.skills.map((skill,idx)=>(
                    <li key={idx} className="text-[17px] leading-[23.5px] font-medium font-dmsans">
                        {skill}
                    </li>
                ))}
            </ul>

            <div className="mb-[15px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
            <h6 className="text-[16px] leading-[16px] text-[#898989] ">
                My role
            </h6>
            <p className="text-[17px] leading-[17px] font-medium font-dmsans mt-[18px] mb-[15px]">
                {data.role}
            </p>

            <div className="mb-[15px] w-full h-0 border-[1px] border-[#D9D9D9]"></div>
            <h6 className="text-[16px] leading-[16px] text-[#898989] ">
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