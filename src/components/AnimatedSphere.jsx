import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { memo } from 'react';

// Reduced polygon count for better performance (32x32 = 2048 vs 20000)
const AnimatedSphere = memo(() => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 32, 32]} scale={2.5}>
        <MeshDistortMaterial
          color="#00D9FF"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
});

AnimatedSphere.displayName = 'AnimatedSphere';

export default AnimatedSphere;

