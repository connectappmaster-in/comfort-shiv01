import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Users, Shield } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const milestones = [
    { year: "2018", title: "Started Operations", desc: "Launched AC services in Pune city." },
    { year: "2019", title: "500+ Customers", desc: "Expanded coverage across Pune areas." },
    { year: "2020", title: "GST Registered", desc: "Became a proper tax-registered business." },
    { year: "2021", title: "PCMC Expansion", desc: "Started serving Pimpri-Chinchwad region." },
    { year: "2023", title: "10,000+ Units", desc: "Crossed 10,000 AC units serviced." },
    { year: "2024", title: "AMC Launch", desc: "Introduced annual maintenance plans." }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      desc: "We double-check work before leaving your site."
    },
    {
      icon: Users,
      title: "Customer Focused",
      desc: "We try to match your timing and explain options clearly."
    },
    {
      icon: Shield,
      title: "Transparency",
      desc: "We share pricing and approvals before starting major work."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              About <span className="text-primary">Comfort Technical Services</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Proprietor: <span className="font-semibold text-foreground">Sagar Shinde</span>
            </p>
          </motion.div>

          {/* Our Story - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Our Story</h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Comfort Technical Services has been providing AC services in Pune and PCMC since 2018. 
                We started as a small team and have now serviced over 10,000 AC units across homes, 
                shops, and offices in the region.
              </p>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                When you book with us, you can expect on-time arrival, neat work, clear communication 
                about what needs to be done, and fair pricing with no surprises. We treat every 
                customer's AC like our own.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src={teamImage} 
                alt="Comfort Technical Services team" 
                className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>

          {/* Our Journey - Vertical Timeline */}
          <motion.div 
            className="mb-14 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-10 text-foreground">
              Our Journey
            </h3>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative max-w-3xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h4 className="text-base font-bold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                    </div>
                    
                    {/* Dot with Year */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative max-w-sm mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="flex items-start gap-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {/* Dot with Year */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h4 className="text-sm font-bold text-foreground">{milestone.title}</h4>
                      <p className="text-xs text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Our Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-10 text-foreground">
              Our Core Values
            </h3>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-5 md:p-6 text-center h-full border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-200">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-base font-bold mb-2 text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
