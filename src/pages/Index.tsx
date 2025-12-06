import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import About from "@/components/About";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import HowItWorks from "@/components/HowItWorks";
import AMCPlans from "@/components/AMCPlans";
import GalleryTestimonials from "@/components/GalleryTestimonials";
import MultiStepBookingForm from "@/components/MultiStepBookingForm";
const Index = () => {
  // Scroll to top on page load to ensure Home section is visible
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Enhanced animation variants
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 40
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-50px"
    },
    transition: {
      duration: 0.7
    }
  };
  const fadeInScale = {
    initial: {
      opacity: 0,
      scale: 0.9
    },
    whileInView: {
      opacity: 1,
      scale: 1
    },
    viewport: {
      once: true,
      margin: "-50px"
    },
    transition: {
      duration: 0.6
    }
  };
  const fadeInLeft = {
    initial: {
      opacity: 0,
      x: -40
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true,
      margin: "-50px"
    },
    transition: {
      duration: 0.7
    }
  };
  const fadeInRight = {
    initial: {
      opacity: 0,
      x: 40
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
      once: true,
      margin: "-50px"
    },
    transition: {
      duration: 0.7
    }
  };
  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    },
    viewport: {
      once: true,
      margin: "-50px"
    }
  };
  const staggerFast = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    },
    viewport: {
      once: true,
      margin: "-50px"
    }
  };
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };
  const handleServiceClick = (serviceName: string) => {
    const message = `Hi Comfort Technical Services! I'm interested in ${serviceName}. Could you please provide more details about pricing and availability?`;
    window.open(createWhatsAppLink(message), '_blank');
  };
  return <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <Services />

      {/* Service Details Section */}
      <ServiceDetails />

      {/* How It Works Section */}
      <HowItWorks />

      {/* AMC Plans Section */}
      <AMCPlans />

      {/* Gallery + Testimonials + Stats Section */}
      <GalleryTestimonials />

      {/* About Section */}
      <About />

      {/* Service Area + Booking Section - Side by Side */}
      <section className="py-5 md:py-16 bg-background">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid lg:grid-cols-2 gap-2 md:gap-6 max-w-7xl mx-auto">
            {/* Service Coverage Area */}
            <motion.div {...fadeInLeft}>
              <Card className="p-3 md:p-6 h-full border-2">
                <div className="mb-3 md:mb-6">
                  <h2 className="text-base md:text-3xl font-bold mb-1 md:mb-2 text-foreground">
                    Service Coverage Area
                  </h2>
                  <p className="text-xs md:text-base text-muted-foreground">
                    We serve all major areas in Pune & PCMC
                  </p>
                </div>
                
                <Card className="p-2 md:p-4 bg-muted border-border mb-2 md:mb-4">
                  <h3 className="text-sm md:text-xl font-bold mb-1.5 md:mb-3 text-foreground flex items-center gap-1 md:gap-2">
                    <MapPin className="w-3 h-3 md:w-5 md:h-5 text-primary" />
                    Areas We Cover
                  </h3>
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    {["Aundh", "Wakad", "Hinjewadi", "Pimple Saudagar", "Pimpri", "Chinchwad", "Kharadi", "Viman Nagar", "Baner", "Pimple Nilakh", "Rahatani", "Thergaon", "Kasarwadi", "Akurdi", "Nigdi", "Bhosari"].map((area, i) => <motion.div key={i} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: i * 0.03
                  }} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-primary">
                          {area}
                        </span>
                      </motion.div>)}
                  </div>
                </Card>
              </Card>
            </motion.div>

            {/* Book Your Service */}
            <motion.div {...fadeInRight}>
              <Card className="p-3 md:p-6 h-full border-2 bg-gradient-to-br from-primary/5 via-background to-primary/5">
                <div className="mb-3 md:mb-6">
                  <h2 className="text-base md:text-3xl font-bold mb-1 md:mb-2 text-foreground">
                    Book Your Service
                  </h2>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Quick and easy booking - we'll contact you shortly
                  </p>
                </div>
                <MultiStepBookingForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-foreground text-background py-5 md:py-20">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-12 mb-4 md:mb-10">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <img src={logo} alt="CTS Logo" className="w-12 h-12 md:w-24 md:h-24 object-contain opacity-90 mb-2 md:mb-5" />
              <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4 opacity-95">Comfort Technical Services</h3>
              <p className="text-xs md:text-base opacity-80 leading-relaxed mb-2 md:mb-5">
                Professional AC servicing, repair, and maintenance since 2018. Serving Pune and PCMC with excellence for over 7 years.
              </p>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm opacity-75">
                <Shield className="w-3 h-3 md:w-5 md:h-5" />
                <span>GSTIN: 27HEKPS5234F1Z4</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm md:text-xl font-bold mb-2 md:mb-5 opacity-95">Quick Links</h4>
              <ul className="space-y-1.5 md:space-y-3 text-xs md:text-base opacity-80">
                <li><a href="#home" className="hover:opacity-100 hover:text-primary transition-all">Home</a></li>
                <li><a href="#services" className="hover:opacity-100 hover:text-primary transition-all">Services</a></li>
                <li><a href="#amc" className="hover:opacity-100 hover:text-primary transition-all">AMC Plans</a></li>
                <li><a href="#about" className="hover:opacity-100 hover:text-primary transition-all">About</a></li>
                <li><a href="#gallery" className="hover:opacity-100 hover:text-primary transition-all">Gallery</a></li>
                <li><a href="#contact" className="hover:opacity-100 hover:text-primary transition-all">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-sm md:text-xl font-bold mb-2 md:mb-5 opacity-95">Contact Us</h4>
              <div className="space-y-2 md:space-y-4 text-xs md:text-base opacity-80">
                <div className="flex items-start gap-1 md:gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5 text-primary" />
                  <p className="leading-relaxed">
                    NIKHIL NIWAS, SURVEY NO.179,<br />
                    SHOP NO-02, Pune, PCMC,<br />
                    Maharashtra 411035
                  </p>
                </div>
                
                <div className="flex items-center gap-1 md:gap-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-primary" />
                  <div className="space-y-0.5 md:space-y-1">
                    <a href="tel:+917745046520" className="block hover:opacity-100 hover:text-primary transition-all">
                      +91 77450 46520
                    </a>
                    <a href="tel:+918208346628" className="block hover:opacity-100 hover:text-primary transition-all">
                      +91 82083 46628
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 md:gap-2">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-primary" />
                  <a href="mailto:comforttechnicalservice8@gmail.com" className="hover:opacity-100 hover:text-primary transition-all break-all">
                    comforttechnicalservice8@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-primary" />
                  <div>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <h4 className="text-sm md:text-xl font-bold mb-2 md:mb-5 opacity-95">Find Us</h4>
              <div className="rounded-xl overflow-hidden border-2 border-background/20 shadow-xl mb-2 md:mb-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2599!2d73.7997!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ3LjMiTiA3M8KwNDcnNTguOSJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="150" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Comfort Technical Services Location" className="grayscale hover:grayscale-0 transition-all duration-300 md:h-[220px]"></iframe>
              </div>
              <Button variant="outline" size="default" onClick={() => window.open('https://maps.google.com/?q=NIKHIL+NIWAS+SURVEY+NO.179+SHOP+NO-02+Pune+PCMC+MH+411035', '_blank')} className="w-full text-xs md:text-sm border-background/30 hover:bg-background text-primary h-8 md:h-10">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-4 md:pt-6 text-center">
            <p className="text-xs md:text-sm opacity-70">
              © 2025 Comfort Technical Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;