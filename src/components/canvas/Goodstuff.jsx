import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const { nodes } = useGLTF("/goodstuff-transformed.glb");
  const texture = useTexture("/midori.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={mat} />
      <mesh geometry={nodes.Cube001.geometry} material={mat} />
      <mesh geometry={nodes.Cube002.geometry} material={mat} />
      <mesh geometry={nodes.Cube003.geometry} material={mat} />
      <mesh geometry={nodes.Cube004.geometry} material={mat} />
      <mesh geometry={nodes.Cube005.geometry} material={mat} />
      <mesh geometry={nodes.Cube006.geometry} material={mat} />
      <mesh geometry={nodes.Cube007.geometry} material={mat} />
      <mesh geometry={nodes.Cube009.geometry} material={mat} />
      <mesh geometry={nodes.Cube010.geometry} material={mat} />
      <mesh geometry={nodes.Cube011.geometry} material={mat} />
      <mesh geometry={nodes.Cube012.geometry} material={mat} />
      <mesh geometry={nodes.Cube013.geometry} material={mat} />
      <mesh geometry={nodes.Cube014.geometry} material={mat} />
      <mesh geometry={nodes.Cube015.geometry} material={mat} />
      <mesh geometry={nodes.Cube016.geometry} material={mat} />
      <mesh geometry={nodes.Cube017.geometry} material={mat} />
      <mesh geometry={nodes.Cube018.geometry} material={mat} />
      <mesh geometry={nodes.Cube019.geometry} material={mat} />
      <mesh geometry={nodes.Cube020.geometry} material={mat} />
      <mesh geometry={nodes.Cube021.geometry} material={mat} />
      <mesh geometry={nodes.Cube022.geometry} material={mat} />
      <mesh geometry={nodes.Cube023.geometry} material={mat} />
      <mesh geometry={nodes.Cube024.geometry} material={mat} />
      <mesh geometry={nodes.Cube025.geometry} material={mat} />
      <mesh geometry={nodes.Cube027.geometry} material={mat} />
      <mesh geometry={nodes.Cube029.geometry} material={mat} />
      <mesh geometry={nodes.Cube030.geometry} material={mat} />
      <mesh geometry={nodes.Cube031.geometry} material={mat} />
      <mesh geometry={nodes.Cube032.geometry} material={mat} />
      <mesh geometry={nodes.Cube034.geometry} material={mat} />
      <mesh geometry={nodes.Cube035.geometry} material={mat} />
      <mesh geometry={nodes.Cube036.geometry} material={mat} />
      <mesh geometry={nodes.Cube037.geometry} material={mat} />
      <mesh geometry={nodes.Cube039.geometry} material={mat} />
      <mesh geometry={nodes.Cube040.geometry} material={mat} />
      <mesh geometry={nodes.Cube041.geometry} material={mat} />
      <mesh geometry={nodes.Cube042.geometry} material={mat} />
      <mesh geometry={nodes.Cube044.geometry} material={mat} />
      <mesh geometry={nodes.Cube045.geometry} material={mat} />
      <mesh geometry={nodes.Cube046.geometry} material={mat} />
      <mesh geometry={nodes.Cube047.geometry} material={mat} />
      <mesh geometry={nodes.Cube049.geometry} material={mat} />
      <mesh geometry={nodes.Cube050.geometry} material={mat} />
      <mesh geometry={nodes.Cube051.geometry} material={mat} />
      <mesh geometry={nodes.Cube052.geometry} material={mat} />
      <mesh geometry={nodes.Cube053.geometry} material={mat} />
      <mesh geometry={nodes.Cube054.geometry} material={mat} />
      <mesh geometry={nodes.Cube056.geometry} material={mat} />
      <mesh geometry={nodes.Cube057.geometry} material={mat} />
      <mesh geometry={nodes.Cube058.geometry} material={mat} />
      <mesh geometry={nodes.Cube059.geometry} material={mat} />
      <mesh geometry={nodes.Cube060.geometry} material={mat} />
      <mesh geometry={nodes.Cube061.geometry} material={mat} />
      <mesh geometry={nodes.Cube062.geometry} material={mat} />
      <mesh geometry={nodes.Cube063.geometry} material={mat} />
      <mesh geometry={nodes.Cube064.geometry} material={mat} />
      <mesh geometry={nodes.Cube065.geometry} material={mat} />
      <mesh geometry={nodes.Cube066.geometry} material={mat} />
      <mesh geometry={nodes.Cube067.geometry} material={mat} />
      <mesh geometry={nodes.Cube068.geometry} material={mat} />
      <mesh geometry={nodes.Cube069.geometry} material={mat} />
      <mesh geometry={nodes.Cube070.geometry} material={mat} />
      <mesh geometry={nodes.Cube072.geometry} material={mat} />
      <mesh geometry={nodes.Cube073.geometry} material={mat} />
      <mesh geometry={nodes.Cube074.geometry} material={mat} />
      <mesh geometry={nodes.Cube188.geometry} material={mat} />
      <mesh geometry={nodes.Cube189.geometry} material={mat} />
      <mesh geometry={nodes.Cube190.geometry} material={mat} />
      <mesh geometry={nodes.Cube191.geometry} material={mat} />
      <mesh geometry={nodes.Cube197.geometry} material={mat} />
      <mesh geometry={nodes.Cube198.geometry} material={mat} />
      <mesh geometry={nodes.Cube199.geometry} material={mat} />
      <mesh geometry={nodes.Cube200.geometry} material={mat} />
      <mesh geometry={nodes.Cube201.geometry} material={mat} />
      <mesh geometry={nodes.Cube212.geometry} material={mat} />
      <mesh geometry={nodes.Cube213.geometry} material={mat} />
      <mesh geometry={nodes.Cube214.geometry} material={mat} />
      <mesh geometry={nodes.Cube216.geometry} material={mat} />
      <mesh geometry={nodes.Cube222.geometry} material={mat} />
      <mesh geometry={nodes.Cube223.geometry} material={mat} />
      <mesh geometry={nodes.Cube224.geometry} material={mat} />
      <mesh geometry={nodes.Cube226.geometry} material={mat} />
      <mesh geometry={nodes.Cube237.geometry} material={mat} />
      <mesh geometry={nodes.Cube238.geometry} material={mat} />
      <mesh geometry={nodes.Cube239.geometry} material={mat} />
      <mesh geometry={nodes.Cube240.geometry} material={mat} />
      <mesh geometry={nodes.Cube241.geometry} material={mat} />
      <mesh geometry={nodes.Cube247.geometry} material={mat} />
      <mesh geometry={nodes.Cube248.geometry} material={mat} />
      <mesh geometry={nodes.Cube249.geometry} material={mat} />
      <mesh geometry={nodes.Cube250.geometry} material={mat} />
      <mesh geometry={nodes.Cube251.geometry} material={mat} />
      <mesh geometry={nodes.Cube267.geometry} material={mat} />
      <mesh geometry={nodes.Cube268.geometry} material={mat} />
      <mesh geometry={nodes.Cube269.geometry} material={mat} />
      <mesh geometry={nodes.Cube271.geometry} material={mat} />
      <mesh geometry={nodes.Cube277.geometry} material={mat} />
      <mesh geometry={nodes.Cube278.geometry} material={mat} />
      <mesh geometry={nodes.Cube279.geometry} material={mat} />
      <mesh geometry={nodes.Cube280.geometry} material={mat} />
      <mesh geometry={nodes.Cube281.geometry} material={mat} />
      <mesh geometry={nodes.Cube293.geometry} material={mat} />
      <mesh geometry={nodes.Cube294.geometry} material={mat} />
      <mesh geometry={nodes.Cube296.geometry} material={mat} />
      <mesh geometry={nodes.Cube302.geometry} material={mat} />
      <mesh geometry={nodes.Cube304.geometry} material={mat} />
      <mesh geometry={nodes.Cube306.geometry} material={mat} />
      <mesh geometry={nodes.Cube317.geometry} material={mat} />
      <mesh geometry={nodes.Cube318.geometry} material={mat} />
      <mesh geometry={nodes.Cube319.geometry} material={mat} />
      <mesh geometry={nodes.Cube320.geometry} material={mat} />
      <mesh geometry={nodes.Cube321.geometry} material={mat} />
      <mesh geometry={nodes.Cube327.geometry} material={mat} />
      <mesh geometry={nodes.Cube328.geometry} material={mat} />
      <mesh geometry={nodes.Cube329.geometry} material={mat} />
      <mesh geometry={nodes.Cube330.geometry} material={mat} />
      <mesh geometry={nodes.Cube331.geometry} material={mat} />
      <mesh geometry={nodes.Cube008.geometry} material={mat} />
      <mesh geometry={nodes.Cube055.geometry} material={mat} />
      <mesh geometry={nodes.Cube071.geometry} material={mat} />
      <mesh geometry={nodes.Cube026.geometry} material={mat} />
      <mesh geometry={nodes.Cube155.geometry} material={mat} />
      <mesh geometry={nodes.Cube156.geometry} material={mat} />
      <mesh geometry={nodes.Circle.geometry} material={mat} />
      <mesh geometry={nodes.Circle001.geometry} material={mat} />
      <mesh geometry={nodes.Circle002.geometry} material={mat} />
      <mesh geometry={nodes.Circle003.geometry} material={mat} />
      <mesh geometry={nodes.Cube171.geometry} material={mat} />
      <mesh geometry={nodes.Cube172.geometry} material={mat} />
      <mesh geometry={nodes.Cube173.geometry} material={mat} />
      <mesh geometry={nodes.Cube174.geometry} material={mat} />
      <mesh geometry={nodes.Cube092.geometry} material={mat} />
      <mesh geometry={nodes.Cube093.geometry} material={mat} />
      <mesh geometry={nodes.Cube094.geometry} material={mat} />
      <mesh geometry={nodes.Cube095.geometry} material={mat} />
      <mesh geometry={nodes.Cube096.geometry} material={mat} />
      <mesh geometry={nodes.Cube097.geometry} material={mat} />
      <mesh geometry={nodes.Cube098.geometry} material={mat} />
      <mesh geometry={nodes.Cube099.geometry} material={mat} />
      <mesh geometry={nodes.Cube100.geometry} material={mat} />
      <mesh geometry={nodes.Cube101.geometry} material={mat} />
      <mesh geometry={nodes.Cube102.geometry} material={mat} />
      <mesh geometry={nodes.Cube125.geometry} material={mat} />
      <mesh geometry={nodes.Cube126.geometry} material={mat} />
      <mesh geometry={nodes.Cube127.geometry} material={mat} />
      <mesh geometry={nodes.Cube128.geometry} material={mat} />
      <mesh geometry={nodes.Cube129.geometry} material={mat} />
      <mesh geometry={nodes.Cube132.geometry} material={mat} />
      <mesh geometry={nodes.Cube130.geometry} material={mat} />
      <mesh geometry={nodes.Cube131.geometry} material={mat} />
      <mesh geometry={nodes.Cube133.geometry} material={mat} />
      <mesh geometry={nodes.Cube028.geometry} material={mat} />
      <mesh geometry={nodes.Cube033.geometry} material={mat} />
      <mesh geometry={nodes.Cube038.geometry} material={mat} />
      <mesh geometry={nodes.Cube043.geometry} material={mat} />
      <mesh geometry={nodes.Cube048.geometry} material={mat} />
      <mesh geometry={nodes.Cube075.geometry} material={mat} />
      <mesh geometry={nodes.Cube076.geometry} material={mat} />
      <mesh geometry={nodes.Cube077.geometry} material={mat} />
      <mesh geometry={nodes.Cube078.geometry} material={mat} />
      <mesh geometry={nodes.Cube079.geometry} material={mat} />
      <mesh geometry={nodes.Cube080.geometry} material={mat} />
      <mesh geometry={nodes.Cube081.geometry} material={mat} />
      <mesh geometry={nodes.Cube082.geometry} material={mat} />
      <mesh geometry={nodes.Cube083.geometry} material={mat} />
      <mesh geometry={nodes.Cube084.geometry} material={mat} />
      <mesh geometry={nodes.Cube085.geometry} material={mat} />
      <mesh geometry={nodes.Cube086.geometry} material={mat} />
      <mesh geometry={nodes.Cube087.geometry} material={mat} />
      <mesh geometry={nodes.Cube088.geometry} material={mat} />
      <mesh geometry={nodes.Cube089.geometry} material={mat} />
      <mesh geometry={nodes.Cube090.geometry} material={mat} />
      <mesh geometry={nodes.Cube091.geometry} material={mat} />
      <mesh geometry={nodes.Cube103.geometry} material={mat} />
      <mesh geometry={nodes.Cube104.geometry} material={mat} />
      <mesh geometry={nodes.Cube105.geometry} material={mat} />
      <mesh geometry={nodes.Cube106.geometry} material={mat} />
      <mesh geometry={nodes.Cube107.geometry} material={mat} />
      <mesh geometry={nodes.Cube108.geometry} material={mat} />
      <mesh geometry={nodes.Cube109.geometry} material={mat} />
      <mesh geometry={nodes.Cube110.geometry} material={mat} />
      <mesh geometry={nodes.Cube111.geometry} material={mat} />
      <mesh geometry={nodes.Cube112.geometry} material={mat} />
      <mesh geometry={nodes.Cube113.geometry} material={mat} />
      <mesh geometry={nodes.Cube114.geometry} material={mat} />
      <mesh geometry={nodes.Cube115.geometry} material={mat} />
      <mesh geometry={nodes.Cube116.geometry} material={mat} />
      <mesh geometry={nodes.Cube117.geometry} material={mat} />
      <mesh geometry={nodes.Cube118.geometry} material={mat} />
      <mesh geometry={nodes.Cube119.geometry} material={mat} />
      <mesh geometry={nodes.Cube120.geometry} material={mat} />
      <mesh geometry={nodes.Cube121.geometry} material={mat} />
      <mesh geometry={nodes.Cube122.geometry} material={mat} />
      <mesh geometry={nodes.Cube123.geometry} material={mat} />
      <mesh geometry={nodes.Cube124.geometry} material={mat} />
      <mesh geometry={nodes.Cube134.geometry} material={mat} />
      <mesh geometry={nodes.Cube135.geometry} material={mat} />
      <mesh geometry={nodes.Cube136.geometry} material={mat} />
      <mesh geometry={nodes.Cube137.geometry} material={mat} />
      <mesh geometry={nodes.Cube138.geometry} material={mat} />
      <mesh geometry={nodes.Cube139.geometry} material={mat} />
      <mesh geometry={nodes.Cube140.geometry} material={mat} />
      <mesh geometry={nodes.Cube141.geometry} material={mat} />
      <mesh geometry={nodes.Cube142.geometry} material={mat} />
      <mesh geometry={nodes.Cube143.geometry} material={mat} />
      <mesh geometry={nodes.Cube144.geometry} material={mat} />
      <mesh geometry={nodes.Cube145.geometry} material={mat} />
      <mesh geometry={nodes.Cube146.geometry} material={mat} />
      <mesh geometry={nodes.Cube147.geometry} material={mat} />
      <mesh geometry={nodes.Cube148.geometry} material={mat} />
      <mesh geometry={nodes.Cube149.geometry} material={mat} />
      <mesh geometry={nodes.Cube150.geometry} material={mat} />
      <mesh geometry={nodes.Cube151.geometry} material={mat} />
      <mesh geometry={nodes.Cube152.geometry} material={mat} />
      <mesh geometry={nodes.Cube153.geometry} material={mat} />
      <mesh geometry={nodes.Cube154.geometry} material={mat} />
      <mesh
        geometry={nodes.Cube157.geometry}
        material={mat}
        position={[0, 0, -6.01]}
      />
      <mesh
        geometry={nodes.Cube158.geometry}
        material={mat}
        position={[6.82, 0.37, 5.64]}
        scale={[0.18, 0.39, 0.41]}
      />
      <mesh
        geometry={nodes.Cube159.geometry}
        material={mat}
        position={[4.17, 0.15, 5.64]}
        rotation={[-0.25, -0.75, 0]}
        scale={[0.18, 0.39, 0.41]}
      />
    </group>
  );
}

useGLTF.preload("/goodstuff-transformed.glb");
