"use client";

import Particles from "@/components/canvas/Particles";
import Scene from "@/components/canvas/Scene";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          {/* <Particles /> */}
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
