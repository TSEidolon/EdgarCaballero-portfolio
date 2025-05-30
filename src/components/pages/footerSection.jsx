import {useState, useEffect, Suspense, useRef, forwardRef} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls} from '@react-three/drei';
import CanvasLoader from '../features/canvasLoader';
import { GeckoFooter } from '../modelComponents/geckoFooter';
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { Parallax } from 'react-scroll-parallax';
import GrassBackground from "../../assets/grassBackground.png"


export default forwardRef (function FooterSection (props,ref) {
  const [animationName, setAnimationName] = useState('idle')

  return (
    <div {...props} ref={ref} className='bg-hero-background bg-fixed 
    z-0 bg-cover bg-center bg-no-repeat h-full xl:h-screen  relative flex flex-col justify-center items-center bg-[color:var(--primary-color)]'>
      <section className='relative flex xl:flex-row flex-col justify-center items-center h-full w-full'>
        <section className='Left-area-section px-5 sm:px-10 pt-10 pb-0 lg:pb-10 w-full lg:w-[50%] h-full '>
        <div className='py-10  pl-5 xl:pl-[10rem] flex justify-center items-center flex-col w-full h-full z-0 '>
          <p className='pb-5 text-3xl sm:text-5xl '>
            Get In Touch!
          </p>
          <div className='links-container w-[320px] sm:w-[440px] lg:w-[520px] pt-5 pb-8 border-[1.5px] border-black rounded-md shadow-2xl flex  gap-10 flex-col'>
            <div className='link-rows text-sm sm:text-xl lg:text-2xl flex items-center justify-center relative py-5 px-10 w-full'
              onPointerOver={() => setAnimationName("fly")}
              onPointerOut={() => setAnimationName('idle')}
            >
              <button onClick={()=> window.open("https://github.com/TSEidolon")} className=' w-[40px] h-[56px] sm:w-[50px] sm:h-[70px] border-2 border-black rounded-md p-1 absolute left-[-6%] sm:left-[-5%] bg-[color:var(--secondary-color)] hover:bg-[color:var(--tertiary-color)]'>
              <IoLogoGithub className='w-full h-full ' />
              </button>
              <p className='flex '>
                <p className=''>Github: </p>
                <a href="https://github.com/TSEidolon" target="_blank" className='pl-2 font-semibold'>Tseidolon</a>
              </p>
            </div>
            <div className='link-rows text-sm sm:text-xl lg:text-2xl flex items-center justify-center relative py-5 px-10 w-full    '
               onPointerOver={() => setAnimationName("bounce")}
               onPointerOut={() => setAnimationName('idle')}
            >
              <button onClick={()=> window.open("https://www.linkedin.com/in/edgar-francis-caballero-477556238/")} className='w-[40px] h-[56px] sm:w-[50px] sm:h-[70px] border-2 border-black rounded-md p-1 absolute left-[-6%] sm:left-[-5%] bg-[color:var(--secondary-color)] hover:bg-[color:var(--tertiary-color)]'>
              <CiLinkedin className='w-full h-full ' />
              </button>
              <div className='flex'>
                <p className=''>LinkedIn:</p> 
                <a href="https://www.linkedin.com/in/edgar-francis-caballero-477556238/" target='_blank' className='pl-2 font-semibold'>Edgar Francis Caballero</a>
              </div>
            </div>
            <div className='link-rows text-sm sm:text-xl lg:text-2xl flex items-center justify-center relative p-5 px-10 w-full    '
              onPointerOver={() => setAnimationName("spin")}
              onPointerOut={() => setAnimationName('idle')}
            >
              <button onClick={()=> window.open("mailto:efrcaballero@gmail.com")} className='w-[40px] h-[56px] sm:w-[50px] sm:h-[70px] border-2 border-black rounded-md p-1 absolute left-[-6%] sm:left-[-5%] bg-[color:var(--secondary-color)] hover:bg-[color:var(--tertiary-color)]'>
              <IoMailOpenOutline className='w-full h-full ' />
              </button>
              <div className='flex'>
                <p className=''>Email:</p> 
                <a href="mailto:efrcaballero@gmail.com" target='_blank' className='pl-2 font-semibold'>efrcaballero@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className='right-area-section   w-[450px] h-[450px] xl:w-[50%] xl:h-full p-[5rem]  z-0 relative'>
        <Parallax speed={-10} className='top-[22%] left-[17%] xl:top-[22%] xl:left-[25%] absolute h-[250px] w-[250px] xl:h-[400px] xl:w-[400px]'>
            <img src={GrassBackground} alt="" className='-z-10 h-full w-full opacity-90' />
        </Parallax>
        <Canvas className=''>
          <Suspense fallback={CanvasLoader}>

            <ambientLight intensity={1.2}/>
            <directionalLight position={[0,2,0]} intensity={1}/>
            <GeckoFooter scale={3.5} position={[0,-1,0]} rotation={[.3, -.9, 0]} animationName={animationName}/>
          </Suspense>
        </Canvas>

        </section>
      </section>
      <section className='footer-footsies h-[80px] w-full bg-[color:var(--quarternary-color)]'>
        <div className='flex items-center justify-center h-full text-sm sm:text-base'>
          Brought to life by Edgar, fueled by coffee ‧𓍢ִ໋☕. 
        </div>
      </section>
    </div>
  )
})

