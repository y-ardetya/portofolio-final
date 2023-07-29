import * as THREE from "three";

const Gallery = ({ index, texture }) => {
  return (
    <>
      <mesh
        scale={2}
        position-x={index % 2 === 0 ? -6 : 6}
        position-y={-0.5}
        position-z={index % 2 === 0 ? index * 3 - 17 : index * 3 - 20}
        rotation-y={index % 2 === 0 ? Math.PI / 2 : -Math.PI / 2}
      >
        <planeGeometry args={[2, 1]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Gallery;
