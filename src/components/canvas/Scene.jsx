import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

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
  const wholeWidth = textures.length * margin;
  const mesh = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTarget(
        (prevScrollTarget) => prevScrollTarget + e.wheelDeltaY * 0.001
      );
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
          <group key={index} position={[-4, 0, 0]}>
            <mesh
              ref={mesh}
              position={[
                ((index * margin + scrollTarget + 42069 * wholeWidth) %
                  wholeWidth) -
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
