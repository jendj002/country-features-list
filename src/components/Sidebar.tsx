"use client"

import { SidebarProps } from "@/types";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Sidebar({ countryData, activeCountry, onCountrySelect }: SidebarProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCountries = Object.keys(countryData).filter((key) => {
        const country = countryData[key].name.toLowerCase();
        const searchTerms = searchQuery.toLowerCase().trim();
        return country.includes(searchTerms);
    });
    
    return (
        <aside className="w-full lg:w-80 bg-white p-6 shadow-md flex flex-col gap-4 max-h-[45vh] lg:max-h-screen overflow-hidden flex-shrink-0">
            <div>
                <h1 className="text-xl font-bold text-gray-800">World Explorer</h1>
                <p className="text-sm text-gray-500">Select a destination to view its features.</p>
            </div>

            <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for a country..."
            />

            <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((key) => (
                        <button
                            className={`w-full text-left p-3 rounded font-medium border transition-all ${
                                activeCountry === key
                                ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                                : "bg-gray-50 text-gray-800 hover:bg-blue-50 border-gray-200"
                                }`}
                            key={key}
                            onClick={() => onCountrySelect(key)}
                        >
                            {countryData[key].name}
                        </button>
                    ))
                ) : (
                    <p className="text-sm text-gray-400 text-center py-4">No countries found.</p>
                    )}
            </div>
        </aside>
    );
}