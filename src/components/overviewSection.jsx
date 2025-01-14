import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'
import { Parallax } from 'react-scroll-parallax';
import CanvasLoader from './canvasLoader'

import { BirdsOverview } from './birdsOverview';

const OverviewSection = () => {
  return (
    <div className='h-screen bg-blue-300 border-2 border-blue-500 relative'>

      OverviewSection

      <section className='w-full h-full inset-0 absolute'>
      <Canvas className='' >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <BirdsOverview   scale={1.2} rotation={[0,1,0]}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </section>
    </div>
  )
}

export default OverviewSection