import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from './canvasLoader'
import { BirdsOverview } from './birdsOverview';
import TechStack from './techStack';


const OverviewSection = () => {
  return (
    <div className='bg-overview-background bg-right-top bg-no-repeat bg-contain  h-screen bg-[color:var(--primary-color)] relative'>
      <section className='z-10 h-screen w-[60%] flex py-12 items-stretch flex-col pl-[15rem]'>
        <div className='introduction h-[50%] pt-12 px-10'>
          <p className='text-2xl  pb-10'>Introduction / Overview</p>
          <p className='text-start text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum tenetur ex! Nam, ipsum ipsa iure beatae eaque magni maiores non sapiente earum distinctio eum a aliquam quisquam hic repellat! Nobis, beatae! Dolorem dolorum ex modi quibusdam incidunt repellendus dicta!</p>
        </div>
        <div className='tech-stack-list h-[40%] w-[500px] px-10 '>
          <p className='text-2xl '>Tech Stack: </p>

          {/* <div className='grid-cols-3 grid-rows-2 grid gap-2 pt-4'>
            <div className='h-[50px] w-[50px] border-2 border-black flex justify-center items-center'>
            JS
            </div>
            <div className='h-[50px] w-[50px] border-2 border-black flex justify-center items-center'>
            JS
            </div>
            <div className='h-[50px] w-[50px] border-2 border-black flex justify-center items-center'>
            JS
            </div>
            <div className='h-[50px] w-[50px] border-2 border-black flex justify-center items-center'>
            JS
            </div>
            
          </div> */}
          <TechStack/>
        </div>
      </section>

      <section className='w-full h-full inset-0 absolute z-20'>
        <Canvas className='' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <BirdsOverview   scale={1.2} rotation={[.2,1,0]} position={[1.25, -.5, 0]}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>
    </div>
  )
}

export default OverviewSection