import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

function NeuralNetworkNodes({ theme }: { theme: string }) {
  const group = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 120;
  const maxDistance = 2.5;

  // Generate random positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );
    }
    return [pos, vel];
  }, []);

  useFrame((state) => {
    if (!group.current || !linesRef.current) return;
    
    // Slow rotation of the whole system
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    group.current.rotation.y += 0.002;

    // React to mouse slightly
    group.current.rotation.x += (state.pointer.y * 0.2 - group.current.rotation.x) * 0.05;
    group.current.rotation.y += (state.pointer.x * 0.2 - group.current.rotation.y) * 0.05;

    // Update particle positions
    const posAttribute = (group.current.children[0] as THREE.Points).geometry.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      posAttribute.array[i * 3] += velocities[i].x;
      posAttribute.array[i * 3 + 1] += velocities[i].y;
      posAttribute.array[i * 3 + 2] += velocities[i].z;

      // Bounce off walls (invisible cubic boundary)
      if (Math.abs(posAttribute.array[i * 3]) > 7.5) velocities[i].x *= -1;
      if (Math.abs(posAttribute.array[i * 3 + 1]) > 7.5) velocities[i].y *= -1;
      if (Math.abs(posAttribute.array[i * 3 + 2]) > 7.5) velocities[i].z *= -1;
    }
    posAttribute.needsUpdate = true;

    // Update lines connecting nearby points
    const linePositions = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posAttribute.array[i * 3] - posAttribute.array[j * 3];
        const dy = posAttribute.array[i * 3 + 1] - posAttribute.array[j * 3 + 1];
        const dz = posAttribute.array[i * 3 + 2] - posAttribute.array[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          linePositions.push(
            posAttribute.array[i * 3], posAttribute.array[i * 3 + 1], posAttribute.array[i * 3 + 2],
            posAttribute.array[j * 3], posAttribute.array[j * 3 + 1], posAttribute.array[j * 3 + 2]
          );
        }
      }
    }

    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

  const particleColor = theme === 'dark' ? '#38bdf8' : '#0ea5e9';
  const pointOpacity = theme === 'dark' ? 0.6 : 0.8;
  const lineOpacity = theme === 'dark' ? 0.15 : 0.25;

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color={particleColor} transparent opacity={pointOpacity} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color={particleColor} transparent opacity={lineOpacity} />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetworkCanvas() {
  const { theme } = useTheme();

  return (
    <div className={`absolute inset-0 pointer-events-none z-[1] overflow-hidden transition-all duration-1000 ${
      theme === 'dark' ? 'opacity-100 mix-blend-screen' : 'opacity-70 mix-blend-multiply'
    }`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <NeuralNetworkNodes theme={theme} />
      </Canvas>
    </div>
  );
}
