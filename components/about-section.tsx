import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Shield, Globe, Award, Mountain } from "lucide-react";

const values = [
  {
    id: "local-heartbeat",
    title: "Local Heartbeat",
    description: "80% of our team hails from Gilgit-Baltistan",
    icon: Heart,
    color: "bg-sunrise-orange/10 text-sunrise-orange"
  },
  {
    id: "safety-first",
    title: "Safety First", 
    description: "Licensed guides, vetted vehicles, 24/7 emergency line",
    icon: Shield,
    color: "bg-mountain-blue/10 text-mountain-blue"
  },
  {
    id: "small-groups",
    title: "Small Groups, Big Impact",
    description: "Max 12 guests; minimal environmental trace",
    icon: Users,
    color: "bg-alpine-green/10 text-alpine-green"
  },
  {
    id: "fair-trade",
    title: "Fair Trade Travel",
    description: "Fair wages, community-run lodges, scholarship fund for village schools",
    icon: Globe,
    color: "bg-earth-brown/10 text-earth-brown"
  },
  {
    id: "personalized",
    title: "Personalized Adventure",
    description: "Your pace, your passions; we fine-tune every detail",
    icon: Award,
    color: "bg-sunset-pink/10 text-sunset-pink"
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-8">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-medium-gray leading-relaxed mb-8">
              Born in the shadow of the Karakoram, our founders grew up guiding friends and family across 
              suspension bridges, apricot orchards and snowfields. In 2015, they turned that lifelong love 
              into Wander North Pakistan—a boutique agency devoted to sharing the North's grandeur responsibly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-mountain-blue/10 rounded-xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  <Mountain className="w-10 h-10 text-mountain-blue" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-2">Mission</h3>
                <p className="text-medium-gray">
                  To craft journeys that inspire, uplift local communities, and protect the landscapes we call home.
                </p>
              </div>
              <div>
                <div className="bg-alpine-green/10 rounded-xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-alpine-green" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-2">Vision</h3>
                <p className="text-medium-gray">
                  A future where travelers leave Northern Pakistan richer in spirit and lighter in footprint.
                </p>
              </div>
              <div>
                <div className="bg-sunrise-orange/10 rounded-xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-sunrise-orange" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-2">Impact</h3>
                <p className="text-medium-gray">
                  Supporting mountain communities through sustainable tourism and education initiatives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="font-poppins font-semibold text-2xl md:text-4xl text-charcoal mb-4">
            Our Values
          </h3>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto mb-12">
            Every journey is guided by principles that honor both our guests and our homeland
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-light-gray rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${value.color} flex-shrink-0`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-charcoal mb-3">
                    {value.title}
                  </h4>
                  <p className="text-medium-gray leading-relaxed">
                    {value.description}
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