import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, MapPin, Thermometer, Camera, Mountain, Users, Calendar, Star, Clock } from "lucide-react";

const destinations = {
  "skardu": {
    name: "Skardu",
    tagline: "Gateway to the Karakoram",
    description: "Skardu serves as the launching point for some of the world's most challenging and rewarding mountain adventures. This high-altitude desert town sits at 2,438 meters, surrounded by dramatic peaks and pristine lakes that mirror the sky.",
    image: "/skardu_1750719757976.jpg",
    elevation: "2,438m",
    bestTime: "April - October",
    temperature: "15°C - 25°C (Summer)",
    highlights: [
      "K2 Base Camp expeditions",
      "Shangrila Resort & Upper Kachura Lake",
      "Skardu Fort & ancient architecture",
      "Shigar Valley & Khaplu Palace",
      "Deosai Plains access point",
      "Traditional Balti culture"
    ],
    attractions: [
      {
        name: "Upper Kachura Lake",
        description: "Crystal-clear alpine lake surrounded by golden peaks",
        type: "Natural Wonder",
        visitTime: "2-3 hours"
      },
      {
        name: "Skardu Fort",
        description: "16th-century fortress with panoramic valley views",
        type: "Historical Site",
        visitTime: "1-2 hours"
      },
      {
        name: "Shigar Valley",
        description: "Apricot orchards and traditional Balti architecture",
        type: "Cultural Experience",
        visitTime: "Full day"
      },
      {
        name: "Khaplu Palace",
        description: "Restored 19th-century palace, now a luxury hotel",
        type: "Heritage Site",
        visitTime: "2-3 hours"
      }
    ],
    activities: [
      "K2 Base Camp trekking",
      "Lake boating and fishing",
      "Cultural village tours",
      "Mountain photography",
      "Traditional handicraft shopping",
      "Polo match viewing"
    ],
    localCuisine: [
      "Balti traditional bread",
      "Yak meat dishes",
      "Apricot-based desserts",
      "Butter tea",
      "Dried fruit varieties"
    ],
    travelTips: [
      "Acclimatize gradually to high altitude",
      "Carry warm clothing even in summer",
      "Book accommodations in advance during peak season",
      "Respect local customs and dress modestly",
      "Always travel with a local guide for remote areas"
    ],
    packages: [
      {
        name: "Karakoram Explorer",
        duration: "12 days",
        price: "$1,899",
        highlights: ["K2 Base Camp", "Cultural immersion", "Professional guides"]
      },
      {
        name: "Skardu Valley Discovery",
        duration: "5 days", 
        price: "$699",
        highlights: ["Lake tours", "Fort exploration", "Local experiences"]
      }
    ]
  },
  "hunza": {
    name: "Hunza Valley",
    tagline: "Land of Hospitality & Longevity",
    description: "Hunza Valley is renowned for its stunning mountain vistas, ancient forts, and the legendary longevity of its people. This pristine valley offers a perfect blend of natural beauty, rich culture, and warm Wakhi hospitality.",
    image: "/hunza_1750719818130.jpg",
    elevation: "2,438m",
    bestTime: "April - November",
    temperature: "10°C - 30°C (varies by season)",
    highlights: [
      "UNESCO World Heritage Baltit & Altit Forts",
      "Rakaposhi & Ultar Sar mountain views", 
      "Traditional Wakhi culture & hospitality",
      "Spring apricot blossom festivals",
      "Ancient Silk Road heritage",
      "Organic fruit orchards"
    ],
    attractions: [
      {
        name: "Baltit Fort",
        description: "700-year-old UNESCO World Heritage fortress",
        type: "Historical Site",
        visitTime: "2-3 hours"
      },
      {
        name: "Altit Fort",
        description: "Ancient royal residence with museum displays",
        type: "Cultural Heritage",
        visitTime: "1-2 hours"
      },
      {
        name: "Eagle's Nest Viewpoint",
        description: "Panoramic views of Hunza Valley and surrounding peaks",
        type: "Scenic Viewpoint",
        visitTime: "1 hour"
      },
      {
        name: "Passu Cones",
        description: "Dramatic pyramid-shaped peaks",
        type: "Natural Wonder",
        visitTime: "Half day"
      }
    ],
    activities: [
      "Fort exploration and museum visits",
      "Traditional village walks",
      "Apricot orchard tours",
      "Handicraft workshops",
      "Photography expeditions",
      "Cultural performances"
    ],
    localCuisine: [
      "Chapshoro (traditional meat pie)",
      "Hunza bread with walnut oil",
      "Fresh apricots and mulberries",
      "Traditional polo (rice dish)",
      "Hunza water (glacial spring water)"
    ],
    travelTips: [
      "Visit during apricot blossom season (March-April)",
      "Learn basic Wakhi greetings",
      "Try local organic produce",
      "Respect photography permissions at cultural sites",
      "Support local artisan communities"
    ],
    packages: [
      {
        name: "Northern Highlights",
        duration: "8 days",
        price: "$1,299",
        highlights: ["Cultural immersion", "Fort tours", "Village homestays"]
      },
      {
        name: "Hunza Cultural Experience",
        duration: "4 days",
        price: "$549",
        highlights: ["Traditional cooking", "Handicrafts", "Local festivals"]
      }
    ]
  },
  "fairy-meadows": {
    name: "Fairy Meadows",
    tagline: "Gateway to Nanga Parbat",
    description: "At 3,300 meters elevation, Fairy Meadows offers one of the most spectacular mountain views on Earth. This pristine alpine grassland provides an unobstructed view of Nanga Parbat, the world's 9th highest peak at 8,126 meters.",
    image: "/fairy-meadows_1750719767263.jpg",
    elevation: "3,300m",
    bestTime: "May - September",
    temperature: "5°C - 20°C (Summer)",
    highlights: [
      "Unobstructed Nanga Parbat views",
      "Alpine meadow camping",
      "Pristine mountain wilderness",
      "Professional photography opportunities",
      "Stargazing in clear skies",
      "Base camp trekking routes"
    ],
    attractions: [
      {
        name: "Nanga Parbat Base Camp",
        description: "Trek to the base of the 'Killer Mountain'",
        type: "Trekking Destination",
        visitTime: "Full day trek"
      },
      {
        name: "Fairy Meadows Viewpoint",
        description: "Prime viewing spot for Nanga Parbat",
        type: "Scenic Viewpoint",
        visitTime: "Ongoing"
      },
      {
        name: "Beyal Camp",
        description: "Higher altitude camp with closer mountain views",
        type: "Adventure Camping",
        visitTime: "Overnight trek"
      }
    ],
    activities: [
      "Mountain photography workshops",
      "Alpine meadow hiking",
      "Stargazing sessions",
      "Base camp trekking",
      "Nature meditation",
      "Camping experiences"
    ],
    localCuisine: [
      "High-altitude camping meals",
      "Local bread and dairy",
      "Mountain herbs and tea",
      "Dried fruits and nuts",
      "Traditional porridge"
    ],
    travelTips: [
      "Bring warm clothing for cold nights",
      "Acclimatize properly to altitude",
      "Pack light for the jeep ride",
      "Carry extra batteries for cameras",
      "Book camping equipment in advance"
    ],
    packages: [
      {
        name: "Fairy Meadows Trek",
        duration: "6 days",
        price: "$899",
        highlights: ["Base camp approach", "Photography workshops", "Alpine camping"]
      },
      {
        name: "Nanga Parbat Expedition",
        duration: "10 days",
        price: "$1,299",
        highlights: ["Extended trekking", "Multiple camps", "Professional guides"]
      }
    ]
  },
  "deosai": {
    name: "Deosai Plains",
    tagline: "Land of Giants & Wildflowers",
    description: "Known as the 'Land of Giants', Deosai is the second-highest plateau in the world at 4,000 meters. This vast alpine wilderness transforms into a carpet of wildflowers during summer and is home to the endangered Himalayan brown bear.",
    image: "/deosai_1750719780378.jpg",
    elevation: "4,000m",
    bestTime: "June - September",
    temperature: "0°C - 15°C (Summer)",
    highlights: [
      "World's second-highest plateau",
      "Himalayan brown bear habitat",
      "Summer wildflower blooms",
      "Sheosar Lake crystal waters",
      "Pristine wilderness camping",
      "Unique high-altitude ecosystem"
    ],
    attractions: [
      {
        name: "Sheosar Lake",
        description: "Turquoise lake surrounded by rolling hills",
        type: "Natural Wonder", 
        visitTime: "2-3 hours"
      },
      {
        name: "Deosai National Park",
        description: "Protected area for Himalayan brown bears",
        type: "Wildlife Reserve",
        visitTime: "Full day"
      },
      {
        name: "Bara Pani",
        description: "Scenic camping spot with mountain streams",
        type: "Camping Site",
        visitTime: "Overnight"
      }
    ],
    activities: [
      "Wildlife spotting (brown bears)",
      "Wildflower photography",
      "High-altitude camping",
      "Nature walks and hiking",
      "Lake-side picnicking",
      "Stargazing sessions"
    ],
    localCuisine: [
      "Camping meals and tea",
      "Local honey varieties",
      "Traditional dried meat",
      "High-energy trail snacks",
      "Hot soup and bread"
    ],
    travelTips: [
      "Visit during peak wildflower season (July-August)",
      "Bring altitude sickness medication",
      "Pack warm sleeping gear",
      "Respect wildlife and maintain distance",
      "Travel with experienced guides only"
    ],
    packages: [
      {
        name: "Deosai Wilderness Safari",
        duration: "3 days",
        price: "$449",
        highlights: ["Wildlife watching", "Camping", "Photography"]
      },
      {
        name: "Skardu-Deosai Circuit",
        duration: "7 days",
        price: "$999",
        highlights: ["Complete exploration", "Multiple camps", "Expert guides"]
      }
    ]
  },
  "khunjerab": {
    name: "Khunjerab Pass",
    tagline: "Roof of the World Border",
    description: "At 4,693 meters, Khunjerab Pass is one of the world's highest paved international border crossings, connecting Pakistan with China. This dramatic high-altitude landscape offers breathtaking views and a unique cultural experience.",
    image: "/khunjerab_1750719797835.jpg",
    elevation: "4,693m", 
    bestTime: "May - October",
    temperature: "-10°C - 10°C (varies greatly)",
    highlights: [
      "World's highest paved border crossing",
      "Pakistan-China Friendship Highway",
      "Dramatic high-altitude landscapes",
      "Khunjerab National Park wildlife",
      "Marco Polo sheep habitat",
      "International border experience"
    ],
    attractions: [
      {
        name: "Khunjerab Border Monument",
        description: "International border marker and gates",
        type: "Border Crossing",
        visitTime: "1-2 hours"
      },
      {
        name: "Khunjerab National Park",
        description: "High-altitude wildlife preserve",
        type: "National Park",
        visitTime: "Half day"
      },
      {
        name: "Sust Valley",
        description: "Border town with customs facilities",
        type: "Border Town",
        visitTime: "2-3 hours"
      }
    ],
    activities: [
      "Border crossing experience",
      "High-altitude photography",
      "Wildlife spotting (Marco Polo sheep)",
      "Cultural exchange with border communities",
      "Extreme altitude adventure",
      "International highway journey"
    ],
    localCuisine: [
      "Border town Chinese-Pakistani fusion",
      "High-altitude camping food",
      "Traditional Pakistani truck stop meals",
      "Hot tea and instant noodles",
      "Energy-rich mountain food"
    ],
    travelTips: [
      "Carry passport and proper documentation",
      "Check border opening times and seasons",
      "Prepare for extreme altitude effects",
      "Dress warmly even in summer",
      "Respect border security protocols"
    ],
    packages: [
      {
        name: "Khunjerab Border Adventure",
        duration: "2 days",
        price: "$299",
        highlights: ["Border experience", "High-altitude journey", "Cultural exchange"]
      },
      {
        name: "Karakoram Highway Complete",
        duration: "14 days",
        price: "$2,199",
        highlights: ["Full highway journey", "Multiple destinations", "Cultural immersion"]
      }
    ]
  }
};

export default function ExplorePage() {
  const destinationId = new URLSearchParams(window.location.search).get('destination');
  const destination = destinationId ? destinations[destinationId as keyof typeof destinations] : null;

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Destination Not Found</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                {destination.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6">
                {destination.tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Mountain className="w-4 h-4 mr-2" />
                  {destination.elevation}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Best: {destination.bestTime}
                </div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 mr-2" />
                  {destination.temperature}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <Button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 z-20"
          variant="outline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-poppins font-semibold text-2xl text-charcoal mb-4">
                    About {destination.name}
                  </h2>
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {destination.description}
                  </p>
                  
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                    Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-sunrise-orange mr-3" />
                        <span className="text-medium-gray">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Attractions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-poppins font-semibold text-2xl text-charcoal mb-6">
                    Top Attractions
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.attractions.map((attraction, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-poppins font-semibold text-lg text-charcoal">
                            {attraction.name}
                          </h3>
                          <Badge variant="outline">{attraction.type}</Badge>
                        </div>
                        <p className="text-medium-gray mb-3">{attraction.description}</p>
                        <div className="flex items-center text-sm text-mountain-blue">
                          <Clock className="w-4 h-4 mr-2" />
                          {attraction.visitTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Activities & Cuisine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                      Activities
                    </h3>
                    <ul className="space-y-2">
                      {destination.activities.map((activity, index) => (
                        <li key={index} className="text-medium-gray flex items-start">
                          <div className="w-2 h-2 bg-alpine-green rounded-full mr-3 mt-2" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                      Local Cuisine
                    </h3>
                    <ul className="space-y-2">
                      {destination.localCuisine.map((food, index) => (
                        <li key={index} className="text-medium-gray flex items-start">
                          <div className="w-2 h-2 bg-sunrise-orange rounded-full mr-3 mt-2" />
                          {food}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-poppins font-semibold text-2xl text-charcoal mb-6">
                    Travel Tips
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.travelTips.map((tip, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-mountain-blue rounded-full mr-3 mt-2" />
                        <span className="text-medium-gray">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                    Quick Facts
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mountain className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Elevation</p>
                        <p className="text-medium-gray">{destination.elevation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Best Time</p>
                        <p className="text-medium-gray">{destination.bestTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Thermometer className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Temperature</p>
                        <p className="text-medium-gray">{destination.temperature}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                    Featured Packages
                  </h3>
                  
                  <div className="space-y-4">
                    {destination.packages.map((pkg, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-poppins font-semibold text-charcoal mb-2">
                          {pkg.name}
                        </h4>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-medium-gray">{pkg.duration}</span>
                          <span className="font-semibold text-mountain-blue">{pkg.price}</span>
                        </div>
                        <div className="space-y-1 mb-3">
                          {pkg.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="text-sm text-medium-gray flex items-center">
                              <div className="w-1.5 h-1.5 bg-alpine-green rounded-full mr-2" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full"
                          onClick={() => window.open(`/itinerary?package=${pkg.name.toLowerCase().replace(/\s+/g, '-')}`, '_self')}
                        >
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                    Plan Your Visit
                  </h3>
                  <p className="text-medium-gray mb-4">
                    Ready to explore {destination.name}? Let our local experts help you plan the perfect adventure.
                  </p>
                  <Button className="w-full bg-mountain-blue hover:bg-blue-700 mb-2">
                    Get Custom Itinerary
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Expert
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}