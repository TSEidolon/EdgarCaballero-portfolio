import PlaceholderCat from '../assets/placeholderCat.png'
import FenixFurniture from '../assets/fenixFurnitureWebsite.png'
import KolSlayer from '../assets/kolSlayerWebsite.png'
import ProtossGym from '../assets/protossGymWebsite.png'
import leavesProjects from '../assets/leavesProjects.png'
import chameleonLineBlack from '../assets/chameleonLineOne.svg'
import chameleonLineWhite from '../assets/chameleonLine.svg'
import { GrGithub } from "react-icons/gr";
import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import ProjectCards from './projectCards'

const ProjectsSection = () => {


  return (
    <div className=' z-0 h-full lg:h-screen bg-[color:var(--primary-color)] relative bg-projects-background bg-contain bg-no-repeat bg-bottom flex justify-center items-center'>
      <section className='cards-container grid lg:grid-cols-2 md:grid-cols-1 gap-12 p-10 '>
        <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(350px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className='text-xl font-semibold '>Fenix Furniture</h4>
              <p className='pb-1'>A furniture website used to practice the "Shopping Cart" function in React with Tailwind </p>
              <button onClick={()=> window.open("https://fenix-furniture-tseidolon.netlify.app/")}
              className='border-2 border-gray-800 px-8 py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E]'>
                Visit
              </button>
            </div>
          </div>
          <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={FenixFurniture} alt="" className='border-2 border-black  rounded-md z-0 bg-zinc-200 object-contain' />
            <img src={chameleonLineBlack} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
            ' />

            <a href="https://github.com/TSEidolon/Fenix-Furniture-TSEidolon" target="_blank" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
              <GrGithub className=' w-full h-full '/> 
            </a>
          </div>
        </div>
        <ProjectCards />
        {/* <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(350px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className='text-xl font-semibold'>Kol Slayer</h4>
              <p className='pb-1'>A responsive game website used to practice the basics of React by utilizing hooks. Styled with Tailwind</p>
              <button onClick={() => window.open("https://kolslayer-tseidolon.netlify.app/")}
              className='border-2 border-gray-800 px-8 py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E]'>
                Visit
              </button>
            </div>
          </div>
          <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={KolSlayer} alt="" className='border-2 border-black  rounded-md z-0 object-cover bg-blue-500' />
            <img src={chameleonLineWhite} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
            ' />

            <a href="https://github.com/TSEidolon/kolslayer-website-tseidolon" target="_blank" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
              <GrGithub className=' w-full h-full text-white'/> 
            </a>
          </div>
        </div>
        <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(350px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className=' text-xl font-semibold  '>Protoss Gym</h4>
              <p className='pb-1'>An upcoming gym coming to a galaxy near you. Built using HTML, vanilla CSS, and JavaScript </p>
              <button onClick={() => window.open("https://protoss-gym-tseidolon.netlify.app/")}
              className='border-2 border-gray-800 px-8 py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E]'>
                Visit
              </button>
            </div>
          </div>
          <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={ProtossGym} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md z-0 object-cover' />
            <img src={chameleonLineWhite} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
            ' />

            <a href="https://github.com/TSEidolon/protoss-gym-tseidolon" target='_blank'  className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
              <GrGithub className=' w-full h-full text-white'/> 
            </a>
          </div>
        </div>
        <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(350px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className='text-xl font-semibold'>Title:</h4>
              <p className='pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-gray-800 px-8 py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E]'>
                Visit
              </button>
            </div>
          </div>
          <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md z-0' />
            <img src={chameleonLineBlack} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
            ' />

            <a href="" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
              <GrGithub className=' w-full h-full '/> 
            </a>
          </div>
        </div> */}
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