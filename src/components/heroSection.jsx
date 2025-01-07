import {Canvas} from '@react-three/fiber'
import { CameraControls, RoundedBox,PerspectiveCamera} from '@react-three/drei'



import  CartoonDiorama  from './cartoonDiorama'




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
            {/* <boxGeometry args={[2, 2, 2]} /> */}
            <meshStandardMaterial color='red'/>
            <ambientLight intensity={1}/>
            <CameraControls />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={2} />
            {/* <Line position={[0, 1, 0]} color='blue'/> */}
            {/* <RoundedBox
              args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
              radius={0.05} // Radius of the rounded corners. Default is 0.05
              smoothness={4} // The number of curve segments. Default is 4
              bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
              creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
              position={[0, 1.7, 0]}
            >
              <meshPhongMaterial color="green" wireframe />
            </RoundedBox> */}
            {/* <CartoonDiorama /> */}
          </mesh>
        </Canvas>
      </section>

    </section>

  )
}

export default HeroSection