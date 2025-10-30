import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#00D9FF"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  );
};

export default AnimatedSphere;

