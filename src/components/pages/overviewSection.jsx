import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera} from '@react-three/drei';
import { Suspense, forwardRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from '../features/canvasLoader';
import { BirdsOverview } from '../modelComponents/birdsOverview';
import TechStack from '../information/techStack';
import HeroCamera from '../features/heroCamera';
import TrueFocus from '../features/trueFocus';
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../features/modelMediaQuery';


export default forwardRef (function OverviewSection (props,ref) {
  const isSmall = useMediaQuery({ maxWidth: 650 });
  const isMedium = useMediaQuery({ maxWidth: 768 });
  const isLarge = useMediaQuery({ minWidth: 768, maxWidth: 1440 });
  const sizes = calculateSizes(isSmall, isMedium, isLarge);
  

  return (
    <div {...props} ref={ref} className='bg-overview-background bg-right-top bg-no-repeat bg-contain  h-screen bg-[color:var(--primary-color)] relative'>

      <section className='z-10 h-screen w-full lg:w-[70%] flex py-12 items-stretch justify-center flex-col pr-5 pl-5 lg:pr-0 lg:pl-[14.5rem]'>
        <div className='introduction h-[50%] pt-[5rem] px-10 pb-5 lg:pb-0'>
          <TrueFocus 
            sentence="Introduction and Overview"
            manualMode={false}
            blurAmount={1}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={1}
            />
          <p className='text-start text-base xl:text-xl lg:text-lg '>Aspiring front-end developer with a background in science, bringing a detail-oriented mindset to UI/UX design and performance optimization. Eager to apply my analytical skills from the lab to web development, continuously expanding my expertise in both front-end technologies and enhancing overall user experiences.</p>


        </div>
        <div className='tech-stack-list h-[50%] w-[430px] lg:w-[450px] px-10 relative'>
          <p className='text-2xl pb-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Tech Stack: </p>
          <TechStack/>
        </div>
      </section>

      <section className='w-full h-full inset-0 absolute z-0'>
        <Canvas className='' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <BirdsOverview  scale={sizes.birdsScale} rotation={[.2,1,0]} position={sizes.birdsPosition}/>
            </HeroCamera>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>
    </div>
  )
})

