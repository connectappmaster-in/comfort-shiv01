import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { AnimatedCounter } from "@/hooks/use-counter-animation";
import acCleaning from "@/assets/ac-cleaning.jpg";
import acInstallation from "@/assets/ac-installation.jpg";
import acGasCheck from "@/assets/ac-gas-check.jpg";
import acBeforeAfter from "@/assets/ac-before-after.jpg";

const GalleryTestimonials = () => {
  const gallery = [
    { src: acCleaning, alt: "AC deep cleaning service" },
    { src: acInstallation, alt: "AC installation work" },
    { src: acGasCheck, alt: "AC gas refill and pressure check" },
    { src: acBeforeAfter, alt: "Before and after AC cleaning" }
  ];

  const testimonials = [
    {
      text: "Very happy with the service. Technician came on time and fixed the cooling issue quickly. Will call again.",
      name: "Rajesh Kumar",
      area: "Aundh, Pune",
      service: "Split AC servicing and gas top-up"
    },
    {
      text: "Good work and fair pricing. They explained what was wrong before starting. No hidden charges.",
      name: "Priya Sharma",
      area: "Pimpri",
      service: "Deep cleaning for 2 ACs"
    },
    {
      text: "Using their service for 2 years now. Reliable and affordable. They always pick up the call.",
      name: "Amit Desai",
      area: "Wakad",
      service: "AMC for office ACs"
    }
  ];

  const stats = [
    { value: 7, suffix: "+", label: "Years Experience" },
    { value: 10000, suffix: "+", label: "AC Units Serviced" },
    { value: 150, suffix: "+", label: "Google Reviews" },
    { value: 4.8, suffix: "/5", label: "Google Rating", isDecimal: true }
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Our Work Section */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Our Work
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Actual photos from Comfort Technical Services jobs in Pune & PCMC.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl border border-border/60 aspect-[4/3] cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-primary/5 rounded-2xl p-6 md:p-10 mb-12 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      duration={2000}
                    />
                  )}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="bg-background rounded-2xl p-6 md:p-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-10 text-foreground">
            What Our Customers Say
          </h3>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <Card className="p-5 md:p-6 h-full border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        className="w-4 h-4 text-primary fill-primary" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="border-t border-border/60 pt-3">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name} · {testimonial.area}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.service}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-2"
              onClick={() => window.open('https://share.google/XSCTACp1FdcN3VrHi', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              See more reviews on Google
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryTestimonials;
