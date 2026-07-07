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
    centre: [number, number]; 
    /**
     * Visual override in countries where true centre
     * does not produce an appropriate map view (e.g., Chile)
     */
    focusCentre?: [number, number]; 
    zoom: {
        desktop: number;
        mobile: number;
    };
    features: Feature[];
}

export interface SidebarProps {
    countryData: Record<string, any>;
    activeCountry: string;
    onCountrySelect: (key: string) => void;
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export interface MapCanvasProps {
    currentCountry: CountryData;
}

export interface FeaturePopupProps {
    feature: Feature;
}

