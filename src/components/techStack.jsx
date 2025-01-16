import React from 'react'
import { FaReact } from "react-icons/fa";


const techList = [
{
  stack: 'JavaScript', icon: <FaReact className='h-full w-full'/>, id: '0',
},
{
  stack: 'JavaScript', icon: <FaReact/>, id: '0',
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