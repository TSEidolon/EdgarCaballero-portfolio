import {Canvas} from '@react-three/fiber'
import {CameraControls} from '@react-three/drei'


const HeroSection = () => {
  return (
    <section className='min-h-screen bg-[color:var(--primary-color)] py-10'>
      <section className='top-hero'>
        <div className="">
          hello from hero
        </div>
      </section>
      <section className='bottom-hero w-full h-full inset-0 absolute'>
        <Canvas >
          <mesh >
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color='red'/>
            <ambientLight intensity={1}/>
            {/* <directionalLight color='red' position={[1, 1, 1]} /> */}
            <CameraControls />
          </mesh>
        </Canvas>
      </section>

    </section>

  )
}

export default HeroSection