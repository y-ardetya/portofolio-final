"use client";

import Scene from "@/components/canvas/Scene";
import Overlay from "@/components/dom/Overlay";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <Overlay />
      <div className="w-screen h-[75vh] bg-black z-50 mt-[10vh]">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
