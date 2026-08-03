"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uSpin;
  uniform float uScroll;
  uniform vec2 uPointer;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vSpunPosition;
  varying float vNoise;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
      f.z
    );
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.55;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = p * 2.03 + vec3(1.7, 4.2, 2.4);
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    float spinCos = cos(uSpin);
    float spinSin = sin(uSpin);
    vec3 spunPosition = vec3(
      position.x * spinCos - position.z * spinSin,
      position.y,
      position.x * spinSin + position.z * spinCos
    );
    vec3 samplePoint = spunPosition * 1.15 + vec3(
      uPointer.x * 0.18,
      uTime * 0.11 + uPointer.y * 0.16,
      uTime * 0.075
    );
    float organic = fbm(samplePoint);
    float ribbons = sin(spunPosition.y * 5.4 + organic * 7.4 - uTime * 0.72) * 0.5 + 0.5;
    float crossWave = sin(spunPosition.x * 3.2 - spunPosition.z * 2.7 + uTime * 0.48) * 0.5 + 0.5;
    float microPulse = sin(uTime * 1.15 + spunPosition.x * 3.0 + spunPosition.z * 2.0) * 0.024;
    float displacement = (organic - 0.48) * 0.39 + ribbons * 0.078 + crossWave * 0.026 + microPulse + uScroll * 0.03;
    vec3 displaced = position + normal * displacement;

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vSpunPosition = spunPosition;
    vNoise = organic + ribbons * 0.18 + crossWave * 0.06;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vSpunPosition;
  varying float vNoise;

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vWorldNormal), 0.0), 2.15);
    float contour = smoothstep(0.42, 0.7, sin(vNoise * 13.0 - uTime * 0.62) * 0.5 + 0.5);
    float latitude = smoothstep(0.46, 0.68, sin(vSpunPosition.y * 5.8 + vNoise * 5.0 + uTime * 0.24) * 0.5 + 0.5);
    float aurora = smoothstep(0.67, 0.9, sin(vNoise * 24.0 + vSpunPosition.x * 2.4 - uTime * 1.05) * 0.5 + 0.5);
    float pulse = sin(uTime * 1.45 + vSpunPosition.y * 2.0) * 0.5 + 0.5;

    vec3 deep = vec3(0.025, 0.08, 0.09);
    vec3 teal = vec3(0.08, 0.55, 0.5);
    vec3 cyan = vec3(0.12, 0.48, 0.58);
    vec3 pearl = vec3(0.72, 0.96, 0.92);

    vec3 color = mix(deep, teal, clamp(vNoise * 1.05, 0.0, 1.0));
    color = mix(color, cyan, contour * 0.42);
    color = mix(color, pearl, fresnel * 0.72 + latitude * 0.12);
    color += vec3(0.12, 0.56, 0.49) * aurora * (0.16 + pulse * 0.17);
    color += vec3(0.06, 0.3, 0.38) * latitude * (0.08 + pulse * 0.07);
    float alpha = 0.56 + fresnel * 0.42 + contour * 0.08 + aurora * 0.08;
    gl_FragColor = vec4(color, alpha);
  }
`;

function EnergyOrb({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const satelliteOrbitA = useRef<THREE.Group>(null);
  const satelliteOrbitB = useRef<THREE.Group>(null);
  const wireShell = useRef<THREE.Mesh>(null);
  const energyKnot = useRef<THREE.Mesh>(null);
  const energyDust = useRef<THREE.Points>(null);
  const orbitalRings = useRef<THREE.Group>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpin: { value: 0 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2() },
    }),
    [],
  );

  const nodes = useMemo(() => {
    const count = 72;
    const positions = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let index = 0; index < count; index += 1) {
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = golden * index;
      positions[index * 3] = Math.cos(angle) * radius * 2.52;
      positions[index * 3 + 1] = y * 2.52;
      positions[index * 3 + 2] = Math.sin(angle) * radius * 2.52;
    }
    return positions;
  }, []);

  const connections = useMemo(() => {
    const pairs: number[] = [];
    const count = nodes.length / 3;
    for (let index = 0; index < count; index += 3) {
      const other = (index + 8 + (index % 5)) % count;
      pairs.push(
        nodes[index * 3], nodes[index * 3 + 1], nodes[index * 3 + 2],
        nodes[other * 3], nodes[other * 3 + 1], nodes[other * 3 + 2],
      );
    }
    return new Float32Array(pairs);
  }, [nodes]);

  const dust = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const progress = index / count;
      const angle = progress * Math.PI * 11.5;
      const radius = 2.28 + Math.sin(index * 1.7) * 0.34;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (progress - 0.5) * 4.4;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  const satellites = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const angle = (index / 9) * Math.PI * 2;
        const radius = 2.7 + (index % 3) * 0.08;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as const;
      }),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current || !material.current) return;
    const elapsed = reducedMotion ? 0 : clock.getElapsedTime();
    const scroll = Math.min(window.scrollY / 900, 1);
    material.current.uniforms.uTime.value = elapsed;
    material.current.uniforms.uSpin.value = -elapsed * 0.18;
    material.current.uniforms.uScroll.value = scroll;
    material.current.uniforms.uPointer.value.lerp(pointer, 0.035);

    if (!reducedMotion) {
      group.current.rotation.y = elapsed * 0.025;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.sin(elapsed * 0.21) * 0.055 + pointer.y * 0.12,
        0.026,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.cos(elapsed * 0.18) * 0.035 - pointer.x * 0.08,
        0.026,
      );
      group.current.position.y = Math.sin(elapsed * 0.52) * 0.045;
      if (core.current) {
        const pulse = 1 + Math.sin(elapsed * 1.05) * 0.018 + scroll * 0.025;
        core.current.scale.setScalar(pulse);
        core.current.rotation.x = Math.sin(elapsed * 0.18) * 0.07;
        core.current.rotation.y = elapsed * 0.32;
        core.current.rotation.z = elapsed * 0.035;
      }
      if (wireShell.current) {
        wireShell.current.rotation.x = 0.16 + elapsed * 0.035;
        wireShell.current.rotation.y = 0.32 - elapsed * 0.052;
      }
      if (energyKnot.current) {
        energyKnot.current.rotation.x = 0.5 + elapsed * 0.018;
        energyKnot.current.rotation.y = 0.9 - elapsed * 0.024;
      }
      if (energyDust.current) {
        energyDust.current.rotation.y = -elapsed * 0.08;
        energyDust.current.rotation.z = elapsed * 0.025;
      }
      if (orbitalRings.current) orbitalRings.current.rotation.y = elapsed * 0.028;
      if (satelliteOrbitA.current) satelliteOrbitA.current.rotation.z = elapsed * 0.19;
      if (satelliteOrbitB.current) satelliteOrbitB.current.rotation.z = -elapsed * 0.135;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <sphereGeometry args={[2.08, 88, 88]} />
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      <mesh scale={0.74}>
        <sphereGeometry args={[2.08, 48, 48]} />
        <meshBasicMaterial
          color="#2bb3a3"
          transparent
          opacity={0.2}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={wireShell} scale={1.045} rotation={[0.16, 0.32, 0]}>
        <icosahedronGeometry args={[2.15, 3]} />
        <meshBasicMaterial color="#72d8cc" wireframe transparent opacity={0.065} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#e1fffb"
          size={0.052}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connections, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#62cfc2"
          transparent
          opacity={0.24}
          depthWrite={false}
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points ref={energyDust} rotation={[0.2, 0.1, 0.65]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#75cad5"
          size={0.034}
          sizeAttenuation
          transparent
          opacity={0.62}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh ref={energyKnot} rotation={[0.5, 0.9, 0.22]}>
        <torusKnotGeometry args={[2.18, 0.012, 180, 12, 2, 3]} />
        <meshBasicMaterial
          color="#3bbbac"
          wireframe
          transparent
          opacity={0.12}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <group ref={satelliteOrbitA} rotation={[1.1, 0.18, 0.1]}>
        {satellites.map((position, index) => (
          <mesh key={`satellite-a-${index}`} position={position}>
            <sphereGeometry args={[index % 3 === 0 ? 0.055 : 0.032, 12, 12]} />
            <meshBasicMaterial
              color={index % 2 === 0 ? "#e1fffb" : "#75cad5"}
              transparent
              opacity={0.9}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      <group ref={satelliteOrbitB} rotation={[0.28, 1.12, 0.76]} scale={0.92}>
        {satellites.filter((_, index) => index % 2 === 0).map((position, index) => (
          <mesh key={`satellite-b-${index}`} position={position}>
            <sphereGeometry args={[0.026, 10, 10]} />
            <meshBasicMaterial
              color="#a8eee6"
              transparent
              opacity={0.72}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      <group ref={orbitalRings}>
        <mesh rotation={[1.14, 0.22, 0.18]}>
          <torusGeometry args={[2.62, 0.009, 8, 180]} />
          <meshBasicMaterial color="#9cebe1" transparent opacity={0.5} depthWrite={false} />
        </mesh>
        <mesh rotation={[0.62, 1.16, 0.12]} scale={0.94}>
          <torusGeometry args={[2.7, 0.007, 8, 180]} />
          <meshBasicMaterial color="#4db7c3" transparent opacity={0.3} depthWrite={false} />
        </mesh>
        <mesh rotation={[0.2, 0.54, 1.24]} scale={0.83}>
          <torusGeometry args={[2.78, 0.005, 8, 180]} />
          <meshBasicMaterial color="#c5f4ee" transparent opacity={0.18} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}

export default function OrbCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.6], fov: 43 }}
      dpr={[1, 1.35]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <EnergyOrb reducedMotion={reducedMotion} />
    </Canvas>
  );
}
