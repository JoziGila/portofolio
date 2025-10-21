'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function FluidImage() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, '/hero.png');
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const currentMouse = useRef({ x: 0.5, y: 0.5 });

  // Calculate aspect ratio
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1;

  useFrame((state) => {
    if (!meshRef.current) return;

    currentMouse.current.x += (mouse.current.x - currentMouse.current.x) * 0.05;
    currentMouse.current.y += (mouse.current.y - currentMouse.current.y) * 0.05;

    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.u_time.value = state.clock.getElapsedTime();
    material.uniforms.u_mouse.value.set(currentMouse.current.x, currentMouse.current.y);
  });

  const handlePointerMove = (e: any) => {
    if (e.intersections[0]?.uv) {
      mouse.current.x = e.intersections[0].uv.x;
      mouse.current.y = e.intersections[0].uv.y;
    }
  };

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[aspectRatio * 7, 7, 64, 64]} />
      <shaderMaterial
        vertexShader={`
          uniform float u_time;
          uniform vec2 u_mouse;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 pos = position;

            float dist = distance(uv, u_mouse);
            float ripple = sin(dist * 10.0 - u_time * 2.0) * 0.05;
            ripple *= smoothstep(0.5, 0.0, dist);

            pos.z += ripple;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D u_texture;
          uniform float u_time;
          uniform vec2 u_mouse;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;

            float dist = distance(uv, u_mouse);
            float distortion = sin(dist * 15.0 - u_time * 3.0) * 0.015;
            distortion *= smoothstep(0.4, 0.0, dist);

            uv.x += distortion;
            uv.y += distortion * 0.5;

            vec4 color = texture2D(u_texture, uv);
            gl_FragColor = color;
          }
        `}
        uniforms={{
          u_texture: { value: texture },
          u_time: { value: 0 },
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
        }}
        transparent
      />
    </mesh>
  );
}

export default function FluidHero() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <FluidImage />
        </Suspense>
      </Canvas>
    </div>
  );
}
