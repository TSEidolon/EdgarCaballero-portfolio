import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";

const techList = [
{
  stack: 'Javascript', icon: <IoLogoJavascript className='h-full w-full'/>, id: '0',
},
{
  stack: 'CSS', icon: <FaCss3Alt className='h-full w-full'/>, id: '1',
},
{
  stack: 'HTML', icon: <FaHtml5 className='h-full w-full'/>, id: '2',
},
{
  stack: 'React', icon: <FaReact className='h-full w-full'/>, id: '3',
},
{
  stack: 'Tailwind', icon: <RiTailwindCssFill className='h-full w-full'/>, id: '4',
},
{
  stack: 'Three.js', icon: <TbBrandThreejs className='h-full w-full'/>, id: '5',
},
// figma, git
]

const TechStack = () => {
console.log(techList)
  return (

  <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-5 '>
            {techList.map(function(techies){
              return (
                <div key={techies.id} className='  flex items-center flex-col p-1 shadow-md shadow-[#88AB8E] rounded-md'>
                  <div className='w-[50px] h-[50px] '>
                    {techies.icon}
                  </div>
                  <p className=''>
                    {techies.stack}
                  </p>
                </div>
              )
            })}
  </div>
  )
}

export default TechStack