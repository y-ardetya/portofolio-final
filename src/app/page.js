"use client";

import Overlay from "@/components/dom/Overlay";
import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  OrbitControls,
  Loader,
} from "@react-three/drei";
import { Suspense } from "react";
import Model from "@/components/canvas/Goodstuff";
import * as THREE from "three";
import GallerySetup from "@/components/canvas/GallerySetup";
import Blob from "@/components/canvas/Blob";

export default function Home() {
  return (
    <>
      <Canvas
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <ScrollControls pages={10}>
            <Model rotation={[0, Math.PI, 0]} position={[0, -3.5, -10]} />
            <GallerySetup />
            <Blob />
            <Scroll html>{/* <Overlay /> */}</Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
