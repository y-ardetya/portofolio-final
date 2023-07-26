"use client";

import Scene from "@/components/canvas/Scene";
import Overlay from "@/components/dom/Overlay";
import { Canvas } from "@react-three/fiber";
import { motion as m } from "framer-motion";
import { Suspense, useRef } from "react";
import { useStore } from "@/components/store/Store";
import { View } from "@react-three/drei";

export default function Home() {
  const setIsHero = useStore((state) => state.setIsHero);
  const isHero = useStore((state) => state.isHero);
  const index = useStore((state) => state.index);

  return (
    <>
      <Overlay />
      <m.div
        onClick={() => setIsHero()}
        className="w-screen h-[75vh] bg-black z-50 mt-[10vh]"
        animate={{ y: isHero ? 0 : "80%" }}
        transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1] }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </m.div>
    </>
  );
}
