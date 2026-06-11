"use client"

import dynamic from "next/dynamic";

// dynamic import
const DynamicExplorer = dynamic(() => import("../components/MapExplorer"), {
  ssr: false,
});

export default function Home() {
  return (
    <DynamicExplorer />
  );
}
