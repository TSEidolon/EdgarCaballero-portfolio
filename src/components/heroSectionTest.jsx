import {Canvas} from '@react-three/fiber'
import { CameraControls, RoundedBox,PerspectiveCamera} from '@react-three/drei'
import { Suspense } from 'react'

import CanvasLoader from './canvasLoader'

import { CartoonDiorama } from './cartoonDiorama'
import { ModelTest } from './modelTest'



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
            <CartoonDiorama scale={1} position={[0, -1.2, 0]} rotation={[0, Math.PI/ 2, 0] }/>
            {/* <ModelTest position={[0, -1, 0]}/> */}
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            {/* <CameraControls/> */}
          </Suspense>
        </Canvas>
      </section>

    </section>

  )
}

export default HeroSection