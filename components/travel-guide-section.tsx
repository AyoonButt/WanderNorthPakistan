import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Calendar, Thermometer, Backpack, Shield, Camera } from "lucide-react";

const guides = [
  {
    id: "planning-essentials",
    title: "Planning Essentials",
    description: "Everything you need to know before your Northern Pakistan adventure",
    icon: FileText,
    color: "bg-mountain-blue/10 text-mountain-blue",
    topics: ["Visa Requirements", "Best Time to Visit", "Health & Vaccinations", "Currency & Budget"]
  },
  {
    id: "packing-guide",
    title: "Packing Guide",
    description: "Essential gear for mountain adventures and cultural experiences",
    icon: Backpack,
    color: "bg-alpine-green/10 text-alpine-green",
    topics: ["Clothing Layers", "Technical Gear", "Photography Equipment", "Personal Items"]
  },
  {
    id: "weather-seasons",
    title: "Weather & Seasons",
    description: "Climate conditions and seasonal highlights across regions",
    icon: Thermometer,
    color: "bg-sunrise-orange/10 text-sunrise-orange",
    topics: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)"]
  },
  {
    id: "safety-prep",
    title: "Safety & Preparation",
    description: "Stay safe and prepared in mountain environments",
    icon: Shield,
    color: "bg-earth-brown/10 text-earth-brown",
    topics: ["Altitude Awareness", "Emergency Protocols", "Communication", "Insurance"]
  },
  {
    id: "photography-tips",
    title: "Photography Tips",
    description: "Capture the stunning landscapes like a professional",
    icon: Camera,
    color: "bg-sunset-pink/10 text-sunset-pink",
    topics: ["Golden Hour Shots", "Mountain Photography", "Cultural Sensitivity", "Equipment Care"]
  },
  {
    id: "cultural-guide",
    title: "Cultural Guide",
    description: "Respectful travel and local customs in Northern Pakistan",
    icon: Calendar,
    color: "bg-mountain-blue/10 text-mountain-blue",
    topics: ["Local Customs", "Religious Sites", "Language Basics", "Gift Giving"]
  }
];

export default function TravelGuideSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="guide" className="py-16 md:py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            Your Complete Travel Guide
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto mb-8">
            Expert insights and practical advice for an unforgettable Northern Pakistan adventure
          </p>
          <Button className="bg-sunrise-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Download Complete Guide (PDF)
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${guide.color} mr-4`}>
                      <guide.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-charcoal">
                      {guide.title}
                    </h3>
                  </div>
                  
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {guide.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-charcoal">
                        <div className="w-2 h-2 bg-mountain-blue rounded-full mr-3"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="text-mountain-blue hover:text-sunrise-orange font-medium transition-colors duration-300 p-0 h-auto"
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Blog Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-charcoal text-center mb-12">
            Featured Travel Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Fairy Meadows Trek Guide",
                excerpt: "Everything you need to know for the ultimate Nanga Parbat base camp experience",
                readTime: "8 min read",
                image: "/fairy-meadows_1750719767263.jpg"
              },
              {
                title: "Best Photography Spots in Hunza Valley",
                excerpt: "Capture the magic of apricot blossoms and ancient forts with expert tips",
                readTime: "6 min read",
                image: "/package-hunza-adventure_1750719729066.jpg"
              },
              {
                title: "Cultural Etiquette in Northern Pakistan",
                excerpt: "Respectful travel tips for meaningful connections with local communities",
                readTime: "5 min read",
                image: "/package-skardu-explorer_1750719722101.jpg"
              }
            ].map((article, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg text-charcoal mb-3">
                    {article.title}
                  </h4>
                  <p className="text-medium-gray text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-medium-gray">{article.readTime}</span>
                    <Button
                      variant="ghost"
                      className="text-mountain-blue hover:text-sunrise-orange font-medium transition-colors duration-300 p-0 h-auto text-sm"
                    >
                      Read Article →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}