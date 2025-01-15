import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from './canvasLoader'

import { BirdsOverview } from './birdsOverview';
import leavesShadow from '../assets/leavesShadow.png'


const OverviewSection = () => {
  return (
    <div className='h-screen bg-blue-300 border-2 border-blue-500 relative'>
      <section className='z-10 h-screen w-[70%]'>
        <div className='introduction'>
          <p>Introduction / Overview</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum tenetur ex! Nam, ipsum ipsa iure beatae eaque magni maiores non sapiente earum distinctio eum a aliquam quisquam hic repellat! Nobis, beatae! Dolorem dolorum ex modi quibusdam incidunt repellendus dicta!</p>
        </div>
        <div className='tech-stack'>
          <p>Tech Stack: </p>
          <div>
            <div className='h-[50px] w-[50px] border-2 border-black flex justify-center items-center'>
            JS
            </div>
          </div>
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