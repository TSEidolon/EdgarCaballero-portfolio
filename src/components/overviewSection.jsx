import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from './canvasLoader'
import { BirdsOverview } from './birdsOverview';
import TechStack from './techStack';
import HeroCamera from './heroCamera';

const OverviewSection = () => {
  return (
    <div className='bg-overview-background bg-right-top bg-no-repeat bg-contain  h-screen bg-[color:var(--primary-color)] relative'>
      <section className='z-10 h-screen w-[60%] flex py-12 items-stretch justify-center flex-col pl-[14.5rem]'>
        <div className='introduction h-[50%] pt-[5rem] px-10'>
          <p className='text-2xl  pb-5'>Introduction / Overview</p>
          <p className='text-start text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum tenetur ex! Nam, ipsum ipsa iure beatae eaque magni maiores non sapiente earum distinctio eum a aliquam quisquam hic repellat! Nobis, beatae! Dolorem dolorum ex modi quibusdam incidunt repellendus dicta!</p>
        </div>
        <div className='tech-stack-list h-[50%] w-[400px] px-10 relative'>
          <p className='text-2xl pb-5 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Tech Stack: </p>


          <TechStack/>
        </div>
      </section>

      <section className='w-full h-full inset-0 absolute z-0'>
        <Canvas className='' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <BirdsOverview  scale={1.2} rotation={[.2,1,0]} position={[1.35, 0, 0]}/>
            </HeroCamera>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>
    </div>
  )
}

export default OverviewSection