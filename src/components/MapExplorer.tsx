"use client"

import { useState, useEffect } from "react";
import { countryData } from "@/data/features";
import { MapContainer, TileLayer, Polyline, useMap, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Feature } from "@/types";

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom);
    }, [center, zoom, map]);

    return null;
}

export default function MapExplorer() {
    // default data view
    const [activeCountry, setActiveCountry] = useState<string>("australia");
    const currentCountry = countryData[activeCountry];

    // marker icon
    const markerIcon = L.icon({
        iconUrl: "/marker-icon.png",
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [-11, -62]
    });

    return (
        <div className="flex h-screen w-screen flex-col lg:flex-row bg-gray-100">
            {/* sidebar */}
            <aside className="w-full lg:w-80 bg-white p-6 shadow-md flex flex-col gap-4">
                <h1 className="text-xl font-bold text-gray-800">World Explorer</h1>
                <p className="text-sm text-gray-500">Select a destination to view its features.</p>

                {/* country buttons */}
                <div className="flex flex-col gap-2">
                    {Object.keys(countryData).map((key) => (
                        <button
                            className={`w-full text-left p-3 rounded font-medium capitalize border transition-all ${activeCountry === key
                                    ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                                    : "bg-gray-50 text-gray-800 hover:bg-blue-50 border-gray-200"
                                }`}
                            key={key}
                            onClick={() => setActiveCountry(key)}
                        >
                            {countryData[key].name}
                        </button>
                    ))}
                </div>
            </aside>

            {/* map component */}
            <main className="flex-1 bg-gray-200 flex items-center justify-center font-semibold text-gray-400">
                <MapContainer
                    className="h-full w-full"
                    center={currentCountry.center}
                    zoom={currentCountry.zoom}
                >

                    <MapController center={currentCountry.center} zoom={currentCountry.zoom} />

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* dynamic feature rendering */}
                    {currentCountry.features.map((feature: Feature) => {
                        // feature spans multiple coordinates
                        if (feature.type === "path") {
                            return (
                                <Polyline
                                    key={feature.id}
                                    positions={feature.coordinates as [number, number][]}
                                    color="red"
                                    weight={4}
                                    bubblingMouseEvents={false}
                                >
                                    <Popup>
                                        <div className="p-1 max-w-[220px]">
                                            <h3 className="font-bold text-gray-900 text-sm">{feature.name}</h3>
                                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </Popup>
                                </Polyline>
                            );
                        }
                        return null; // return null for features that are not of type "path" 
                    })}

                    {/* cluster markers within 50px of each other */}
                    <MarkerClusterGroup
                        chunkedLoading
                        maxclusterRadius={50}
                    >
                        {currentCountry.features.map((feature: Feature) => {
                            // feature is on one coordinate
                            if (feature.type === "point") {
                                return (
                                    <Marker
                                        key={feature.id}
                                        position={feature.coordinates as [number, number]}
                                        icon={markerIcon}
                                    >
                                        <Popup>
                                            <div className="p-1 max-w-[220px]">
                                                <h3 className="font-bold text-gray-900 text-sm">{feature.name}</h3>
                                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                );
                            }
                            return null; // return null for features that are not of type "point"
                        })}
                    </MarkerClusterGroup>
                </MapContainer>
            </main>
        </div>
    );
}