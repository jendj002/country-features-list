// embed video URL parser
export const getEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    try {
        // searchParams used for more reliable URL manipulation
        const videoId = new URL(url).searchParams.get("v");
        if (!videoId) return null
        
        return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
        console.error("Error parsing URL: ", error);
    }
    return null;
};