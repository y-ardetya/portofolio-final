"use client";

import Hero from "@/components/canvas/Hero";
import Particles from "@/components/canvas/Particles";
import Scene from "@/components/canvas/Scene";
import Overlay from "@/components/dom/Overlay";
import { Html, Loader, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      {/* <Overlay /> */}
      <div className="w-screen h-screen absolute top-0 left-0">
        <Canvas>
          <Suspense fallback={null}>
            <ScrollControls pages={2}>
              <Scroll html>
                <Overlay />
              </Scroll>
              <Scroll>
                <Particles />
                <Hero />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  );
}
