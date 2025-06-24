import { Shield, Star, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const indicators = [
  {
    id: "safety",
    title: "Safety First",
    description: "Licensed guides, vetted vehicles, 24/7 emergency line",
    icon: Shield
  },
  {
    id: "rating", 
    title: "5-Star Rated",
    description: "4.9/5 rating from 200+ verified reviews",
    icon: Star
  },
  {
    id: "sustainability",
    title: "Responsible Travel",
    description: "Certified sustainable tourism practices",
    icon: Globe
  }
];

export default function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-mountain-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">
            Your Safety & Satisfaction Matter
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Licensed, certified, and committed to responsible tourism
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <indicator.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-blue-100">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
