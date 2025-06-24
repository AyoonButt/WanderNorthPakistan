import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    id: "travelers",
    number: 2500,
    suffix: "+",
    label: "Happy Travelers",
    description: "Adventurers who've explored the North with us"
  },
  {
    id: "years",
    number: 9,
    suffix: "",
    label: "Years of Excellence",
    description: "Crafting authentic mountain experiences since 2015"
  },
  {
    id: "destinations",
    number: 25,
    suffix: "+",
    label: "Unique Destinations",
    description: "Hidden gems across Northern Pakistan"
  },
  {
    id: "rating",
    number: 4.9,
    suffix: "/5",
    label: "Guest Satisfaction",
    description: "Average rating from verified reviews"
  }
];

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {end === 4.9 ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-mountain-blue dark:to-blue-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6">
            Trusted by Adventurers Worldwide
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 dark:text-blue-100 max-w-3xl mx-auto font-medium">
            Our commitment to excellence is reflected in every journey we craft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="text-center bg-white/15 backdrop-blur-md rounded-xl p-8 hover:bg-white/25 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-poppins font-bold text-white mb-4 drop-shadow-lg">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4 drop-shadow-md">
                {stat.label}
              </h3>
              <p className="text-slate-200 dark:text-blue-100 text-base leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-200 dark:text-blue-100 mb-6">
            Ready to become part of our adventure community?
          </p>
          <button className="bg-sunrise-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Join Our Next Expedition
          </button>
        </motion.div>
      </div>
    </section>
  );
}