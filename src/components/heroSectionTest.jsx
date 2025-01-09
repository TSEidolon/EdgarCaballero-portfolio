import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'

import CanvasLoader from './canvasLoader'

import { CartoonDiorama } from './cartoonDiorama'
import HeroCamera from './heroCamera'


const HeroSection = () => {
  return (
    <section className='min-h-screen bg-[color:var(--primary-color)] py-10'>
      <section className='top-hero'>
        <div className="">
          hello from herotest
        </div>
      </section>
      <section className='bottom-hero w-full h-full inset-0 absolute'>

        <Canvas >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <CartoonDiorama scale={1} position={[0, -1.2, 0]} rotation={[0, Math.PI/ 2, 0] }/>
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