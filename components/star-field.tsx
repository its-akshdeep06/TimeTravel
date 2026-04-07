"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const frameIdRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x050510, 1)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particles
    const particleCount = 3000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const colorPalette = [
      new THREE.Color(0x7C3AED), // Electric purple
      new THREE.Color(0xA78BFA), // Glow purple
      new THREE.Color(0x06B6D4), // Cyan
      new THREE.Color(0xE2E8F0), // Stardust white
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Spread particles in a sphere
      const radius = 80 + Math.random() * 120
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      // Random sizes
      sizes[i] = Math.random() * 2 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    // Custom shader material for better star rendering
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vSize = size;
          
          vec3 pos = position;
          
          // Subtle floating animation
          pos.x += sin(time * 0.1 + position.y * 0.01) * 0.5;
          pos.y += cos(time * 0.1 + position.x * 0.01) * 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Soft glow effect
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 0.8;
          
          // Add subtle glow
          vec3 glow = vColor * (1.0 + (1.0 - dist * 2.0) * 0.3);
          
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Add nebula effect (larger, dimmer particles)
    const nebulaCount = 200
    const nebulaPositions = new Float32Array(nebulaCount * 3)
    const nebulaColors = new Float32Array(nebulaCount * 3)

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3
      nebulaPositions[i3] = (Math.random() - 0.5) * 200
      nebulaPositions[i3 + 1] = (Math.random() - 0.5) * 200
      nebulaPositions[i3 + 2] = (Math.random() - 0.5) * 100 - 50

      // Purple/cyan nebula colors
      const isBlue = Math.random() > 0.5
      nebulaColors[i3] = isBlue ? 0.024 : 0.486
      nebulaColors[i3 + 1] = isBlue ? 0.714 : 0.227
      nebulaColors[i3 + 2] = isBlue ? 0.831 : 0.929
    }

    const nebulaGeometry = new THREE.BufferGeometry()
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3))
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3))

    const nebulaMaterial = new THREE.PointsMaterial({
      size: 15,
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial)
    scene.add(nebula)

    const constellationGroups: THREE.Group[] = []
    const constellationCount = 5

    for (let i = 0; i < constellationCount; i++) {
      const points = [] as THREE.Vector3[]
      const pointCount = 4 + Math.floor(Math.random() * 3)
      const radius = 60 + Math.random() * 40
      const startAngle = Math.random() * Math.PI * 2

      for (let j = 0; j < pointCount; j++) {
        const angle = startAngle + j * (Math.PI / (pointCount + 1))
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius + (Math.random() - 0.5) * 20,
          Math.sin(angle) * radius + (Math.random() - 0.5) * 20,
          -20 + Math.random() * 40
        ))
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.35,
        linewidth: 1,
      })

      const line = new THREE.Line(lineGeometry, lineMaterial)
      const pointGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const pointMaterial = new THREE.PointsMaterial({
        color: 0xE2E8F0,
        size: 3,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      })
      const pointCloud = new THREE.Points(pointGeometry, pointMaterial)

      const group = new THREE.Group()
      group.add(line, pointCloud)
      group.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 80,
        -10 + Math.random() * 20
      )
      group.userData = { offset: Math.random() * Math.PI * 2 }

      scene.add(group)
      constellationGroups.push(group)
    }

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let time = 0
    const animate = () => {
      time += 0.016
      
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0003
        particlesRef.current.rotation.x += 0.0001
        
        // Mouse parallax effect
        particlesRef.current.rotation.y += mouseRef.current.x * 0.0002
        particlesRef.current.rotation.x += mouseRef.current.y * 0.0002
        
        const material = particlesRef.current.material as THREE.ShaderMaterial
        if (material.uniforms) {
          material.uniforms.time.value = time
        }
      }

      nebula.rotation.y -= 0.0001
      nebula.rotation.z += 0.0001

      constellationGroups.forEach((group, index) => {
        const offset = group.userData.offset as number
        group.rotation.z += 0.00035
        group.position.x += Math.sin(time * 0.01 + offset + index) * 0.01
        group.position.y += Math.cos(time * 0.008 + offset - index) * 0.01
      })

      renderer.render(scene, camera)
      frameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameIdRef.current)
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      
      geometry.dispose()
      material.dispose()
      nebulaGeometry.dispose()
      nebulaMaterial.dispose()
      constellationGroups.forEach((group) => {
        group.children.forEach((child) => {
          if (child instanceof THREE.Points || child instanceof THREE.Line) {
            child.geometry.dispose()
            if (child.material instanceof THREE.Material) {
              child.material.dispose()
            }
          }
        })
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
