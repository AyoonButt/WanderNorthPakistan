import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useToast } from "../hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    travel_dates: "",
    destinations: [] as string[],
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const destinations = [
    { id: "skardu", label: "Skardu" },
    { id: "hunza", label: "Hunza" },
    { id: "fairy_meadows", label: "Fairy Meadows" },
    { id: "deosai", label: "Deosai Plains" },
    { id: "khunjerab", label: "Khunjerab Pass" },
    { id: "all", label: "All Regions" }
  ];

  const handleDestinationChange = (destinationId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      destinations: checked 
        ? [...prev.destinations, destinationId]
        : prev.destinations.filter(d => d !== destinationId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your interest. We'll get back to you within 4 hours.",
        });
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          travel_dates: "",
          destinations: [],
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-charcoal mb-4">
            Start Your Adventure
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            Tell us about your dream journey and we'll craft the perfect Northern Pakistan experience for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-light-gray rounded-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mountain-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mountain-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="whatsapp" className="block text-sm font-medium text-charcoal mb-2">
                        WhatsApp Number
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mountain-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="travel_dates" className="block text-sm font-medium text-charcoal mb-2">
                        Preferred Travel Dates
                      </Label>
                      <Input
                        id="travel_dates"
                        type="text"
                        placeholder="e.g., May 2024"
                        value={formData.travel_dates}
                        onChange={(e) => setFormData(prev => ({ ...prev, travel_dates: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mountain-blue focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-charcoal mb-3">
                      Destinations of Interest
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {destinations.map((destination) => (
                        <div key={destination.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={destination.id}
                            checked={formData.destinations.includes(destination.id)}
                            onCheckedChange={(checked) => 
                              handleDestinationChange(destination.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={destination.id} className="text-sm text-charcoal">
                            {destination.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Tell us about your dream trip
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="What type of experience are you looking for? Any specific interests or requirements?"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mountain-blue focus:border-transparent transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sunrise-orange hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? "Sending..." : "Start My Adventure"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-charcoal mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-mountain-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-mountain-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <p className="text-medium-gray">+92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-alpine-green/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-alpine-green" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-medium-gray">hello@wandernorthpakistan.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sunrise-orange/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-sunrise-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Office</p>
                    <p className="text-medium-gray">Gilgit, Northern Areas<br />Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-mountain-blue dark:to-blue-700 rounded-xl text-white">
              <CardContent className="p-8">
                <h4 className="font-poppins font-semibold text-xl mb-4">Ready to Explore?</h4>
                <p className="mb-6 text-slate-200 dark:text-blue-100">
                  Our local experts are standing by to help plan your perfect Northern Pakistan adventure.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-slate-200 dark:text-blue-100">📞 Call us: 9 AM - 6 PM PKT</p>
                  <p className="text-sm text-slate-200 dark:text-blue-100">💬 WhatsApp: 24/7 Quick Response</p>
                  <p className="text-sm text-slate-200 dark:text-blue-100">📧 Email: Response within 4 hours</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
