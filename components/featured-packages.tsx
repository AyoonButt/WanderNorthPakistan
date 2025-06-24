import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    id: "karakoram-explorer",
    title: "Karakoram Explorer",
    duration: "12 Days / 11 Nights",
    price: "From $1,899",
    type: "Adventure",
    typeColor: "bg-alpine-green",
    image: "/package-skardu-explorer_1750719722101.jpg",
    highlights: [
      "Skardu & K2 Base Camp trek",
      "Hunza Valley cultural immersion", 
      "Professional mountain guides",
      "Small group (max 8 people)"
    ]
  },
  {
    id: "northern-highlights",
    title: "Northern Highlights",
    duration: "8 Days / 7 Nights",
    price: "From $1,299",
    type: "Culture",
    typeColor: "bg-earth-brown",
    image: "/package-hunza-adventure_1750719729066.jpg",
    highlights: [
      "Hunza & Nagar valleys",
      "Traditional village homestays",
      "Local cuisine experiences",
      "Ancient fort explorations"
    ]
  },
  {
    id: "fairy-meadows-trek",
    title: "Fairy Meadows Trek",
    duration: "6 Days / 5 Nights", 
    price: "From $899",
    type: "Trekking",
    typeColor: "bg-sunrise-orange",
    image: "/package-fairy-meadows-trek_1750719710796.jpg",
    highlights: [
      "Nanga Parbat base camp",
      "Photography workshops",
      "Alpine meadow camping",
      "Stargazing sessions"
    ]
  }
];

export default function FeaturedPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="tours" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            Featured Experiences
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Carefully crafted journeys that showcase the best of Northern Pakistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-hover bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${pkg.typeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {pkg.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-medium-gray">{pkg.duration}</span>
                    <span className="font-semibold text-sunrise-orange">{pkg.price}</span>
                  </div>
                  <ul className="text-sm text-medium-gray space-y-1 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx}>• {highlight}</li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-mountain-blue hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(`/itinerary?package=${pkg.id}`, '_self')}
                  >
                    View Itinerary
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
