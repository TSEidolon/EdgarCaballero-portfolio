import PlaceholderCat from '../assets/placeholderCat.png'
import leavesProjects from '../assets/leavesProjects.png'
import { Parallax } from 'react-scroll-parallax'
import chameleonLineOne from '../assets/chameleonLineOne.svg'
import chameleonLine from '../assets/chameleonLine.svg'
import { GrGithub } from "react-icons/gr";
import { useState } from 'react'

const ProjectsSection = () => {



  return (
    <div className=' z-0 h-screen bg-[color:var(--primary-color)] relative bg-projects-background bg-contain bg-no-repeat bg-bottom flex justify-center items-center'>
      <section className='cards-container grid lg:grid-cols-2 md:grid-cols-1 gap-10 p-10 '>
        <div className='cards-base bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(300px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md'>
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-black px-8 py-1 rounded-xl '>
                Visit
              </button>
            </div>
          </div>
          <div className='cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md z-0' />
            <p className='z-10 absolute text-2xl  top-[40%]'> Test </p>
          </div>
        </div>
        <div className='cards-base bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(300px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md'>
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-black px-8 py-1 rounded-xl '>
                Visit
              </button>
            </div>
          </div>
          <div className='cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md z-0' />
            <p className='z-10 absolute text-2xl  top-[40%]'> Test </p>
          </div>
        </div>
        <div className='cards-base bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(300px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md'>
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-black px-8 py-1 rounded-xl '>
                Visit
              </button>
            </div>
          </div>
          <div className='cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-black rounded-md z-0' />
            <div className='z-10 absolute bottom-[-4%] left-[2%] flex 

            '>
              <img src={chameleonLine} alt="" className='h-[70px] w-[70px] ' />
              <p className=' text-white'> Test </p>
            </div>
          </div>
        </div>
        <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(300px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-black px-8 py-1 rounded-xl hover:bg-blue-500'>
                Visit
              </button>
            </div>
          </div>
          <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md z-0' />
            <img src={chameleonLineOne} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
            ' />
            <span className='z-0 absolute border-b-2 border-red-600 w-[0px] ease-in-out duration-700 group-hover:w-[50px] bottom-[9%] left-[26.5%] rounded-md'> </span>
            <a href="" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
              <GrGithub className=' w-full h-full '/> 
            </a>
          </div>
        </div>
      </section>
      <section>
        
        <Parallax  speed={5} className='leaves-right -z-10 absolute top-[20%] right-[2%] '>
          <img src={leavesProjects} alt="" className='h-[700px]  w-[50rem] '/>
        </Parallax>
        <Parallax  speed={5} className='leaves-left -z-10 absolute top-[20%] left-[2%] '>
          <img src={leavesProjects} alt="" className='h-[700px] w-[50rem] transform-rotate-leaves'/>
        </Parallax>
      </section>
    </div>
  )
}

export default ProjectsSection