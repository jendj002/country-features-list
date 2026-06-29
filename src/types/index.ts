export interface Feature {
    id: string;
    name: string;
    description: string;
    type: "point" | "path";
    coordinates: [number, number] | [number, number][];
}