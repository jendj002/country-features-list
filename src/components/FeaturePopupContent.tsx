import { FeaturePopupProps } from "@/types";
import { formatForUrl } from "@/utils/stringUtils";
import { getEmbedUrl } from "@/utils/youtube";

export default function FeaturePopupContent({ feature }: FeaturePopupProps) {
    const isVideo = feature.mediaType === "video";
    const embedUrl = isVideo ? getEmbedUrl(feature.mediaUrl) : null;
    const featureUrl = formatForUrl(feature.name);

    return (
        <div className="p-1 w-[80vw] sm:w-[340px] font-sans">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                {feature.name}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed max-h-[60px] sm:max-h-[80px] overflow-y-auto pr-1">
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
            <a 
                href={`https://www.tripadvisor.com/Search?q=${featureUrl}`} 
                className="block text-center text-blue-500 hover:underline text-sm mt-2" 
                target="_blank" 
                rel="noopener noreferrer">
                Tripadvisor
            </a>
        </div>
    );
}