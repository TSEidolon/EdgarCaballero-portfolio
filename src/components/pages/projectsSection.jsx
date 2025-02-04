
import leavesProjects from '../../assets/leavesProjects.png'

import { GrGithub } from "react-icons/gr";
import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import ProjectCards from '../information/projectCards'



const ProjectsSection = () => {


  return (
    <div className=' z-0 h-full lg:h-full xl:h-screen bg-[color:var(--primary-color)] relative bg-projects-background bg-contain bg-no-repeat bg-bottom flex justify-center items-center py-5'>
      <section className='cards-container  '>

        <ProjectCards />
 
      </section>
      <section>
        
        <Parallax  speed={10} className='leaves-right -z-10 absolute top-[20%] right-[2%] '>
          <img src={leavesProjects} alt="" className='h-[700px]  w-[50rem] '/>
        </Parallax>
        <Parallax  speed={10} className='leaves-left -z-10 absolute top-[20%] left-[2%] '>
          <img src={leavesProjects} alt="" className='h-[700px] w-[50rem] transform-rotate-leaves'/>
        </Parallax>
      </section>
    </div>
  )
}

export default ProjectsSection