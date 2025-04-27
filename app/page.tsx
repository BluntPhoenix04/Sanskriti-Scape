"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { defaultGlobeConfig } from "@/components/ui/globe";
import { sampleArcs } from "@/components/ui/globe-data";

const World = dynamic(() => import("@/components/ui/globe").then((mod) => mod.World), {
  ssr: false,
});


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to <span className="text-primary">Sanskriti Scape</span>
        </h1>
        <p className="mt-3 text-2xl">
          Discover the great history of Indian through interactive maps and comprehensive resources.
        </p>

        {/* Showcase the Globe */}
        <div className="flex flex-none items-center justify-center dark:bg-black bg-white relative w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden md:h-[50rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="div"
            />
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
              <World data={sampleArcs} globeConfig={defaultGlobeConfig} />
            </div>
          </div>
        </div>

        

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button asChild variant="outline">
            <Link href="/library">Browse E-Library</Link>
          </Button>
        </div>

        {/* Chatbot Section */}
        <div className="mt-12 w-full max-w-md">
          <Chatbot />
        </div>
      </main>
    </div>
  );
}