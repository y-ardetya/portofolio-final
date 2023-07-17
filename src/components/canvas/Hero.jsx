import { extend, useFrame, useThree } from "@react-three/fiber";
import { ImageMaterial } from "./ImageMaterial";
import { geometry } from "maath";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

extend(geometry);

const Hero = () => {
  const $shader = useRef();
  const { viewport } = useThree();
  const texture = useTexture("/3.jpg");

  useFrame((state, delta) => {
    $shader.current.uTime += delta;
    $shader.current.uMouse.x = (state.mouse * viewport) / 2;
    $shader.current.uMouse.y = (state.mouse * viewport) / 2;
  });
  return (
    <>
      <mesh
        scale={[viewport.width, viewport.height / 1.3, 1]}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[1, 1, 32, 32]} />
        <imageMaterial
          ref={$shader}
          uTexture={texture}
          key={ImageMaterial.key}
        />
      </mesh>
    </>
  );
};

export default Hero;
