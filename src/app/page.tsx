"use client"

import dynamic from "next/dynamic";

// Components within MapExplorer use React-Leaflet, which results in errors during server-side rendering (SSR)
const DynamicExplorer = dynamic(() => import("../components/MapExplorer"), {
  ssr: false,
});

export default function Home() {
  return (
    <DynamicExplorer />
  );
}
