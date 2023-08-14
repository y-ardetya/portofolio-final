import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";


const ImageMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
  },
  /* glsl */ `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    /* glsl */ `
    varying vec2 vUv;
    uniform float uTime;
    uniform sampler2D uTexture;

    void main() {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor = color;
    }
    `
);

extend({ ImageMaterial });

export { ImageMaterial };
