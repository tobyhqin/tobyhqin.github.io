import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, Outlines } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import type { Group } from 'three'

/**
 * The one R3F scene: Calvin's red wagon, toon-shaded with ink outlines to match
 * the comic theme. Gentle float + mouse parallax; static under reduced motion.
 */

const INK = '#211d19'
const RED = '#cf3f36'
const OUTLINE = 0.035

function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.34, 0.34, 0.16, 24]} />
      <meshToonMaterial color={INK} />
      <mesh position={[0, 0.09, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
        <meshToonMaterial color="#f0e8d8" />
      </mesh>
    </mesh>
  )
}

function Wagon() {
  const group = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (prefersReducedMotion()) return
    const onMove = (e: PointerEvent) => {
      pointer.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: (e.clientY / innerHeight) * 2 - 1,
      }
    }
    addEventListener('pointermove', onMove, { passive: true })
    return () => removeEventListener('pointermove', onMove)
  }, [])

  useFrame(() => {
    const g = group.current
    if (!g || prefersReducedMotion()) return
    g.rotation.y += (pointer.current.x * 0.4 - 0.6 - g.rotation.y) * 0.04
    g.rotation.x += (pointer.current.y * 0.15 - g.rotation.x) * 0.04
  })

  return (
    <group ref={group} rotation={[0, -0.6, 0]}>
      {/* bed */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[2.4, 0.55, 1.2]} />
        <meshToonMaterial color={RED} />
        <Outlines thickness={OUTLINE} color={INK} />
      </mesh>
      {/* rounded nose */}
      <mesh position={[1.2, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 1.2, 20]} />
        <meshToonMaterial color={RED} />
        <Outlines thickness={OUTLINE} color={INK} />
      </mesh>
      <Wheel position={[-0.85, 0.2, 0.62]} />
      <Wheel position={[0.85, 0.2, 0.62]} />
      <Wheel position={[-0.85, 0.2, -0.62]} />
      <Wheel position={[0.85, 0.2, -0.62]} />
      {/* handle */}
      <group position={[1.45, 0.45, 0]} rotation={[0, 0, -1.05]}>
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.1, 12]} />
          <meshToonMaterial color={INK} />
        </mesh>
        <mesh position={[0, 1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 0.34, 12]} />
          <meshToonMaterial color={INK} />
        </mesh>
      </group>
    </group>
  )
}

export default function HeroScene() {
  const reduced = prefersReducedMotion()
  return (
    <Canvas
      camera={{ position: [0, 1.4, 4.6], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? 'demand' : 'always'}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 2]} intensity={1.4} />
      <Float
        enabled={!reduced}
        speed={2}
        rotationIntensity={0.15}
        floatIntensity={0.6}
        floatingRange={[-0.05, 0.15]}
      >
        <Wagon />
      </Float>
      <ContactShadows position={[0, -0.1, 0]} opacity={0.35} scale={7} blur={2.4} far={2} />
    </Canvas>
  )
}
