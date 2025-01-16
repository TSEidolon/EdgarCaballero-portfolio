import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiThreedotjs } from "react-icons/si";

const techList = [
{
  stack: 'Javascript', icon: <IoLogoJavascript className='h-full w-full'/>, id: '0',
},
{
  stack: 'CSS', icon: <FaCss3Alt className='h-full w-full'/>, id: '0',
},
{
  stack: 'HTML', icon: <FaHtml5 className='h-full w-full'/>, id: '0',
},
{
  stack: 'React', icon: <FaReact className='h-full w-full'/>, id: '0',
},
{
  stack: 'Tailwind', icon: <RiTailwindCssFill className='h-full w-full'/>, id: '0',
},
{
  stack: 'Three.js', icon: <SiThreedotjs className='h-full w-full'/>, id: '0',
},

]

const TechStack = () => {
console.log(techList)
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 '>
      {techList.map(function(techies){
        return (
          <div key={techies.id}>
            <div className='w-[50px] h-[50px]'>
              {techies.icon}
            </div>
            <p>
              {techies.stack}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default TechStack