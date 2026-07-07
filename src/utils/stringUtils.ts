export const formatForUrl = (text: string): string => {
    return text.trim().replace(/\s+/g, '+')
}