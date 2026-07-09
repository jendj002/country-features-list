"use client"

import { useState } from "react";
import { countryData } from "@/data/countryData";
import Sidebar from "./Sidebar";
import MapCanvas from "./MapCanvas";

export default function MapExplorer() {
    const [activeCountry, setActiveCountry] = useState<string>("australia");
    const currentCountry = countryData[activeCountry];

    return (
        <div className="h-[100svh] w-screen overflow-hidden flex flex-col lg:flex-row bg-gray-100"> 
            <div className="w-full lg:w-80 h-[40svh] short:h-auto lg:h-full flex-shrink-0 flex flex-col min-0">
                <Sidebar
                    countryData={countryData}
                    activeCountry={activeCountry}
                    onCountrySelect={setActiveCountry}
                />
            </div>

            <main className="flex-1 h-[60svh] short:h-auto lg:h-full bg-gray-200 min-h-0 relative overflow-hidden">
                <MapCanvas currentCountry={currentCountry} />
            </main>
        </div>
    );
}