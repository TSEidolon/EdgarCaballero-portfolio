import {useState, useEffect, Suspense, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text} from '@react-three/drei';
import CanvasLoader from './canvasLoader';
import { GeckoFooterTest } from './geckoFooterTest';


const FooterSectionTest = () => {
  const [animationName, setAnimationName] = useState('idle')

  return (
    <div className='h-screen border-2 border-black relative flex justify-center items-center'>
      <section className='Left-area-section p-10'>
        <div className='p-10  w-[400px] h-[400px] z-0 border-2 border-green-500'>
          <p      onClick={() => setAnimationName("bounce")}
                  onPointerOver={() => setAnimationName("bounce")}
                  onPointerOut={() => setAnimationName('idle')}
          >
            Test Area
          </p>
        </div>
      </section>
      <section className='right-area-section w-[60%] h-full z-0 '>

        <Canvas className=''>
          <Suspense fallback={CanvasLoader}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.2}/>
            <directionalLight position={[0,2,0]} intensity={1}/>
            <GeckoFooterTest scale={2.5} animationName={animationName}/>
          </Suspense>
        </Canvas>

      </section>
    </div>
  )
}

export default FooterSectionTest