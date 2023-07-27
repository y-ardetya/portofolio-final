"use client";

import Scene from "@/components/canvas/Scene";
import Overlay from "@/components/dom/Overlay";
import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  OrbitControls,
  Loader,
} from "@react-three/drei";

import Dungeon from "@/components/canvas/Dungeon";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />

          <ScrollControls pages={3}>
            <Scene />

            <Dungeon position={[0, -2, 5]} rotation={[0, -Math.PI / 2, 0]} />
            <mesh
              scale={20}
              position={[0, -1.999, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry />
              <meshBasicMaterial color="black" />
            </mesh>

            <Scroll html>
              <Overlay />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
