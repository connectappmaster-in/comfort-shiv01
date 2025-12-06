import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      num: 1,
      title: "Contact Us",
      desc: "Call, WhatsApp, or fill the booking form."
    },
    {
      num: 2,
      title: "Inspection",
      desc: "Technician checks your AC and explains the issue."
    },
    {
      num: 3,
      title: "Service",
      desc: "Work is done on the spot or scheduled if needed."
    },
    {
      num: 4,
      title: "Feedback & Payment",
      desc: "Pay after the job is done. Share your feedback."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to get your AC serviced
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
            <motion.div 
              className="absolute top-8 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="text-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Numbered Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold mb-2 text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="flex items-start gap-4 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Numbered Circle */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0 relative z-10">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h4 className="text-base font-bold mb-1 text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <motion.p 
          className="text-center text-sm text-muted-foreground mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Same/next-day service available in most Pune & PCMC areas.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
