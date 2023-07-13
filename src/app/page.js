"use client";

import Particles from "@/components/canvas/Particles";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
