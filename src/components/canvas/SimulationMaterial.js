import { shaderMaterial } from "@react-three/drei";
import vertex from "./shaders/simVert.glsl";
import fragment from "./shaders/simFrag.glsl";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

const SimulationMaterial = shaderMaterial(
  {
    uTime: 0,
    uCurrentPosition: null,
    uOriginalPosition: null,
    uMouse: new THREE.Vector2(0, 0),
  },
  vertex,
  fragment
);

extend({ SimulationMaterial });

export { SimulationMaterial };
