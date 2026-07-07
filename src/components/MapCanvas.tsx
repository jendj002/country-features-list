"use client"

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, useMap, Popup, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Feature } from "@/types";
import FeaturePopupContent from "./FeaturePopupContent";
import { markerIcon } from "@/utils/marker";
import { MapCanvasProps } from "@/types";

// Custom map controller to handle flyTo on country change
function MapController({ centre, zoom, recentreToggle }: { centre: [number, number]; zoom: number; recentreToggle: boolean }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(centre, zoom);
    }, [centre, zoom, map, recentreToggle]);

    return null;
}

export default function MapCanvas({ currentCountry }: MapCanvasProps) {
    const [recentreToggle, setRecentreToggle] = useState<boolean>(false);
    
    const isMobile = window.innerWidth <= 768; 

    const zoom = isMobile 
    ? currentCountry.zoom.mobile 
    : currentCountry.zoom.desktop;
    
    return (
        <MapContainer
            className="h-full w-full"
            center={currentCountry.centre}
            zoom={zoom}
        >
            <div className="leaflet-top leaflet-right p-4">
                <button
                    onClick={(e) => {
                        // prevent map click or drag handlers from triggering on button click
                        e.stopPropagation();
                        setRecentreToggle(prev => !prev);
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onDoubleClick={(e) => e.stopPropagation()}
                    className="bg-white text-gray-800 font-semibold px-4 py-2.5 rounded-lg shadow-md hover:bg-gray-50 border border-gray-200 transition-colors pointer-events-auto"
                >
                    Recentre
                </button>
            </div>

            <MapController 
                centre={currentCountry.focusCentre ?? currentCountry.centre} 
                zoom={zoom}
                recentreToggle={recentreToggle}
            />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {currentCountry.features.map((feature: Feature) => {
                if (feature.type === "path") {
                    return (
                        <Polyline
                            key={feature.id}
                            positions={feature.coordinates as [number, number][]}
                            color="red"
                            weight={4}
                            bubblingMouseEvents={false}
                        >
                            <Popup maxWidth={420} minWidth={280} className="responsive-map-popup">
                                <FeaturePopupContent feature={feature} />
                            </Popup>
                        </Polyline>
                    );
                }
                return null; 
            })}

            {/* Cluster markers to stop user from requiring to zoom manually */}
            <MarkerClusterGroup
                chunkedLoading
                maxclusterRadius={50}
            >
                {currentCountry.features.map((feature: Feature) => {
                    if (feature.type === "point") {
                        return (
                            <Marker
                                key={feature.id}
                                position={feature.coordinates as [number, number]}
                                icon={markerIcon}
                            >
                                <Popup maxWidth={420} minWidth={280} className="responsive-map-popup">
                                    <FeaturePopupContent feature={feature} />
                                </Popup>
                            </Marker>
                        );
                    }
                    return null;
                })}
            </MarkerClusterGroup>
        </MapContainer>
    );
}