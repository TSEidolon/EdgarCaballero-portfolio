import {useState, useEffect, Suspense, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text} from '@react-three/drei';
import CanvasLoader from './canvasLoader';
import { GeckoFooterTest } from './geckoFooterTest';


const FooterSectionTest = () => {


  return (
    <div className='h-screen border-2 border-black relative'>
      <section className='Left-area-section p-10'>
        <div className='p-10  w-[400px] h-[400px] z-10 border-2 border-green-500'>
          <p >
            Test Area
          </p>
        </div>
      </section>
      <section className='right-area-section w-full h-full inset-0 absolute z-0 '>

        <Canvas className=''>
          <Suspense fallback={CanvasLoader}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.2}/>
            <directionalLight position={[0,2,0]} intensity={1}/>
            <GeckoFooterTest scale={2.5}/>
          </Suspense>
        </Canvas>

      </section>
    </div>
  )
}

export default FooterSectionTest