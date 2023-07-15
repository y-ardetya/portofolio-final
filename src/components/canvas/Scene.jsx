import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const Scene = () => {
  const textures = useTexture([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);
  const [scrollTarget, setScrollTarget] = useState(0);
  const margin = 4.05;
  const width = textures.length * margin;
  const mesh = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTarget((prev) => prev + e.wheelDeltaY * 0.003);
    };
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      {textures.map((texture, index) => {
        return (
          <group key={index} position={[-4, 1, 0]} rotation={[0, 0, 0.1]}>
            <mesh
              ref={mesh}
              position={[
                ((index * margin + scrollTarget + 42069 * width) % width) -
                  2 * margin,
                0,
                0,
              ]}
            >
              <planeGeometry args={[4, 2]} />
              <meshBasicMaterial map={texture} />
            </mesh>
          </group>
        );
      })}
    </>
  );
};

export default Scene;
