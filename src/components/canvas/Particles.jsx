import { createPortal, useFrame, useThree } from "@react-three/fiber";
import { RenderMaterial } from "./RenderMaterial";
import { SimulationMaterial } from "./SimulationMaterial";
import * as THREE from "three";
import { getPixelData } from "@/helpers/ImageTexture";
import { useFBO } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Particles = () => {
  const $render = useRef();
  const $sim = useRef();
  const mesh = useRef();
  const { viewport } = useThree();
  const size = 128;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

  let target0 = useFBO(size, size, {
    type: THREE.FloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
  });

  let target1 = useFBO(size, size, {
    type: THREE.FloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
  });

  useFrame(({ gl }) => {
    gl.setRenderTarget(target0);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    $render.current.uniforms.uTexture.value = target1.texture;
    $sim.current.uniforms.uCurrentPosition.value = target0.texture;

    let temp = target0;
    target0 = target1;
    target1 = temp;
  });

  useEffect(() => {
    Promise.all([getPixelData("/log.png"), getPixelData("/log.png")]).then(
      (res) => {
        $sim.current.uniforms.uOriginalPosition.value = res[1];
        $sim.current.uniforms.uCurrentPosition.value = res[1];
      }
    );
  }, []);

  useFrame(({ mouse }) => {
    $sim.current.uniforms.uMouse.value.x = (mouse.x * viewport.width) / 2;
    $sim.current.uniforms.uMouse.value.y = (mouse.y * viewport.height) / 2;

    mesh.current.position.x = (mouse.x * viewport.width) / 2;
    mesh.current.position.y = (mouse.y * viewport.height) / 2;
  });

  const positions = new Float32Array(size * size * 3);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const k = i * size + j;
      positions[k * 3 + 0] = (5 * i) / size;
      positions[k * 3 + 1] = (5 * j) / size;
      positions[k * 3 + 2] = 0;
    }
  }

  const ref = new Float32Array(size * size * 2);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const k = i * size + j;
      ref[k * 2 + 0] = i / (size - 1);
      ref[k * 2 + 1] = j / (size - 1);
    }
  }

  return (
    <>
      {createPortal(
        <mesh>
          <planeGeometry args={[2, 2]} />
          <simulationMaterial ref={$sim} key={SimulationMaterial} />
        </mesh>,
        scene
      )}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-ref"
            count={ref.length / 2}
            array={ref}
            itemSize={2}
          />
        </bufferGeometry>
        <renderMaterial ref={$render} key={RenderMaterial.key} />
      </points>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default Particles;
