import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Users, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const features = [
    {
      icon: CheckCircle,
      title: "Experienced Technicians",
      description: "Skilled professionals with hands-on field experience."
    },
    {
      icon: Users,
      title: "Trusted by Customers",
      description: "Homes, shops and offices across Pune & PCMC."
    },
    {
      icon: Clock,
      title: "Same/Next-Day Service",
      description: "Quick response in most areas."
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "Estimates shared before work starts."
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Image - Shows on top on mobile */}
          <motion.div 
            className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={heroImage} 
              alt="AC technician servicing an air conditioner" 
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Fast, Reliable AC Service in Pune & PCMC
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/90">
              Professional AC servicing, repair, and maintenance since 2018
            </p>

            {/* Trust Line */}
            <p className="text-sm md:text-base text-muted-foreground border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r-lg">
              7+ years of experience • 10,000+ AC units serviced • Pune & PCMC coverage • GSTIN: 27HEKPS5234F1Z4
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => {
                  const message = "Hi Comfort Technical Services! I'd like to book a service.";
                  window.open(createWhatsAppLink(message), '_blank');
                }}
              >
                Book Service Now
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="font-semibold border-2 border-success text-success hover:bg-success hover:text-success-foreground transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => {
                  const message = "Hi! I'd like to know more about your AC services.";
                  window.open(createWhatsAppLink(message), '_blank');
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="font-semibold border-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                onClick={() => window.open('tel:+917745046520')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image (Desktop only) */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AC technician servicing an air conditioner" 
                className="w-full h-[500px] object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
