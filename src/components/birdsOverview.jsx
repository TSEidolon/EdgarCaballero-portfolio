/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ha Van (https://sketchfab.com/nganha2169)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/birds-5b957f503ad040a4bcf850680f9f6b45
Title: birds
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function BirdsOverview(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/birds.glb')
  const { actions, names } = useAnimations(animations, group)

  // Bird animations
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
                <group name="caa1de82125e43cab16cdc38a1378805fbx_1" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Armature_5" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                        <group name="Object_6_6">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                              name="Object_23"
                              geometry={nodes.Object_23.geometry}
                              material={materials.Material}
                              skeleton={nodes.Object_23.skeleton}
                            />
                            <skinnedMesh
                              name="Object_26"
                              geometry={nodes.Object_26.geometry}
                              material={materials['Material.001']}
                              skeleton={nodes.Object_26.skeleton}
                            />
                            <group name="Object_9_9_correction">
                              <group name="Object_9_9" />
                            </group>
                            <group name="Object_10_10_correction">
                              <group name="Object_10_10" />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Armature001_21"
                        position={[27.95, 1.043, 29.034]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={9.562}>
                        <group name="Object_22_22">
                          <group name="GLTF_created_1">
                            <primitive object={nodes.GLTF_created_1_rootJoint} />
                            <skinnedMesh
                              name="Object_43"
                              geometry={nodes.Object_43.geometry}
                              material={materials.Material}
                              skeleton={nodes.Object_43.skeleton}
                            />
                            <skinnedMesh
                              name="Object_46"
                              geometry={nodes.Object_46.geometry}
                              material={materials['Material.001']}
                              skeleton={nodes.Object_46.skeleton}
                            />
                            <group name="Object_25_25_correction">
                              <group name="Object_25_25" />
                            </group>
                            <group name="Object_26_26_correction">
                              <group name="Object_26_26" />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Armature002_37"
                        position={[-32.595, -1.043, 43.433]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={10}>
                        <group name="Object_38_38">
                          <group name="GLTF_created_2">
                            <primitive object={nodes.GLTF_created_2_rootJoint} />
                            <skinnedMesh
                              name="Object_63"
                              geometry={nodes.Object_63.geometry}
                              material={materials.Material}
                              skeleton={nodes.Object_63.skeleton}
                            />
                            <skinnedMesh
                              name="Object_66"
                              geometry={nodes.Object_66.geometry}
                              material={materials['Material.001']}
                              skeleton={nodes.Object_66.skeleton}
                            />
                            <group name="Object_41_41_correction">
                              <group name="Object_41_41" />
                            </group>
                            <group name="Object_42_42_correction">
                              <group name="Object_42_42" />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Armature003_53"
                        position={[37.867, -2.192, 74.928]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={10}>
                        <group name="Object_54_54">
                          <group name="GLTF_created_3">
                            <primitive object={nodes.GLTF_created_3_rootJoint} />
                            <skinnedMesh
                              name="Object_83"
                              geometry={nodes.Object_83.geometry}
                              material={materials.Material}
                              skeleton={nodes.Object_83.skeleton}
                            />
                            <skinnedMesh
                              name="Object_86"
                              geometry={nodes.Object_86.geometry}
                              material={materials['Material.001']}
                              skeleton={nodes.Object_86.skeleton}
                            />
                            <group name="Object_57_57_correction">
                              <group name="Object_57_57" />
                            </group>
                            <group name="Object_58_58_correction">
                              <group name="Object_58_58" />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Armature004_69"
                        position={[-39.034, 2.179, 94.94]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={8.298}>
                        <group name="Object_70_70">
                          <group name="GLTF_created_4">
                            <primitive object={nodes.GLTF_created_4_rootJoint} />
                            <skinnedMesh
                              name="Object_103"
                              geometry={nodes.Object_103.geometry}
                              material={materials.Material}
                              skeleton={nodes.Object_103.skeleton}
                            />
                            <skinnedMesh
                              name="Object_106"
                              geometry={nodes.Object_106.geometry}
                              material={materials['Material.001']}
                              skeleton={nodes.Object_106.skeleton}
                            />
                            <group name="Object_73_73_correction">
                              <group name="Object_73_73" />
                            </group>
                            <group name="Object_74_74_correction">
                              <group name="Object_74_74" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/birds.glb')
