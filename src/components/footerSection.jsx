import {useState, useEffect, Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text, ScrollControls} from '@react-three/drei';
import CanvasLoader from './canvasLoader';
import { BeachFooter } from './beachFooter';



const FooterSection = () => {
  const [hovered, SetHovered] = useState(false)
  const over = () => SetHovered(true)
  const out = () => SetHovered(false)

  useEffect(() =>{
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])



  return (
    <div className='h-screen border-2 border-black relative'>
      <section className='right-area-section'>

      </section>
      <section className='right-area-section w-full h-full inset-0 absolute z-0 '>

        <Canvas className=''>
          <Suspense fallback={CanvasLoader}>
            <OrbitControls enableZoom={false} />
            {/* <Text color="black" anchorX={3} anchorY="middle" fontSize={.1} onPointerOver={over} onPointerOut={out} onClick={() => window.open("https://www.mozilla.org/")} >
              hello world!
            </Text> */}
            {/* <Text color="black" anchorX="left" anchorY="middle" onPointerOver={over} onPointerOut={out} onClick={() => window.open("")}>
              hello world1
            </Text> */}
            <ScrollControls pages={3} damping={0.25}>
              <BeachFooter scale={.5} />
            </ScrollControls>
          </Suspense>
        </Canvas>

      </section>
    </div>
  )
}

export default FooterSection