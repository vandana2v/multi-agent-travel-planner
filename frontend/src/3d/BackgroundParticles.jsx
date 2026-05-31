import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function FlyingStars() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={ref}>
      <Stars
        radius={150}
        depth={80}
        count={8000}
        factor={6}
        fade
        speed={2}
      />
    </group>
  );
}

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FlyingStars />
      </Canvas>
    </div>
  );
}