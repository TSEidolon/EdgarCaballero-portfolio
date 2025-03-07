
import leavesProjects from '../../assets/leavesProjects.png'
import { Parallax } from 'react-scroll-parallax'
import ProjectCards from '../information/projectCards'
import { forwardRef } from 'react'



export default forwardRef (function ProjectsSection (props,ref)  {


  return (
    <div {...props} ref={ref} className=' z-0 h-full lg:h-full  bg-[color:var(--primary-color)] relative bg-projects-background bg-fixed bg-contain bg-no-repeat bg-bottom flex justify-center items-center py-5'>
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
})

