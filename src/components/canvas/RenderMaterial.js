import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import vertex from "../canvas/shaders/Particle/renderVertex.glsl";
import fragment from "../canvas/shaders/Particle/renderFragment.glsl";

const RenderMaterial = shaderMaterial(
  {
    uPosition: null,
    uTime: 0,
  },
  vertex,
  fragment
);

extend({ RenderMaterial });

export { RenderMaterial };
