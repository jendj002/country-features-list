"use client"

import { countryData } from "@/data/features";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

export default function MapExplorer() {
    // default data view
    const defaultCountry = countryData.australia

    return (
        <div className="flex h-screen w-screen flex-col lg:flex-row bg-gray-100">
            {/* sidebar */}
            <aside className="w-full lg:w-80 bg-white p-6 shadow-md flex flex-col gap-4">
                <h1 className="text-xl font-bold text-gray-800">World Explorer</h1>
                <p className="text-sm text-gray-500">Select a destination to view its features.</p>
        
                {/* country buttons */}
                <div className="flex flex-col gap-2">
                    {Object.keys(countryData).map((key) => (
                        <button key={key} className="w-full text-left p-3 rounded bg-gray-50 hover:bg-blue-50 font-medium capitalize border border-gray-200">
                            {countryData[key].name}
                        </button>
                    ))}
                </div>
            </aside>

            {/* map component */}
            <main className="flex-1 bg-gray-200 flex items-center justify-center font-semibold text-gray-400">
                <MapContainer
                    className="h-full w-full"
                    center={defaultCountry.center}
                    zoom={defaultCountry.zoom}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* dynamic feature rendering */}
                    {defaultCountry.features.map((feature: any, index: number) => {
                        // feature spans multiple coordinates
                        if (feature.type === "path") {
                            return (
                                <Polyline
                                    key={index}
                                    positions={feature.coordinates}
                                    color="red"
                                    weight={4}
                                />
                            );
                        }

                        // feature is on one coordinate
                        return null;
                    })}
                </MapContainer>
            </main>
        </div> 
    );
}