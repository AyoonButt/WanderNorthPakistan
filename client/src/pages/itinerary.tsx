import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Users, Calendar, Camera, Mountain, Utensils } from "lucide-react";
import skarduExplorerImage from "@assets/package-skardu-explorer_1750719722101.jpg";
import hunzaAdventureImage from "@assets/package-hunza-adventure_1750719729066.jpg";
import fairyMeadowsTrekImage from "@assets/package-fairy-meadows-trek_1750719710796.jpg";

const itineraries = {
  "karakoram-explorer": {
    title: "Karakoram Explorer",
    duration: "12 Days / 11 Nights",
    price: "From $1,899",
    image: skarduExplorerImage,
    type: "Adventure",
    maxPeople: 8,
    difficulty: "Moderate to Challenging",
    bestTime: "May - October",
    overview: "Experience the heart of the Karakoram range with this comprehensive expedition through Skardu and the K2 region, combined with cultural immersion in Hunza Valley.",
    highlights: [
      "K2 Base Camp trek with professional guides",
      "Skardu lakes and Deosai Plains exploration", 
      "Hunza Valley cultural immersion",
      "Small group experience (max 8 people)",
      "Traditional Balti and Wakhi cuisine",
      "Photography workshops with experts"
    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description: "Airport pickup, hotel check-in, trip briefing and equipment check",
        activities: ["Airport transfer", "Welcome dinner", "Trip orientation"],
        accommodation: "4-star hotel in Islamabad"
      },
      {
        day: 2,
        title: "Islamabad to Skardu",
        description: "Scenic flight over the Karakoram range or drive via Karakoram Highway",
        activities: ["Mountain flight", "Skardu bazaar visit", "Local orientation"],
        accommodation: "Mountain lodge in Skardu"
      },
      {
        day: 3,
        title: "Skardu Valley Exploration",
        description: "Visit Shangrila Resort, Upper Kachura Lake, and Skardu Fort",
        activities: ["Lake boating", "Fort exploration", "Sunset photography"],
        accommodation: "Mountain lodge in Skardu"
      },
      {
        day: 4,
        title: "Journey to Askole",
        description: "Drive to Askole village, the gateway to K2",
        activities: ["Village tour", "Porter meeting", "Gear preparation"],
        accommodation: "Guesthouse in Askole"
      },
      {
        day: 5,
        title: "Trek to Jhola",
        description: "Begin the K2 trek with a walk along the Braldu River",
        activities: ["River crossing", "Glacier views", "Camp setup"],
        accommodation: "Camping at Jhola"
      },
      {
        day: 6,
        title: "Jhola to Paiju",
        description: "Trek through the spectacular Baltoro Glacier region",
        activities: ["Glacier walking", "Peak spotting", "Photography"],
        accommodation: "Camping at Paiju"
      },
      {
        day: 7,
        title: "Rest Day at Paiju",
        description: "Acclimatization day with short hikes and glacier exploration",
        activities: ["Glacier exploration", "Rock climbing", "Rest and recovery"],
        accommodation: "Camping at Paiju"
      },
      {
        day: 8,
        title: "Return to Skardu",
        description: "Trek back to Askole and drive to Skardu",
        activities: ["Valley photography", "Local village visits", "Cultural exchange"],
        accommodation: "Mountain lodge in Skardu"
      },
      {
        day: 9,
        title: "Skardu to Hunza",
        description: "Drive along the Karakoram Highway to Hunza Valley",
        activities: ["Highway photography", "Rakaposhi views", "Hunza arrival"],
        accommodation: "Heritage hotel in Karimabad"
      },
      {
        day: 10,
        title: "Hunza Valley Discovery",
        description: "Explore Baltit Fort, Altit Fort, and traditional villages",
        activities: ["Fort tours", "Apricot orchards", "Local crafts shopping"],
        accommodation: "Heritage hotel in Karimabad"
      },
      {
        day: 11,
        title: "Hunza Cultural Experience",
        description: "Village homestay experience with traditional music and dance",
        activities: ["Traditional cooking", "Folk performances", "Stargazing"],
        accommodation: "Village homestay"
      },
      {
        day: 12,
        title: "Return to Islamabad",
        description: "Drive back to Islamabad with stops at scenic viewpoints",
        activities: ["Scenic photography", "Souvenir shopping", "Departure transfer"],
        accommodation: "Day use hotel before departure"
      }
    ],
    included: [
      "All accommodation as specified",
      "All meals during the trek",
      "Professional English-speaking guide",
      "Porter services for trekking",
      "All transportation in Pakistan",
      "Domestic flights (weather permitting)",
      "Camping equipment",
      "Photography workshops"
    ],
    notIncluded: [
      "International flights",
      "Pakistan visa",
      "Personal trekking gear",
      "Travel insurance",
      "Tips for guides and porters",
      "Personal expenses"
    ]
  },
  "northern-highlights": {
    title: "Northern Highlights",
    duration: "8 Days / 7 Nights",
    price: "From $1,299",
    image: hunzaAdventureImage,
    type: "Culture",
    maxPeople: 12,
    difficulty: "Easy to Moderate",
    bestTime: "April - November",
    overview: "Discover the cultural treasures of Northern Pakistan with visits to ancient forts, traditional villages, and warm local hospitality.",
    highlights: [
      "UNESCO World Heritage fort explorations",
      "Traditional village homestays",
      "Local cuisine cooking classes",
      "Handicraft workshops with artisans",
      "Spectacular mountain photography",
      "Cultural performances and music"
    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description: "Welcome to Pakistan with airport pickup and city orientation",
        activities: ["Airport transfer", "City tour", "Welcome dinner"],
        accommodation: "4-star hotel in Islamabad"
      },
      {
        day: 2,
        title: "Islamabad to Hunza",
        description: "Scenic drive along the famous Karakoram Highway",
        activities: ["Highway journey", "Rakaposhi viewpoint", "Hunza arrival"],
        accommodation: "Mountain hotel in Karimabad"
      },
      {
        day: 3,
        title: "Hunza Valley Exploration",
        description: "Visit ancient forts and explore traditional architecture",
        activities: ["Baltit Fort tour", "Altit Fort visit", "Village walks"],
        accommodation: "Mountain hotel in Karimabad"
      },
      {
        day: 4,
        title: "Cultural Immersion Day",
        description: "Experience local life with homestay families",
        activities: ["Traditional cooking class", "Handicraft workshop", "Folk music"],
        accommodation: "Village homestay"
      },
      {
        day: 5,
        title: "Nagar Valley Discovery",
        description: "Explore the neighboring Nagar valley and its unique culture",
        activities: ["Hopar Glacier visit", "Traditional polo match", "Local markets"],
        accommodation: "Guesthouse in Nagar"
      },
      {
        day: 6,
        title: "Gilgit Exploration",
        description: "Visit the regional capital and its historical sites",
        activities: ["Gilgit Bazaar", "Kargah Buddha", "Local museums"],
        accommodation: "Hotel in Gilgit"
      },
      {
        day: 7,
        title: "Return Journey",
        description: "Drive back towards Islamabad with scenic stops",
        activities: ["Photography stops", "Souvenir shopping", "Cultural reflection"],
        accommodation: "4-star hotel in Islamabad"
      },
      {
        day: 8,
        title: "Departure",
        description: "Final breakfast and departure transfers",
        activities: ["Last-minute shopping", "Airport transfer"],
        accommodation: "Day use until departure"
      }
    ],
    included: [
      "All accommodation as specified",
      "All meals during the tour",
      "Professional cultural guide",
      "All ground transportation",
      "Cooking classes and workshops",
      "Cultural performance tickets",
      "Homestay experiences"
    ],
    notIncluded: [
      "International flights",
      "Pakistan visa",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides",
      "Optional activities"
    ]
  },
  "fairy-meadows-trek": {
    title: "Fairy Meadows Trek",
    duration: "6 Days / 5 Nights",
    price: "From $899",
    image: fairyMeadowsTrekImage,
    type: "Trekking",
    maxPeople: 10,
    difficulty: "Moderate",
    bestTime: "May - September",
    overview: "Trek to the base of Nanga Parbat, the world's 9th highest peak, through pristine alpine meadows and spectacular mountain scenery.",
    highlights: [
      "Nanga Parbat base camp approach",
      "Alpine meadow camping experience",
      "Professional photography workshops",
      "Stargazing in pristine skies",
      "Traditional mountain village visits",
      "Glacier and peak photography"
    ],
    dailyItinerary: [
      {
        day: 1,
        title: "Islamabad to Chilas",
        description: "Drive along the Karakoram Highway to Chilas",
        activities: ["Highway photography", "River views", "Mountain panoramas"],
        accommodation: "Hotel in Chilas"
      },
      {
        day: 2,
        title: "Chilas to Raikot Bridge to Fairy Meadows",
        description: "Jeep ride to Raikot Bridge, then trek to Fairy Meadows",
        activities: ["Jeep adventure", "Forest trekking", "Meadow arrival"],
        accommodation: "Camping at Fairy Meadows"
      },
      {
        day: 3,
        title: "Fairy Meadows Exploration",
        description: "Full day exploring the meadows with Nanga Parbat views",
        activities: ["Photography workshop", "Nature walks", "Sunset viewing"],
        accommodation: "Camping at Fairy Meadows"
      },
      {
        day: 4,
        title: "Trek to Nanga Parbat Base Camp",
        description: "Day trek to the base camp with spectacular mountain views",
        activities: ["Base camp trek", "Glacier views", "Peak photography"],
        accommodation: "Camping at Fairy Meadows"
      },
      {
        day: 5,
        title: "Return to Chilas",
        description: "Trek back to Raikot Bridge and drive to Chilas",
        activities: ["Final mountain views", "Valley photography", "Reflection time"],
        accommodation: "Hotel in Chilas"
      },
      {
        day: 6,
        title: "Return to Islamabad",
        description: "Drive back to Islamabad with scenic stops",
        activities: ["Photography stops", "Souvenir shopping", "Trip completion"],
        accommodation: "Day use hotel before departure"
      }
    ],
    included: [
      "All accommodation as specified",
      "All meals during trek",
      "Professional trekking guide",
      "Porter services",
      "Camping equipment",
      "Photography workshops",
      "All transportation"
    ],
    notIncluded: [
      "International flights",
      "Pakistan visa",
      "Personal trekking gear",
      "Travel insurance",
      "Tips for guides and porters",
      "Personal expenses"
    ]
  }
};

export default function ItineraryPage() {
  const [location] = useLocation();
  const packageId = new URLSearchParams(location.split('?')[1] || '').get('package');
  const itinerary = packageId ? itineraries[packageId as keyof typeof itineraries] : null;

  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Itinerary Not Found</h1>
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
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${itinerary.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className={`mb-4 ${itinerary.type === 'Adventure' ? 'bg-alpine-green' : itinerary.type === 'Culture' ? 'bg-earth-brown' : 'bg-sunrise-orange'}`}>
                {itinerary.type}
              </Badge>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                {itinerary.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                {itinerary.duration} • {itinerary.price}
              </p>
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
                    Overview
                  </h2>
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {itinerary.overview}
                  </p>
                  
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                    Trip Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {itinerary.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-mountain-blue rounded-full mr-3" />
                        <span className="text-medium-gray">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Daily Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-poppins font-semibold text-2xl text-charcoal mb-6">
                    Daily Itinerary
                  </h2>
                  
                  <div className="space-y-6">
                    {itinerary.dailyItinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-mountain-blue pl-6 pb-6">
                        <div className="flex items-center mb-3">
                          <div className="bg-mountain-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 -ml-10">
                            {day.day}
                          </div>
                          <h3 className="font-poppins font-semibold text-lg text-charcoal">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                        
                        <p className="text-medium-gray mb-4">
                          {day.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-medium text-charcoal mb-2">Activities:</h4>
                            <ul className="space-y-1">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="text-medium-gray flex items-center">
                                  <div className="w-1.5 h-1.5 bg-sunrise-orange rounded-full mr-2" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-charcoal mb-2 flex items-center">
                              <Mountain className="w-4 h-4 mr-1" />
                              Accommodation:
                            </h4>
                            <p className="text-medium-gray">{day.accommodation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {itinerary.included.map((item, index) => (
                        <li key={index} className="text-medium-gray flex items-start">
                          <div className="w-2 h-2 bg-alpine-green rounded-full mr-3 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-charcoal mb-4">
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      {itinerary.notIncluded.map((item, index) => (
                        <li key={index} className="text-medium-gray flex items-start">
                          <div className="w-2 h-2 bg-earth-brown rounded-full mr-3 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                    Trip Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Duration</p>
                        <p className="text-medium-gray">{itinerary.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Group Size</p>
                        <p className="text-medium-gray">Max {itinerary.maxPeople} people</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mountain className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Difficulty</p>
                        <p className="text-medium-gray">{itinerary.difficulty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-mountain-blue mr-3" />
                      <div>
                        <p className="font-medium text-charcoal">Best Time</p>
                        <p className="text-medium-gray">{itinerary.bestTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="font-poppins font-semibold text-2xl text-charcoal mb-4">
                      {itinerary.price}
                    </p>
                    <Button className="w-full bg-mountain-blue hover:bg-blue-700">
                      Book This Trip
                    </Button>
                    <Button variant="outline" className="w-full mt-2">
                      Get Custom Quote
                    </Button>
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
                    Need Help?
                  </h3>
                  <p className="text-medium-gray mb-4">
                    Have questions about this itinerary? Our travel experts are here to help.
                  </p>
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