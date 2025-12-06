import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
const ServiceAreaMap = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.6
    }
  };
  const serviceAreas = [{
    name: "Aundh",
    popular: true
  }, {
    name: "Wakad",
    popular: true
  }, {
    name: "Hinjewadi",
    popular: true
  }, {
    name: "Pimple Saudagar",
    popular: true
  }, {
    name: "Pimpri",
    popular: true
  }, {
    name: "Chinchwad",
    popular: true
  }, {
    name: "Kharadi",
    popular: false
  }, {
    name: "Viman Nagar",
    popular: false
  }, {
    name: "Baner",
    popular: false
  }, {
    name: "Pimple Nilakh",
    popular: false
  }, {
    name: "Rahatani",
    popular: false
  }, {
    name: "Thergaon",
    popular: false
  }, {
    name: "Kasarwadi",
    popular: false
  }, {
    name: "Akurdi",
    popular: false
  }, {
    name: "Nigdi",
    popular: false
  }, {
    name: "Bhosari",
    popular: false
  }];
  return <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Service Coverage Area
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            We serve all major areas in Pune & PCMC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Google Map */}
          <motion.div {...fadeInUp}>
            
          </motion.div>

          {/* Areas List */}
          <motion.div {...fadeInUp} className="space-y-6">
            <Card className="p-6 md:p-8 bg-background border-border">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                Areas We Cover
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {serviceAreas.map((area, i) => <motion.div key={i} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.05
              }} whileHover={{
                x: 5,
                transition: {
                  duration: 0.2
                }
              }} className="flex items-center gap-2 cursor-pointer group">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      {area.name}
                    </span>
                  </motion.div>)}
              </div>
            </Card>

            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ServiceAreaMap;