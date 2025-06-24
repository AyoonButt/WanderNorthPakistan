import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import lauraImage from "@assets/jake-nackos-IF9TK5Uy-KI-unsplash_1750723066377.jpg";

const testimonials = [
  {
    id: 1,
    quote: "I've trekked in Nepal and Patagonia, but nowhere felt as untouched—or as welcoming—as Northern Pakistan. Wander North's local touch made all the difference.",
    author: "Laura M.",
    country: "United States",
    image: lauraImage
  },
  {
    id: 2,
    quote: "The small group size made all the difference. Our guide knew every valley, every family, every story. It felt like traveling with a dear friend who happened to know all the best spots.",
    author: "James B.",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    quote: "From the moment we arrived to our departure, everything was perfectly organized. The accommodations were comfortable, the food was incredible, and the landscapes... simply breathtaking.",
    author: "Maria S.",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            What Fellow Travelers Say
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Real experiences from adventurers who've journeyed with us
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="bg-light-gray rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                  <CardContent className="space-y-6">
                    <Quote className="w-12 h-12 text-sunrise-orange mx-auto" />
                    <p className="text-lg md:text-xl text-charcoal italic leading-relaxed">
                      "{testimonials[activeSlide].quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonials[activeSlide].image}
                        alt={`${testimonials[activeSlide].author} testimonial`}
                        className="w-16 h-16 rounded-full mb-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-charcoal">
                          {testimonials[activeSlide].author}
                        </p>
                        <p className="text-medium-gray">
                          {testimonials[activeSlide].country}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full p-0 transition-colors duration-300 ${
                  activeSlide === index ? "bg-sunrise-orange" : "bg-medium-gray"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
