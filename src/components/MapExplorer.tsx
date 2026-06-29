"use client"

import { useState, useEffect } from "react";
import { countryData } from "@/data/features";
import { MapContainer, TileLayer, Polyline, useMap, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Feature } from "@/types";

// custom map controller to handle flyTo on country change
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom);
    }, [center, zoom, map]);

    return null;
}

// embed video URL parser
const getEmbedUrl = (url: string): string | null => {
    try {
        const videoId = new URL(url).searchParams.get("v");
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
    } catch (error) {
        console.error("Error parsing URL: ", error);
    }
    return null;
};

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
                            const isVideo = feature.mediaType === "video";
                            const embedUrl = isVideo ? getEmbedUrl(feature.mediaUrl) : null;

                            return (
                                <Polyline
                                    key={feature.id}
                                    positions={feature.coordinates as [number, number][]}
                                    color="red"
                                    weight={4}
                                    bubblingMouseEvents={false}
                                >
                                    <Popup maxWidth={420} minWidth={280} className="responsive-map-popup">
                                        <div className="p-1 w-[80vw] sm:w-[340px] font-sans">
                                            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                                                {feature.name}
                                            </h3>
                                            <p className="text-xs text-gray-600 mt-1 leading-relaxed max-h-[80px] overflow-y-auto">
                                                {feature.description}
                                            </p>

                                            {feature.mediaUrl && (
                                                <div className="w-full aspect-video mt-2 rounded overflow-hidden bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center">
                                                    {isVideo ? (
                                                        embedUrl ? (
                                                            <iframe
                                                                className="w-full h-full border-none"
                                                                src={embedUrl}
                                                                title={feature.name}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        ) : (
                                                            <p className="text-xs text-gray-400 font-medium text-center px-4">
                                                                Invalid video URL
                                                            </p>
                                                        )
                                                    ) : (
                                                        <img
                                                            className="w-full h-full object-cover"
                                                            src={feature.mediaUrl}
                                                            alt={feature.name}
                                                        />
                                                    )}
                                                </div>
                                            )}
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
                                const isVideo = feature.mediaType === "video";
                                const embedUrl = isVideo ? getEmbedUrl(feature.mediaUrl) : null;

                                return (
                                    <Marker
                                        key={feature.id}
                                        position={feature.coordinates as [number, number]}
                                        icon={markerIcon}
                                    >
                                        <Popup maxWidth={420} minWidth={280} className="responsive-map-popup">
                                            <div className="p-1 w-[80vw] sm:w-[340px] font-sans">
                                                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                                                    {feature.name}
                                                </h3>
                                                <p className="text-xs text-gray-600 mt-1 leading-relaxed max-h-[80px] overflow-y-auto">
                                                    {feature.description}
                                                </p>

                                                {feature.mediaUrl && (
                                                    <div className="w-full aspect-video mt-2 rounded overflow-hidden bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center">
                                                        {isVideo ? (
                                                            embedUrl ? (
                                                                <iframe
                                                                    className="w-full h-full border-none"
                                                                    src={embedUrl}
                                                                    title={feature.name}
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen
                                                                />
                                                            ) : (
                                                                <p className="text-xs text-gray-400 font-medium text-center px-4">
                                                                    Invalid video URL
                                                                </p>
                                                            )
                                                        ) : (
                                                            <img
                                                                className="w-full h-full object-cover"
                                                                src={feature.mediaUrl}
                                                                alt={feature.name}
                                                            />
                                                        )}
                                                    </div>
                                                )}
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