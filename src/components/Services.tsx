import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, Wrench, Sparkles, Wind, Hammer, Settings, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "ac-servicing",
      name: "AC Servicing",
      tagline: "Regular maintenance to keep your AC cooling efficiently.",
      desc: [
        "Filter cleaning & wash",
        "Coil inspection & cleaning",
        "Refrigerant level check"
      ],
      price: "₹399",
      icon: Wrench
    },
    {
      id: "deep-cleaning",
      name: "Deep Cleaning",
      tagline: "Thorough internal cleaning for better cooling and hygiene.",
      desc: [
        "Complete internal cleaning",
        "Coil sanitization",
        "Anti-bacterial treatment"
      ],
      price: "₹599",
      icon: Sparkles
    },
    {
      id: "gas-refill",
      name: "Gas Refill",
      tagline: "Leak check and proper gas charging for low-cooling units.",
      desc: [
        "Leak detection & repair",
        "R32/R410A gas refill",
        "Pressure testing"
      ],
      price: "₹2,500",
      icon: Wind
    },
    {
      id: "ac-repair",
      name: "AC Repair",
      tagline: "Fault finding and repair for all major AC brands.",
      desc: [
        "Compressor troubleshooting",
        "PCB & circuit repairs",
        "All brand expertise"
      ],
      price: "Based on issue",
      icon: Hammer
    },
    {
      id: "ac-installation",
      name: "AC Installation",
      tagline: "Proper indoor and outdoor unit installation with testing.",
      desc: [
        "Professional mounting",
        "Copper piping & wiring",
        "Gas charging & testing"
      ],
      price: "₹1,500",
      icon: Settings
    },
    {
      id: "amc-plans",
      name: "AMC Plans",
      tagline: "Scheduled visits and priority support for homes and businesses.",
      desc: [
        "Scheduled maintenance visits",
        "Priority service calls",
        "Discounted repairs"
      ],
      price: "Custom pricing",
      icon: FileText
    }
  ];

  const scrollToDetail = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AC solutions for homes and businesses across Pune & PCMC
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card 
                  className="p-5 md:p-6 h-full flex flex-col border border-border/60 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 bg-card"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-primary">
                      {service.price}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.desc.map((point, j) => (
                      <li 
                        key={j} 
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button 
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 text-left mt-auto"
                    onClick={() => scrollToDetail(service.id)}
                  >
                    Learn More →
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
