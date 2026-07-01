"use client"

import { useState } from "react";
import { countryData } from "@/data/countryData";
import Sidebar from "./Sidebar";
import MapCanvas from "./MapCanvas";

export default function MapExplorer() {
    const [activeCountry, setActiveCountry] = useState<string>("australia");
    const currentCountry = countryData[activeCountry];

    return (
        <div className="flex h-screen w-screen flex-col lg:flex-row bg-gray-100"> 
            <Sidebar
                countryData={countryData}
                activeCountry={activeCountry}
                onCountrySelect={setActiveCountry}
            />

            <main className="flex-1 bg-gray-200 flex items-center justify-center font-semibold text-gray-400">
                <MapCanvas currentCountry={currentCountry} />
            </main>
        </div>
    );
}