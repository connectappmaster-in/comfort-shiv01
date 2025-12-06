import { motion } from "framer-motion";
import { CheckCircle, Wrench, Sparkles, Wind, Hammer, Settings, FileText } from "lucide-react";

const ServiceDetails = () => {
  const serviceDetails = [
    {
      id: "ac-servicing",
      name: "AC Servicing",
      icon: Wrench,
      description: "If your AC isn't cooling like it used to, or it's been a few months since the last service, it's time for regular maintenance. Our technicians will check the refrigerant, clean the filters, and make sure everything runs smoothly.",
      inclusions: [
        "Indoor unit filter cleaning and wash",
        "Outdoor unit condenser cleaning",
        "Refrigerant gas pressure check",
        "Drain pipe and tray cleaning",
        "General performance check and testing"
      ],
      note: "Note: Spare parts and major repairs are charged separately after your approval."
    },
    {
      id: "deep-cleaning",
      name: "Deep Cleaning",
      icon: Sparkles,
      description: "Over time, dust and bacteria build up inside your AC, causing bad smell and reduced cooling. Deep cleaning removes all that buildup from the coils and blower, giving you fresh, clean air and better performance.",
      inclusions: [
        "Complete disassembly of indoor unit",
        "High-pressure jet cleaning of evaporator coils",
        "Blower wheel and fan cleaning",
        "Anti-bacterial and anti-fungal treatment",
        "Reassembly and cooling performance test"
      ],
      note: null
    },
    {
      id: "gas-refill",
      name: "Gas Refill",
      icon: Wind,
      description: "If your AC is running but not cooling properly, it might be low on refrigerant gas. We first check for leaks, fix them if needed, and then refill with the correct gas type for your unit.",
      inclusions: [
        "Leak detection using nitrogen pressure test",
        "Leak repair (if accessible)",
        "R32 or R410A gas refill as per unit specs",
        "Pressure balancing and cooling test",
        "30-day service warranty on gas top-up"
      ],
      note: "Note: Major leak repairs and compressor-related issues are charged separately after your approval."
    },
    {
      id: "ac-repair",
      name: "AC Repair",
      icon: Hammer,
      description: "AC not starting? Making strange noises? Showing error codes? Our technicians diagnose the problem on-site and fix it. We work on all major brands including LG, Samsung, Daikin, Voltas, Blue Star, and more.",
      inclusions: [
        "On-site fault diagnosis",
        "Compressor, capacitor, and motor repair",
        "PCB (circuit board) troubleshooting",
        "Sensor and thermostat replacement",
        "Electrical wiring and connection fixes"
      ],
      note: "Note: Spare parts are charged separately after your approval. We only use genuine or high-quality compatible parts."
    },
    {
      id: "ac-installation",
      name: "AC Installation",
      icon: Settings,
      description: "Bought a new AC? We'll install it properly with the right copper piping, secure mounting, and proper gas charging. A proper installation ensures your AC runs efficiently and lasts longer.",
      inclusions: [
        "Indoor unit wall mounting and leveling",
        "Outdoor unit placement and securing",
        "Copper pipe connection (up to 3 meters included)",
        "Electrical wiring and MCB connection",
        "Gas charging, vacuum, and cooling test"
      ],
      note: "Note: Extra copper piping beyond 3 meters and electrical work are charged separately."
    },
    {
      id: "amc-plans",
      name: "AMC Plans",
      icon: FileText,
      description: "For homes, shops, or offices with multiple ACs, our Annual Maintenance Contract gives you peace of mind. Get scheduled servicing throughout the year, priority support, and discounts on repairs.",
      inclusions: [
        "2–4 scheduled service visits per year",
        "Priority booking for emergency calls",
        "Discounted rates on repairs and parts",
        "No service call charges during contract period",
        "Dedicated technician for your location"
      ],
      note: "Note: AMC plans are customized based on number of units and location. Contact us for a quote."
    }
  ];

  return (
    <section id="service-details" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Service Details
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Here's what you can expect when you book each service
          </p>
        </motion.div>

        {/* Service Details List */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {serviceDetails.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Inclusions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {service.inclusions.map((item, j) => (
                        <li 
                          key={j}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {service.note && (
                    <p className="text-xs text-muted-foreground/80 italic border-l-2 border-primary/30 pl-3 mt-4">
                      {service.note}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
