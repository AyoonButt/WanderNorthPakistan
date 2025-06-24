import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    id: "skardu",
    name: "Skardu",
    description: "Mirror-like lakes, ancient forts & the gateway to K2.",
    image: "/skardu_1750719757976.jpg"
  },
  {
    id: "hunza",
    name: "Hunza Valley",
    description: "Apricot blossoms, UNESCO-listed forts, and warm Wakhi hospitality.",
    image: "/hunza_1750719818130.jpg"
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows",
    description: "Alpine pastures under the 8,126 m face of Nanga Parbat.",
    image: "/fairy-meadows_1750719767263.jpg"
  },
  {
    id: "deosai",
    name: "Deosai Plains",
    description: "Wildflower-carpeted plateau at 4,000 m, home to Himalayan brown bears.",
    image: "/deosai_1750719780378.jpg"
  },
  {
    id: "khunjerab",
    name: "Khunjerab Pass",
    description: "Pakistan-China border at 15,400 ft—snow-topped even in July.",
    image: "/khunjerab_1750719797835.jpg"
  }
];

export default function DestinationsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="destinations" className="py-16 md:py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            Discover the Crown Jewels of the North
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Each destination offers its own magic, from ancient forts to wildflower meadows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
                <div 
                  className="relative h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-mountain-blue hover:text-sunrise-orange font-medium transition-colors duration-300 p-0 h-auto"
                    onClick={() => window.open(`/explore?destination=${destination.id}`, '_self')}
                  >
                    Explore →
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
