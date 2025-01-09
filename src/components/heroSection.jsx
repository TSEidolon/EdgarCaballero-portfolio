import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'

import CanvasLoader from './canvasLoader'

import { CartoonDiorama } from './cartoonDiorama'
import HeroCamera from './heroCamera'


const HeroSection = () => {
  return (
    <section className='
    bg-hero-background bg-cover bg-center bg-no-repeat min-h-screen bg-[color:var(--primary-color)] '>
      <section className='top-hero 
      bg-hero-background-test bg-cover bg-bottom bg-no-repeat 
      z-20 h-screen w-full border-2 border-black'>
        <div className="main-content">
          hello from herotest
        </div>

      </section>
      <section className=' z-10 bottom-hero w-full h-full inset-0 absolute'>
        <Canvas >
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera  position={[0,0,30]} />
            <HeroCamera>
              <CartoonDiorama scale={1} position={[0, -1, 0]} rotation={[0, Math.PI/ 2, 0] }/>
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