/**
 * @file countryData.ts
 * 
 * ARCHITECTURAL DECISION: Local static data storage
 * For this small and simple project, the country data is stored in a local file (countryData.ts). 
 * This decision was made to simplify the project and avoid unnecessary complexity or maintainence overhead. 
 * In a real-world application which is required to be scalable, flexible, and secure
 * It would be more appropriate to fetch this data from a backend service or database.
 */ 

/**
 * Shared across multiple countries. This variable is used in each country the Andes is in.
 */
const andesMountainRange = {
    name: "The Andes Mountain Range",
    description: "The Andes is the longest continental mountain range in the world, stretching along the western coast of South America. It passes through seven countries and is known for its stunning landscapes, diverse ecosystems, and rich cultural history.",
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
    ],
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/watch?v=G8ljsw51lMQ"
}


export const countryData: Record<string, any> = {
    afghanistan: {
        name: "Afghanistan",
        description: "A landlocked country in South Asia and Central Asia, known for its rich history and diverse landscapes",
        centre: [33.939, 67.710],
        zoom: {
            desktop: 6.9,
            mobile: 5.3
        },
        features: [
            {
                id: "afghanistan-bamiyan-buddhas",
                name: "The Buddhas of Bamiyan",
                description: "Two monumental statues of standing Buddhas carved into the side of a cliff in the Bamyan valley. They were destroyed by the Taliban in 2001, but their niches remain a UNESCO World Heritage Site.",
                type: "point",
                coordinates: [34.832, 67.827],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=UkP9QWvRqqg"
            },
            {
                id: "afghanistan-band-e-amir-national-park",
                name: "Band-e Amir National Park",
                description: "Afghanistan's first national park, known for its series of six deep blue lakes separated by natural dams made of travertine. It is a popular destination for tourists and nature enthusiasts.",
                type: "point",
                coordinates: [34.847, 67.221],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=WEjHJyU8pGo"
            },
            {
                id: "afghanistan-blue-mosque",
                name: "The Blue Mosque",
                description: "A stunning mosque in Mazar-i-Sharif, known for its intricate blue tile work and beautiful architecture. It is one of the most important religious sites in Afghanistan.",
                type: "point",
                coordinates: [36.709, 67.111],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=_j1xir8mvxk"
            },
            {
                id: "afghanistan-darul-aman-palace",
                name: "Darul Aman Palace",
                description: "A historic palace located in Kabul, built in the 1920s. It has been damaged and restored multiple times throughout history and is an important symbol of Afghanistan's history and resilience.",
                type: "point",
                coordinates: [34.465, 69.120],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=7BSpc5WB5jQ"
            },
            {
                id: "afghanistan-garden-of-babur",
                name: "The Garden of Babur",
                description: "A historic garden in Kabul, built by the Mughal emperor Babur in the 16th century. It is a peaceful oasis in the city and a popular spot for locals and tourists alike.",
                type: "point",
                coordinates: [34.503, 69.158],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=ZD47o7C0QuM"
            },
            {
                id: "afghanistan-herat-citadel",
                name: "The Citadel of Herat",
                description: "A historic fortress in the city of Herat, dating back to the 4th century BC. It has been rebuilt and renovated several times throughout history and is an important cultural and historical site.",
                type: "point",
                coordinates: [34.346, 62.188],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=i3Jgld_6a6w"
            },
            {
                id: "afghanistan-minaret-of-jam",
                name: "The Minaret of Jam",
                description: "A UNESCO World Heritage Site located in the remote Ghor Province. It is a 65-meter tall minaret built in the 12th century, known for its intricate brickwork and inscriptions.",
                type: "point",
                coordinates: [34.397, 64.516],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=rG9kVjMrrAk"
            }
        ]
    },

    albania: {
        name: "Albania",
        description: "A country in Southeastern Europe on the Balkan Peninsula, known for its rich history and diverse landscapes",
        centre: [41.153, 20.168],
        zoom: {
            desktop: 8.4,
            mobile: 7.4
        },
        features: [
            {
                id: "albania-apollonia",
                name: "Apollonia",
                description: "An ancient city and archaeological site in western Albania, known for its well-preserved ruins dating back to the Greek and Roman periods. It was an important cultural and economic center in antiquity.",
                type: "point",
                coordinates: [40.721, 19.471],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=t1gj4M0J2BU"
            },
            {
                id: "albania-berat",
                name: "Berat",
                description: "A historic city in central Albania, known for its well-preserved Ottoman architecture and its designation as a UNESCO World Heritage Site. It is often referred to as the 'town of a thousand windows' due to the numerous large windows on its hillside houses.",
                type: "point",
                coordinates: [40.704, 19.952],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=oBtkbmDtFuc"
            },
            {
                id: "albania-butrint",
                name: "Butrint",
                description: "An ancient city and archaeological site in southern Albania, known for its well-preserved ruins dating back to the Greek, Roman, Byzantine, and Venetian periods. It is a UNESCO World Heritage Site.",
                type: "point",
                coordinates: [39.744, 20.019],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=VzoacvOn5L0"
            },
            {
                id: "albania-castle-of-kruja-and-old-bazaar",
                name: "Castle of Kruja and Old Bazaar",
                description: "A historic castle and old bazaar located in the city of Kruja, known for its well-preserved Ottoman architecture and its designation as a UNESCO World Heritage Site.",
                type: "point",
                coordinates: [41.508, 19.795],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=bmhb3KmyByw"
            },
            {
                id: "albania-gjipe-beach",
                name: "Gjipe Beach",
                description: "A secluded beach located in southern Albania, known for its crystal-clear waters and stunning natural surroundings. It is accessible by boat or a hiking trail through the Gjipe Canyon.",
                type: "point",
                coordinates: [40.127, 19.670],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=5tzSC73UCfY"
            },
            {
                id: "albania-gjirokaster",
                name: "Gjirokastër",
                description: "A historic city in southern Albania, known for its well-preserved Ottoman architecture and its designation as a UNESCO World Heritage Site. It is often referred to as the 'city of stone' due to its distinctive stone houses and cobblestone streets.",
                type: "point",
                coordinates: [40.079, 20.138],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=z0Q9WrwxAFs"
            },
            {
                id: "albania-st-marys-monastery-zvernec",
                name: "St. Mary's Monastery (Zvernec)",
                description: "A historic monastery located on a small island in the Narta Lagoon, near the city of Vlorë. It is dedicated to St. Mary and is known for its beautiful architecture and serene surroundings.",
                type: "point",
                coordinates: [40.517, 19.402],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=MrJVsK92W4M"
            },
            {
                id: "albania-the-blue-eye-syri-i-kalter",
                name: "The Blue Eye",
                description: "A natural spring and water source located in the southern part of Albania, known for its deep blue colour and crystal-clear waters. It is a popular tourist attraction and a symbol of the country's natural beauty.",
                type: "point",
                coordinates: [39.924, 20.193],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=GTU52SYgcDE"
            },
            {
                id: "albania-the-roman-ruins-of-durres",
                name: "The Roman Ruins of Durrës",
                description: "An ancient city and archaeological site located in the coastal city of Durrës, known for its well-preserved Roman amphitheatre and other ruins dating back to the Roman period. It is one of the oldest cities in Albania.",
                type: "point",
                coordinates: [41.312, 19.444],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=k29H3GBjagw"
            },
            {
                id: "albania-theth-national-park",
                name: "Theth National Park",
                description: "A national park located in the northern part of Albania, known for its stunning natural landscapes, including mountains, waterfalls, and traditional villages. It is a popular destination for hiking and outdoor activities.",
                type: "point",
                coordinates: [42.394, 19.774],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=IVhwkH3VdWk"
            }
        ]
    },

    algeria: {
        name: "Algeria",
        description: "The largest country in Africa, known for its diverse landscapes and rich history",
        centre: [28.000, 2.999], 
        focusCentre: [28.500, 1.999], // improves visuals for northern and western Algeria
        zoom: {
            desktop: 6,
            mobile: 4.7
        },
        features: [
            {
                id: "algeria-annaba",
                name: "Annaba",
                description: "A coastal city in northeastern Algeria, known for its beautiful beaches and rich history. It is the fourth largest city in Algeria and an important industrial centre.",
                type: "point",
                coordinates: [36.898, 7.755],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=zdE75XF5CQ4"
            },
            {
                id: "algeria-constantine",
                name: "Constantine",
                description: "A city in northeastern Algeria, known for its dramatic cliffs and bridges spanning deep gorges. It is one of the oldest cities in the world, with a history dating back over 2,500 years.",
                type: "point",
                coordinates: [36.364, 6.608],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=ORJCBgMbbjE"
            },
            {
                id: "algeria-djémila",
                name: "Djémila",
                description: "An ancient Roman city in northeastern Algeria, known for its well-preserved ruins. It is a UNESCO World Heritage Site and features a forum, temples, basilicas, and triumphal arches.",
                type: "point",
                coordinates: [36.321, 5.737],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=zP-A_TrIFoc"
            },
            {
                id: "algeria-ghardaia-and-the-mzab-valley",
                name: "Ghardaïa and the M'zab Valley",
                description: "A UNESCO World Heritage Site located in the northern Sahara Desert, known for its unique architecture and traditional way of life. The M'zab Valley is home to the Ibadi Muslim community and features a series of fortified towns called ksars.",
                type: "point",
                coordinates: [32.491, 3.673],
                mediaType: "video",
                mediaUrl: "http://youtube.com/watch?v=gV9WHO1_MIY"
            },
            {
                id: "algeria-tassili-n-ajjer",
                name: "Tassili n'Ajjer",
                description: "A national park in southeastern Algeria, known for its unique rock formations and prehistoric rock art. It is a UNESCO World Heritage Site and home to a diverse range of flora and fauna.",
                type: "point",
                coordinates: [24.445, 8.998],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=HCIt6wVsIH4"

            },
            {
                id: "algeria-timgad",
                name: "Timgad",
                description: "A Roman colonial town in the Aurès Mountains of Algeria, founded by Emperor Trajan around 100 AD. It is known for its well-preserved ruins, including a triumphal arch, a theater, and a forum.",
                type: "point",
                coordinates: [35.484, 6.467],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=yv09o_dZv54"
            },
            {
                id: "algeria-tlemcen",
                name: "Tlemcen",
                description: "A city in northwestern Algeria, known for its rich history and cultural heritage. It was an important centre of Islamic learning and art during the medieval period.",
                type: "point",
                coordinates: [34.882, -1.317],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=tzmnCsWhQeU"
            }
        ]
    },

    andorra: {
        name: "Andorra",
        description: "A small, mountainous country in Southwestern Europe, known for its ski resorts and tax-free shopping",
        centre: [42.542, 1.598],
        zoom: {
            desktop: 12,
            mobile: 10.5
        },
        features: [
            {
                id: "andorra-mirador-roc-del-quer",
                name: "Mirador Roc del Quer",
                description: "A scenic viewpoint located in the parish of Canillo, offering panoramic views of the surrounding mountains and valleys.",
                type: "point",
                coordinates: [42.568, 1.589],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=2G406iroZDM"
            },
            {
                id: "andorra-pont-tibeta-canillo",
                name: "Pont Tibetà Canillo",
                description: "A suspension bridge located in the parish of Escaldes-Engordany, offering stunning views of the surrounding landscape.",
                type: "point",
                coordinates: [42.577, 1.611],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=RYdVhTmN-uY"
            },
            {
                id: "andorra-tristaina-sundial-balcony",
                name: "Tristaina Sundial Balcony",
                description: "A viewpoint available in the warmer months, located in the parish of Ordino, offering breathtaking views of the Tristaina lakes and the surrounding mountains.",
                type: "point",
                coordinates: [42.641, 1.477],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=AKHTt_DbsDI"
            }
        ]
    },

    angola: {
        name: "Angola",
        description: "A country in Southern Africa, known for its diverse landscapes and rich natural resources",
        centre: [-11.203, 17.873],
        focusCentre: [-11.800, 17.873], // improve visuals for southern Angola
        zoom: {
            desktop: 6.7,
            mobile: 5.5
        },
        features: [
            {
                id: "angola-calandula-falls",
                name: "Calandula Falls",
                description: "A series of cascading waterfalls located in the Calandula Valley, near the town of Calandula. The waterfalls are known for their stunning beauty.",
                type: "point",
                coordinates: [-9.074, 16.001],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=Gt3K_3KQlOM"
            },
            {
                id: "angola-memorial-dr-antonio-agostinho",
                name: "Memorial Dr. Antonio Agostinho",
                description: "A monolithic Brutalisk obelisk in Luanda, dedicated to Angola's first president.",
                type: "point",
                coordinates: [-8.824, 13.219],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=IrfKcAbqbCY"
            },
            {
                id: "angola-st-michael-fortress",
                name: "St. Michael Fortress",
                description: "The St. Michael Fortress is a massive fortress built in the 16th century by Portuguese explorers to protect the coast of Angola",
                type: "point",
                coordinates: [-8.808, 13.223],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=d1MA4RVZbcQ"
            },
            {
                id: "angola-tundavala-gap",
                name: "Tundavala Gap",
                description: "A 1000 metre deep fissure in the Serra da Leba mountains, near the city of Lubango. It offers sweeping views of the Angolan flatlands." ,
                type: "point",
                coordinates: [-14.818, 13.382],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=HARrsLymzeM"
            }
        ]
    },
    
    antiguaAndBarbuda: {
        name: "Antigua and Barbuda",
        description: "A small island nation in the Caribbean, known for its unique culture and natural beauty",
        centre: [17.061, -61.796],
        focusCentre: [17.361, -61.796], // improve visuals for Barbuda
        zoom: {
            desktop: 10.8,
            mobile: 9.7
        },
        features: [
            {
                id: "antigua-devils-bridge",
                name: "Devil's Bridge",
                description: "A natural limestone arch carved by thousands of years of crashing waves. It is surrounded by blowholes which shoot water high into the air.",
                type: "point",
                coordinates: [17.100, -61.679],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=CkPKUxWpGts"
            },
            {
                id: "antigua-nelsons-dockyard",
                name: "Nelson's Dockyard",
                description: "A fully restored 18th century naval base. It is the only Georgian-era dockyard still in continuous use. It is also a UNESCO World Heritage Site.",
                type: "point",
                coordinates: [17.061, -61.796],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=2G406iroZDM"
            },
            {
                id: "antigua-shirley-heights",
                name: "Shirley Heights",
                description: "A retired military lookout which has unmatched panoramic views of the English and Falmouth harbours.",
                type: "point",
                coordinates: [17.008, -61.764],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=362HztfEbdw"
            },
            {
                id: "barbuda-frigate-bird-sanctuary",
                name: "Frigate Bird Sanctuary",
                description: "A natural bird sanctuary on a remote lagoon in Barbuda houses one of the largest Frigate bird colonies in the world.",
                type: "point",
                coordinates: [17.697, -61.866],
                mediaType: "video", 
                mediaUrl: "https://www.youtube.com/watch?v=qOAXHpwvrZw"
            }
        ]
    },

    argentina: {
        name: "Argentina",
        description: "A country in South America, known for its diverse landscapes and rich cultural heritage",
        centre: [-38.426, -63.617],
        focusCentre: [-40.426, -63.617], 
        zoom: {
            desktop: 4.9,
            mobile: 4
        },
        features: [
            { id: "argentina-andes-mountain-range", ...andesMountainRange },
            {
                id: "argentina-cerro-fitz-roy",
                name: "Cerro Fitz Roy",
                description: "A prominent mountain in Patagonia at approximately 3,400 metres high which offers hiking and climbing routes with stunning views of the surrounding landscape.",
                type: "point",
                coordinates: [-49.272, -73.045],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=Zhs733sa4dY"
            },
            {
                id: "argentina-glacier-perito-moreno",
                name: "Glacier Perito Moreno",
                description: "A massive glacier located in the Andes Mountains of Argentina. It is one of the largest glaciers in the world and is known for its accessibility, stunning ice formations, and unique landscapes.",
                type: "point",
                coordinates: [-50.475, -73.049],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=sB8TtIbKp1U"
            },
            {
                id: "argentina-iguazu-falls",
                name: "Iguazu Falls",
                description: "One of the largest waterfall systems in the world located in Argentina's far north east in a subtropical rainforest on the border with Brazil. It has some of the most spectacular views in the world. Catwalks are available over the thunderous \"Devil's Throat\" (Garganta del Diablo).",
                type: "point",
                coordinates: [-25.696, -54.437],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=kY5G8s99Fl8"
            },
            {
                id: "argentina-jardin-japonés",
                name: "Jardin Japonés",
                description: "A beautiful Japanese zen garden located in the city of Buenos Aires. It is filled with Japanese landscaping, ponds, exhibits, and a plant nursery. It also has a sushi restaurant.",
                type: "point",
                coordinates: [-34.575, -58.410],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=fQP910kFUbE"
            },
            {
                id: "argentina-parque-nacional-tierra-del-fuego",
                name: "Parque Nacional Tierra del Fuego",
                description: "A national park located in the southernmost tip of Argentina near the city of Ushuaia, known for its unique landscapes and diverse wildlife.",
                type: "point",
                coordinates: [-53.834, -68.449],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=nO4LQcogOmw"
            },
            {
                id: "argentina-quebrada-de-humahuaca",
                name: "Quebrada de Humahuaca",
                description: "A breathtaking canyon famous for its pre-Columbian history and surreal multi-coloured rock layers of the \"Hill of Seven Colours.\" It is a designated UNESCO World Heritage Site.",
                type: "point",
                coordinates: [-23.100, -65.333],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=H9mJkdoYVPg"
            },
            {
                id: "argentina-recoleta",
                name: "Recoleta",
                description: "A strollable, affluent area of Buenos Aires known for Paris style townhouses, lavish former palaces, posh boutiques, cafes, and galleries. A main attraction is the cemetery where national icons such as Eva Perón rest in extravagant tombs. It also transforms into a street fair on weekends.",
                type: "point",
                coordinates: [-34.588, -58.398],
                mediaType: "video", 
                mediaUrl: "https://www.youtube.com/watch?v=ygKFTNGHgZM"
            },
            {
                id: "argentina-salinas-grandes",
                name: "Salinas Grandes",
                description: "An expansive, high-altitude salt flat located on the border between the Jujuy and Salta provinces. During the brief rainy season the flat turns into a reflective mirror of the sky.",
                type: "point",
                coordinates: [-23.724, -66.034],
                mediaType: "video", 
                mediaUrl: "https://www.youtube.com/watch?v=Ydw0LJ7AZYI"
            },
            {
                id: "argentina-teatro-colon",
                name: "Teatro Colon",
                description: "A historic theatre located in the city of Buenos Aires, Argentina. It is one of the best theatres in the world and is acknowledged for its acoustics and the artistic value of its construction.",
                type: "point",
                coordinates: [-34.601, -58.383],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=6omOB6m7tDM"
            }
        ]
    },

    armenia: {
        name: "Armenia",
        description: "A country in Eastern Europe, known for its diverse landscapes and rich cultural heritage",
        centre: [40.069, 45.038],
        zoom: {
            desktop: 8.7,
            mobile: 7.45
        },
        features: [
            {
                id: "armenia-garni-temple",
                name: "Garni Temple",
                description: "The only surviving Greco-Roman colonnaded building in Armenia, built by King Tiridates I in the 1st century AD. It is in close proximity to the stunning Garni Gorge.",
                type: "point",
                coordinates: [40.112, 44.730],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=KRA0TANbpYY"
            },
            {
                id: "jermuk-waterfall",
                name: "Jermuk Waterfall",
                description: "A waterfall located inside the town of Jermuk. It is a multi-tiered waterfall that drops into the Arpa River Gorge and looks like frozen basalt columns.",
                type: "point",
                coordinates: [39.836, 45.668],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=AWV0ZCWLMXo"
            },
            {
                id: "armenia-khor-virap",
                name: "Khor Virap",
                description: "A storied monastery and popular Christian pilgrimage site with an active church. Famous biblical location Mount Ararat can be seen in the distance among other spectacular views.",
                type: "point",
                coordinates: [39.878, 44.576],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=jdgQ-70dVEI"
            },
            {
                id: "armenia-noravank-monastery",
                name: "Noravank Monastery",
                description: "Located within a narrow, deep, rust coloured gorge, this 13th century monastery has a bi-level church showcasing medieval cantilever architecture.",
                type: "point",
                coordinates: [39.685, 45.233],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=fJf4XleHa0s"
            },
            {
                id: "armenia-tatev-monastery",
                name: "Tatev Monastery",
                description: "An ancient Apostolic monastery complex with 3 churches all on the edge of a massive, plunging gorge. It is accessible via the world's longest non-stop double-track cable car.",
                type: "point",
                coordinates: [39.378, 46.251],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=h_fIWJympa0"
            },
            {
                id: "armenia-yerevan-cascade",
                name: "Yerevan Cascade",
                description: "A stunning series of cascading stairs, landscaped gardens, fountains, and sculptures in the heart of the capital city of Armenia. It is also home to the Cafesjian Center for the Arts.",
                type: "point",
                coordinates: [40.189, 44.515],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=V1ChXuYa0os"
            },
            {
                id: "armenia-zvarnots-cathedral",
                name: "Zvarnots Cathedral",
                description: "The ruins of a 7th-century circular cathedral, this masterpiece of early medieval Armenian architecture is also a designated UNESCO World Heritage Site.",
                type: "point",
                coordinates: [40.160, 44.337],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=SFI1mNIFAT8"
            }
        ]
    },

    australia: {
        name: "Australia",
        description: "A vast country and continent in the Southern Hemisphere, known for its diverse landscapes and unique wildlife",
        centre: [-25.610, 134.355],
        focusCentre: [-26.610, 134.355], // improves visuals for Tasmania
        zoom: {
            desktop: 5,
            mobile: 3.65
        },
        features: [
            {
                id: "australia-coober-pedy",
                name: "Coober Pedy",
                description: "A small town in northern South Australia, known for its opal mining. The majority of the town is underground, with many residents living in dugouts to escape the extreme heat of the desert.",
                type: "point",
                coordinates: [-29.014, 134.754],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=ywBwXyF1UuI"
            },
            {
                id: "australia-daintree-rainforest",
                name: "The Daintree Rainforest",
                description: "A tropical rainforest located in Far North Queensland, known for its incredible biodiversity and ancient plant species. It is one of the oldest rainforests in the world and a UNESCO World Heritage Site.",
                type: "point",
                coordinates: [-16.170, 145.418],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=AELKvJ2jdMs"
            },
            {
                id: "australia-great-barrier-reef",
                name: "The Great Barrier Reef",
                description: "The world's largest coral reef system, located off the coast of Queensland. It is home to a diverse range of marine life and is a UNESCO World Heritage Site. The reef is under threat from climate change and human activity.",
                type: "path",
                coordinates: [
                    [-10.688, 142.532], // top left land coordinate
                    [-10.682, 145.001], // top right ocean coordinate
                    [-12.999, 145.001], // right boundary angle change coordinate #1
                    [-17.498, 147.001], // right boundary angle change coordinate #2
                    [-20.998, 152.918], // right boundary angle change coordinate #3
                    [-24.498, 154.001], // bottom right ocean coordinate
                    [-24.498, 152.041]  // bottom left land coordinate
                ],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=AR1cSKxxSmU"
            },
            {
                id: "australia-horizontal-falls",
                name: "The Horizontal Falls",
                description: "A natural phenomenon located in the Kimberley region of Western Australia. It is a series of narrow gorges in the McLarty Range, where tidal currents create a horizontal waterfall effect.",
                type: "point",
                coordinates: [-16.377, 123.960],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=abyC7BPSuBM"
            },
            {
                id: "australia-lake-eyre",
                name: "Lake Eyre",
                description: "Australia's largest lake & lowest point in the country, located in the deserts of South Australia. It is usually dry, leaving behind a vast salt flat, but occasionally fills with water after heavy rainfall, creating a unique and temporary outback ecosystem & oasis.",
                type: "point",
                coordinates: [-28.436, 137.284],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=twptAeaMDxQ"
            },
            {
                id: "australia-lake-hillier",
                name: "Lake Hillier",
                description: "A saline lake on Middle Island in Western Australia, known for its striking pink colour. The lake's unique hue is due to the presence of certain algae and bacteria.",
                type: "point",
                coordinates: [-34.094, 123.203],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=mogrxXpDUxk"

            },
            {
                id: "australia-lake-macdonnell",
                name: "Lake Macdonnell",
                description: "A salt lake located on the Eyre Peninsula in South Australia, known for its vibrant pink colour. The lake's unique hue is due to the presence of certain algae and bacteria.",
                type: "point",
                coordinates: [-32.049, 133.006],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=YWWFiD8S4aY"
            },
            {
                id: "australia-melbourne-cricket-ground",
                name: "The Melbourne Cricket Ground",
                description: "Affectionately known as the MCG, it is a sports stadium located in Yarra Park, Melbourne, Victoria. It is the largest stadium in the Southern Hempishere and the 10th largest stadium in the world, with a capacity of 100,024 spectators.",
                type: "point",
                coordinates: [-37.820, 144.983],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=HEGfGtk4zr8"
            },
            {
                id: "australia-royal-exhibition-building",
                name: "The Royal Exhibition Building",
                description: "A World Heritage-listed building in Melbourne, Victoria. It is one of the world's oldest remaining exhibition pavilions and is known for its grand architecture and historical significance.",
                type: "point",
                coordinates: [-37.805, 144.972],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=YYo_4Nf7rOw"
            },
            {
                id: "australia-sydney-harbour-bridge",
                name: "The Sydney Harbour Bridge",
                description: "An iconic steel arch bridge that spans Sydney Harbour, connecting the city's central business district with the North Shore. It is one of Australia's most well-known landmarks and a popular tourist attraction.",
                type: "point",
                coordinates: [-33.852, 151.211],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=ZdrHvmVjtWc"
            },
            {
                id: "australia-sydney-opera-house",
                name: "The Sydney Opera House",
                description: "A world-famous performing arts centre in Sydney, New South Wales, known for its distinctive sail-like design and its status as a UNESCO World Heritage Site",
                type: "point",
                coordinates: [-33.857, 151.215],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=50LJQz5bRFQ"
            }, 
            {
                id: "australia-twelve-apostles",
                name: "The Twelve Apostles",
                description: "A collection of limestone stacks off the shore of the Port Campbell National Park, by the Great Ocean Road in Victoria. They are a popular tourist attraction and are known for their dramatic appearance, especially at sunrise and sunset.",
                type: "point",
                coordinates: [-38.662, 143.105],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=4NyNH1KqFwc"
            },
            {
                id: "australia-uluru",
                name: "Uluru (Ayers Rock)",
                description: "A massive sandstone monolith in the heart of the Northern Territory's arid \"Red Centre\". It is sacred to the Anangu, the Aboriginal people of the area, and is known for its changing colors at different times of the day and year.",
                type: "point",
                coordinates: [-25.344, 131.037],
                mediaType: "video",
                mediaUrl: "https://www.youtube.com/watch?v=iGRfGO-SOLE"
            }
        ]
    },

    chile: {
        name: "Chile",
        description: "A uniquely shaped country on South America's west coast",
        centre: [-35.675, -71.543], 
        focusCentre: [-38.675, -71.543], // improves visuals for southern Chile
        zoom: {
            desktop: 4.7,
            mobile: 3.6
        },
        features: [
            { id: "chile-andes-mountain-range", ...andesMountainRange }
        ]
    }
}