import { shaderMaterial } from "@react-three/drei";
import vertex from "./shaders/imageVert.glsl";
import fragment from "./shaders/imageFrag.glsl";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

const ImageMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
    uMouse: new THREE.Vector2(0, 0),
  },
  vertex,
  fragment
);

extend({ ImageMaterial });

export { ImageMaterial };
