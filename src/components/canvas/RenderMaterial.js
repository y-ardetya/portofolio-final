import { shaderMaterial } from "@react-three/drei";
import vertex from "./shaders/renderVert.glsl";
import fragment from "./shaders/renderFrag.glsl";
import { extend } from "@react-three/fiber";

const RenderMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
    uPicture: null,
  },
  vertex,
  fragment
);

extend({ RenderMaterial });

export { RenderMaterial };
