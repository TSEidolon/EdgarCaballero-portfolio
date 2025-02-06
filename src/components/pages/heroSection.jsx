import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera} from '@react-three/drei';
import { Suspense, forwardRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from '../features/canvasLoader';
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../features/modelMediaQuery';
import DecryptedText from '../features/decryptedText';
import { CartoonDiorama } from '../modelComponents/cartoonDiorama';
import HeroCamera from '../features/heroCamera';
import leavesFallingOne from "../../assets/leavesFallingOne.png";
import leavesFallingTwo from "../../assets/leavesFallingTwo.png";
import leavesFalling from "../../assets/leavesFalling.png";



export default forwardRef (function HeroSection (props,ref) {
  const isSmall = useMediaQuery({ maxWidth: 650 });
  const isMedium = useMediaQuery({ maxWidth: 768 });
  const isLarge = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMedium, isLarge);
  

  return (
    <section {...props} ref={ref} className='bg-hero-background bg-fixed
    z-0 bg-cover bg-center bg-no-repeat min-h-screen bg-[color:var(--primary-color)] relative'>
      <section className='top-hero z-10 bg-hero-background-test
       bg-cover bg-bottom bg-no-repeat 
       h-screen w-full  '>
        <div className="z-10 main-content h-[400px]  flex flex-col justify-center items-center gap-2 lg:text-4xl  text-3xl px-2">
          <DecryptedText
            text="Hi I'm Edgar Caballero! 👋 "
            animateOn="view"
            revealDirection="start"
          />
          <DecryptedText
            text="Ready to Build and Innovate"
            animateOn="view"
            revealDirection="end"
          />

        </div>
        <Parallax  speed={10} className='leaves-1 -z-10 absolute  top-[55%] lg:top-[40%] right-[10%]'>
          <img src={leavesFallingOne} alt="" className='lg:h-[300px] sm:h-[150px] h-[120px] w-full' />
        </Parallax>
        <Parallax  speed={5} className='leaves-1 -z-10 absolute top-[65%] lg:top-[60%] right-[60%] sm:right-[60%] pl-2'>
          <img src={leavesFallingOne} alt="" className='lg:h-[300px] sm:h-[150px] h-[120px] w-full' />
        </Parallax>
        <Parallax speed={10} className='leaves-2 -z-10 absolute top-[57%] lg:top-[40%] right-[50%] sm:right-[60%] pl-2'>
          <img src={leavesFallingTwo} alt="" className='lg:h-[300px] sm:h-[150px] h-[120px] w-full' />
        </Parallax>
        <Parallax speed={5} className='leaves-2 -z-10 absolute top-[60%] right-[10%]'>
          <img src={leavesFallingTwo} alt="" className='lg:h-[300px] sm:h-[150px] h-[120px] w-full' />
        </Parallax>
        <Parallax speed={15} className='leaves-2 -z-10 absolute top-[50%] right-[35%]'>
          <img src={leavesFalling} alt="" className='lg:h-[400px] sm:h-[150px] h-[120px] w-full' />
        </Parallax>


      </section>
      <section className=' z-0 bottom-hero w-full h-full inset-0 absolute'>
        <Canvas className=' ' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <CartoonDiorama scale={sizes.dioramaScale} position={sizes.dioramaPosition} rotation={[0, Math.PI/ 2, 0] }/>
            </HeroCamera>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>

    </section>

  )
})

 