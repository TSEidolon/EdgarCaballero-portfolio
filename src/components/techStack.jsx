import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export const techList = [
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
{
  stack: 'Figma', icon: <FaFigma className='h-full w-full'/>, id: '6',
},
{
  stack: 'Git', icon: <FaGitAlt className='h-full w-full'/>, id: '7',
},

]

const TechStack = () => {
console.log(techList)
  return (

  <div className='grid grid-cols-3  gap-5 '>
            {techList.map(function(techies){
              return (
                <div key={techies.id} className='  flex items-center flex-col p-1 shadow-md shadow-[#88AB8E] rounded-md'>
                  <div className='w-[40px] h-[40px] '>
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