import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.offsetWidth / mount.offsetHeight, 0.1, 100)
    camera.position.z = 3.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.offsetWidth, mount.offsetHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mount.appendChild(renderer.domElement)

    // Wireframe sphere
    const geo  = new THREE.IcosahedronGeometry(1.4, 2)
    const wire = new THREE.WireframeGeometry(geo)
    const mat  = new THREE.LineBasicMaterial({ color: 0x00FFB2, transparent: true, opacity: 0.18 })
    const mesh = new THREE.LineSegments(wire, mat)
    scene.add(mesh)

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00FFB2, transparent: true, opacity: 0.04, wireframe: false,
    })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    scene.add(inner)

    // Orbit particles
    const particleGeo = new THREE.BufferGeometry()
    const count = 200
    const pos   = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 1.8 + Math.random() * 0.8
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pointsMat  = new THREE.PointsMaterial({ color: 0x7B61FF, size: 0.025 })
    const pointsMesh = new THREE.Points(particleGeo, pointsMat)
    scene.add(pointsMesh)

    // Mouse interaction
    let mouseX = 0, mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize
    const onResize = () => {
      camera.aspect = mount.offsetWidth / mount.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.offsetWidth, mount.offsetHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation
    let frame
    const clock = new THREE.Clock()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      mesh.rotation.y = t * 0.12 + mouseX * 0.3
      mesh.rotation.x = t * 0.07 + mouseY * 0.2
      pointsMesh.rotation.y = -t * 0.06
      pointsMesh.rotation.x = t * 0.04

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={mountRef} style={{
      width: '100%', height: '100%',
      position: 'absolute', top: 0, left: 0,
    }} />
  )
}
