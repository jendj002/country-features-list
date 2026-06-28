export const countryData: Record<string, any> = {
    australia: {
        name: "Australia",
        description: "Country and continent with a diverse set of features",
        center: [-26.610000, 134.354722], // actual center is -25.610 but it blocks Tasmania on zoom 5
        zoom: 5,
        features: [
            {
                name: "The Great Barrier Reef",
                description: "The world's largest coral reef system",
                type: "path",
                coordinates: [
                    [-10.688, 142.532], // top left land coordinate
                    [-10.682, 145.001], // top right ocean coordinate
                    [-12.999, 145.001], // right boundary angle change coordinate #1
                    [-17.498, 147.001], // right boundary angle change coordinate #2
                    [-20.998, 152.918], // right boundary angle change coordinate #3
                    [-24.498, 154.001], // bottom right ocean coordinate
                    [-24.498, 152.041]  // bottom left land coordinate
                ]
            },
            {
                name: "Uluru (Ayers Rock)",
                description: "A massive sandstone monolith in the heart of the Northern Territory's arid 'Red Centre'",
                type: "point",
                coordinates: [-25.344, 131.036]
            },
            {
                name: "The Twelve Apostles",
                description: "A collection of limestone stacks off the shore of the Port Campbell National Park, by the Great Ocean Road in Victoria",
                type: "point",
                coordinates: [-38.662, 143.105]
            }, 
            {
                name: "The Daintree Rainforest",
                description: "The world's oldest tropical rainforest, home to an incredible diversity of flora and fauna",
                type: "point",
                coordinates: [-16.165, 145.418]
            },
            {
                name: "The Sydney Harbour Bridge",
                description: "An iconic steel arch bridge that spans Sydney Harbour, connecting the city's central business district with the North Shore",
                type: "point",
                coordinates: [-33.852, 151.211]
            },
            {
                name: "The Sydney Opera House",
                description: "A world-renowned performing arts center known for its distinctive sail-like design, located on Bennelong Point in Sydney Harbour",
                type: "point",
                coordinates: [-33.857, 151.215]
            }, 
            
        ]
    },

    chile: {
        name: "Chile",
        description: "A uniquely shaped country on South America's west coast",
        center: [-35.6751, -71.5430],
        zoom: 4,
        features: [
            {
                name: "The Andes Mountain Range",
                description: "The world's largest continental mountain range spanning 7 countries",
                type: "path",
                coordinates: [
                    [9.882, -69.270], // Start of Andes (Venezuela)
                    [2.929, -76.028], // Colombian peak
                    [-1.469, -78.817], // Ecuadorian peak
                    [-9.121, -77.675], // Peruvian peak
                    [-18.113, -68.883], // Bolivian peak
                    [-32.650, -69.975], // Andes peak (Argentina)
                    [-46.596, -73.345], // Chilean Patagonian peak
                    [-54.749, -69.480], // End of Andes (Chile)
                    [-54.807, -68.308] // Southern most terminus (Ushuaia, Argentina)
                ]
            }
        ]
    }
}