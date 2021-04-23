import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Html} from '@react-three/drei'
import style from './Detail.module.css'

// function Model({ url, ...props }) {
//   const { nodes } = useLoader(GLTFLoader, url)
//   debugger;
//   return (
//     <mesh {...props} geometry={nodes.Cube001_Detail2_0.geometry}>
//       <meshPhysicalMaterial clearcoat={1.0} clearcoatRoughness={0} metalness={0.9} roughness={0.0} />
//     </mesh>
//   )
// }

// const Detail = (props) => {
//   debugger;
//   return (
//     <Canvas invalidateFrameloop pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 3] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 2.5]} intensity={40} />
//       <directionalLight position={[-5, -5, -2.5]} intensity={1} />
//       <OrbitControls screenSpacePanning />
//       <Suspense fallback={<Html>loading...</Html>}>
//         <Model url="/scene.glb" />
//       </Suspense>
//     </Canvas>
//   )
// }
const Detail = (props) => {
  return(
            <div className={style.detail}>
            <iframe src={props.detail.model} />
            </div>
  )
}            
        

export default Detail;