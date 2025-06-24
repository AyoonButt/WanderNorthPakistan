import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sunrise, Truck, Coffee, Camera } from "lucide-react";

const experiences = [
  {
    id: "sunset-tea",
    title: "Sunset tea at Eagle's Nest, Hunza",
    description: "Watch the sun set over the Hunza Valley while sipping traditional chai at one of the most spectacular viewpoints in the Karakoram.",
    icon: Sunrise,
    color: "bg-sunrise-orange/10 text-sunrise-orange"
  },
  {
    id: "jeep-crossing",
    title: "4×4 jeep crossing of Deosai's alpine rivers",
    description: "Experience the thrill of crossing glacier-fed streams in our rugged 4×4 vehicles while traversing the world's second-highest plateau.",
    icon: Truck,
    color: "bg-alpine-green/10 text-alpine-green"
  },
  {
    id: "yak-tea",
    title: "Yak-butter tea tasting with a Balti family",
    description: "Share traditional yak-butter tea and stories with local Balti families in their mountain homes, experiencing authentic highland hospitality.",
    icon: Coffee,
    color: "bg-mountain-blue/10 text-mountain-blue"
  },
  {
    id: "night-photography",
    title: "Night-sky photography workshop in Fairy Meadows",
    description: "Learn astrophotography techniques under some of the world's clearest skies, with Nanga Parbat as your dramatic backdrop.",
    icon: Camera,
    color: "bg-earth-brown/10 text-earth-brown"
  }
];

export default function SignatureExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 md:py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            Signature Moments
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Unforgettable experiences that define our Northern Pakistan adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${experience.color}`}>
                  <experience.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
