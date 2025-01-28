import React from 'react'
import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls} from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from './canvasLoader'
import { BeachFooter } from './beachFooter';



const FooterSection = () => {
  return (
    <div className='h-screen border-2 border-black relative'>
      <section className='right-area-section'>

      </section>
      <section className='right-area-section w-full h-full inset-0 absolute z-0'>
        <Canvas>
          <Suspense fallback={CanvasLoader}>
            {/* <OrbitControls /> */}
            <BeachFooter scale={.5} position={[1, -.5, 0]} rotation={[.2,1,0]}/>
          </Suspense>



        </Canvas>
      </section>
    </div>
  )
}

export default FooterSection