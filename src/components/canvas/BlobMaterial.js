import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import vertex from "../canvas/shaders/Blob/BlobVert.glsl";
import fragment from "../canvas/shaders/Blob/BlobFrag.glsl";

const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uIntensity: 1,
  },
  vertex,
  fragment
);

extend({ BlobMaterial });

export { BlobMaterial };
