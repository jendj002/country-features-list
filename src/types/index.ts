export interface Feature {
    id: string;
    name: string;
    description: string;
    type: "point" | "path";
    // NOTE: Leaflet requires coordinates in format: [latitude, longitude]
    coordinates: [number, number] | [number, number][];
    mediaType: "image" | "video";
    mediaUrl: string;
}

export interface CountryData {
    name: string;
    description: string;
    center: [number, number];
    zoom: number;
    features: Feature[];
}

export interface SidebarProps {
    countryData: Record<string, any>;
    activeCountry: string;
    onCountrySelect: (key: string) => void;
}

export interface MapCanvasProps {
    currentCountry: CountryData;
}

export interface FeaturePopupProps {
    feature: Feature;
}

