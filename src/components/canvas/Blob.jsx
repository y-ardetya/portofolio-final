import { useRef } from "react";
import { BlobMaterial } from "./BlobMaterial";
import { useFrame } from "@react-three/fiber";

const Blob = () => {
  const $shader = useRef();

  useFrame((_, delta) => {
    $shader.current.uTime += delta;
  });

  return (
    <>
      <mesh position={[0, 2.5, -30]}>
        <icosahedronGeometry args={[2, 32]} />
        <blobMaterial ref={$shader} key={BlobMaterial.key} />
      </mesh>
    </>
  );
};

export default Blob;
