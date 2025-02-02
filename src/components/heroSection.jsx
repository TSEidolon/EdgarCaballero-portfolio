import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from './canvasLoader'

import DecryptedText from './decryptedText';
import { CartoonDiorama } from './cartoonDiorama'
import HeroCamera from './heroCamera'
import leavesFallingOne from "../assets/leavesFallingOne.png"
import leavesFallingTwo from "../assets/leavesFallingTwo.png"
import leavesFalling from "../assets/leavesFalling.png"



const HeroSection = () => {
  return (
    <section className='bg-hero-background bg-fixed
    z-0 bg-cover bg-center bg-no-repeat min-h-screen bg-[color:var(--primary-color)] relative'>
      <section className='top-hero z-10 bg-hero-background-test
       bg-cover bg-bottom bg-no-repeat 
       h-screen w-full  '>
        <div className="main-content h-[400px]  flex flex-col justify-center items-center gap-2 text-4xl">
          <DecryptedText
            text="Catchphrase here!"
            animateOn="view"
            revealDirection="start"
          />
          <DecryptedText
            text="Secondary Catchphrase here!"
            animateOn="view"
            revealDirection="end"
          />

        </div>
        <Parallax  speed={10} className='leaves-1 -z-10 absolute top-[40%] right-[10%]'>
          <img src={leavesFallingOne} alt="" className='h-[300px] w-[500]' />
        </Parallax>
        <Parallax  speed={5} className='leaves-1 -z-10 absolute top-[60%] right-[60%]'>
          <img src={leavesFallingOne} alt="" className='h-[300px] w-[500]' />
        </Parallax>
        <Parallax speed={10} className='leaves-2 -z-10 absolute top-[40%] right-[60%]'>
          <img src={leavesFallingTwo} alt="" className='h-[300px] w-[500]' />
        </Parallax>
        <Parallax speed={5} className='leaves-2 -z-10 absolute top-[50%] right-[10%]'>
          <img src={leavesFallingTwo} alt="" className='h-[300px] w-[500]' />
        </Parallax>
        <Parallax speed={15} className='leaves-2 -z-10 absolute top-[40%] right-[35%]'>
          <img src={leavesFalling} alt="" className='h-[400px] w-[500]' />
        </Parallax>


      </section>
      <section className=' z-0 bottom-hero w-full h-full inset-0 absolute'>
        <Canvas className='' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <CartoonDiorama scale={.8} position={[0, -1, 0]} rotation={[0, Math.PI/ 2, 0] }/>
            </HeroCamera>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>

    </section>

  )
}

export default HeroSection