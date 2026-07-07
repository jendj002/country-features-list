import { SearchBarProps } from "@/types";

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="w-full h-10 pl-3 pr-10 rounded border border-gray-300 bg-white text-black text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {
                value && (
                    <button
                        onClick={() => onChange("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                        aria-label="Clear search"
                    />
            )}
      </div>  
    );
}