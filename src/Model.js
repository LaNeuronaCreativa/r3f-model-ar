import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'
import { useCustomizations } from './Customizations.js'

export function Model(props) {
  const { setAnimations, setAnimationIndex, animationIndex, setSwitchAnim, setSwitchAudio } = useCustomizations()

  /* MESH */
  const group = useRef()
  const nodes = useGLTF(`./models/Avatar.glb`)
  nodes.scene.children.forEach((mesh, i) => {
    mesh.castShadow = true
    mesh.receiveShadow = true
  })
  nodes.castShadow = true
  nodes.scene.castShadow = true

  /* ANIMATION */
  const { actions, names, mixer } = useAnimations(nodes.animations, group)

  useEffect(() => {
    setAnimations(names)
  }, [names])

  useEffect(() => {
    const action = actions[names[animationIndex]]
    const playIdle = () => {
      setAnimationIndex(3)
      setSwitchAnim(false)
      setSwitchAudio(false)
    }
    if (animationIndex !== 3) {
      action.repetitions = 1
      action.clampWhenFinished = true
    }
    action.reset().fadeIn(0.5).play()

    mixer.addEventListener('finished', playIdle)
    return () => {
      mixer.removeEventListener('finished', playIdle)
      action.fadeOut(0.5)
    }
  }, [animationIndex, mixer, actions, names])

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <primitive castShadow={true} receiveShadow={true} object={nodes.scene} />
      </group>
    </>
  )
}
