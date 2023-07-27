import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const CarouselData = ({ position, rotation, reverse }) => {
  const textures = useTexture([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);
  const [scrollTarget, setScrollTarget] = useState(0);
  const margin = 6.05;
  const width = textures.length * margin;
  const mesh = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTarget((prev) =>
        reverse ? prev + e.wheelDeltaY * 0.003 : prev - e.wheelDeltaY * 0.003
      );
    };
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [reverse]);

  return (
    <>
      {textures.map((texture, index) => {
        return (
          <group key={index} position={position} rotation={rotation}>
            <mesh
              scale={1.5}
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

const Carousel = () => {
  const [reverse, _] = useState(true);

  return (
    <>
      {/* <CarouselData
        rotation={[0, 0, 0.1]}
        position={[-8, 3.68, 0]}
        reverse={reverse}
      /> */}
      <CarouselData rotation={[0, 0, 0.1]} position={[-4, 2, 0]} />
      <CarouselData
        rotation={[0, 0, 0.1]}
        position={[-8, -2.48, 0]}
        reverse={reverse}
      />
      {/* <CarouselData rotation={[0, 0, 0.1]} position={[-4, -5.2, 0]} /> */}
    </>
  );
};

export default Carousel;
