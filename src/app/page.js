"use client";

import Particles from "@/components/canvas/Particles";
import Scene from "@/components/canvas/Scene";
import Overlay from "@/components/dom/Overlay";
import { Html, Loader, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Scroll html>
              <Overlay />
            </Scroll>
            {/* <Particles /> */}
            <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
