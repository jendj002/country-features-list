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
        <aside className="w-full h-full bg-white p-5 short:p-3 shadow-md flex flex-col short:flex-row short:items-center gap-4 short:gap-3 overflow-hidden min-h-0">
            <div>
                <h1 className="text-xl short:text-base font-bold text-gray-800 leading-tight">World Explorer</h1>
                <p className="text-sm text-gray-500 short:hidden">Select a destination to view its features.</p>
            </div>

            <div className="short:w-1/3 flex-shrink-0">
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search for a country..."
                />
            </div>

            <div className="flex flex-col short:flex-row gap-2 flex-1 overflow-y-auto short:overflow-y-hidden short:overflow-x-auto pr-1 short:pb-1 min-h-0 custom-scrollbar">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((key) => (
                        <button
                            className={`w-full short:w-[120px] short:flex-shrink-0 text-left p-3 short:p-2 rounded font-medium border transition-all ${
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