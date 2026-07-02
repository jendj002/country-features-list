"use client"

import { SidebarProps } from "@/types";

export default function Sidebar({ countryData, activeCountry, onCountrySelect }: SidebarProps) {
    return (
        <aside className="w-full lg:w-80 bg-white p-6 shadow-md flex flex-col gap-4">
            <h1 className="text-xl font-bold text-gray-800">World Explorer</h1>
            <p className="text-sm text-gray-500">Select a destination to view its features.</p>

            <div className="flex flex-col gap-2">
                {Object.keys(countryData).map((key) => (
                    <button
                        className={`w-full text-left p-3 rounded font-medium capitalize border transition-all ${activeCountry === key
                            ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                            : "bg-gray-50 text-gray-800 hover:bg-blue-50 border-gray-200"
                            }`}
                        key={key}
                        onClick={() => onCountrySelect(key)}
                    >
                        {countryData[key].name}
                    </button>
                ))}
            </div>
        </aside>
    );
}