"use client"

import { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, useMap, Popup, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Feature } from "@/types";
import FeaturePopupContent from "./FeaturePopupContent";
import { markerIcon } from "@/utils/marker";
import { MapCanvasProps } from "@/types";

// Custom map controller to handle flyTo on country change
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom);
    }, [center, zoom, map]);

    return null;
}

export default function MapCanvas({ currentCountry }: MapCanvasProps) {
    return (
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