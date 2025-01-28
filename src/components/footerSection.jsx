import {useState, useEffect, Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text} from '@react-three/drei';
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
            {/* <OrbitControls  /> */}
            {/* <Text color="black" anchorX="right" anchorY="middle" onPointerOver={over} onPointerOut={out} onClick={() => window.open("https://www.mozilla.org/")}>
              hello world!
            </Text>
            <Text color="black" anchorX="left" anchorY="middle" onPointerOver={over} onPointerOut={out} onClick={() => window.open("")}>
              hello world1
            </Text> */}
            <BeachFooter scale={.5} />
          </Suspense>
        </Canvas>

      </section>
    </div>
  )
}

export default FooterSection