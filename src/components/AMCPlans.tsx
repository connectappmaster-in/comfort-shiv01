import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AMCPlans = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const handlePlanClick = (planName: string) => {
    const message = `Hi Comfort Technical Services! I'm interested in the ${planName}. Could you please provide more details?`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  const plans = [
    {
      name: "Home Plan",
      visits: "4 visits/year",
      forWhom: "For 1–3 AC units in homes and small apartments.",
      includes: [
        "Basic servicing each visit",
        "Filter cleaning",
        "Priority support"
      ],
      price: "₹2,499/year",
      popular: false
    },
    {
      name: "Office Plan",
      visits: "6 visits/year",
      forWhom: "For shops and offices with regular AC usage.",
      includes: [
        "Full servicing each visit",
        "Gas top-up if needed",
        "Emergency support",
        "Priority scheduling"
      ],
      price: "₹4,999/year",
      popular: true
    },
    {
      name: "Commercial Plan",
      visits: "12 visits/year",
      forWhom: "For buildings, showrooms and heavy-load systems.",
      includes: [
        "Complete maintenance",
        "Gas refills included",
        "24/7 support",
        "Free minor repairs"
      ],
      price: "Custom quote",
      popular: false
    }
  ];

  return (
    <section id="amc" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            AMC Plans
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Annual Maintenance Contracts for worry-free AC care
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className={`p-5 md:p-6 h-full cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg relative ${
                  plan.popular 
                    ? 'border-2 border-primary ring-2 ring-primary/20' 
                    : 'border border-border/60 hover:border-primary/30'
                }`}
                onClick={() => handlePlanClick(plan.name)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3">
                    Most Popular
                  </Badge>
                )}

                {/* Plan Name & Price */}
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {plan.price}
                  </p>
                </div>

                {/* Visits */}
                <p className="text-sm font-semibold text-primary/80 mb-2">
                  {plan.visits}
                </p>

                {/* For Whom */}
                <p className="text-sm text-muted-foreground mb-4 border-l-2 border-primary/30 pl-3">
                  {plan.forWhom}
                </p>

                {/* Includes */}
                <ul className="space-y-2">
                  {plan.includes.map((item, j) => (
                    <li 
                      key={j} 
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p 
          className="text-center text-xs md:text-sm text-muted-foreground/80 mt-8 md:mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Spare parts and major repairs are charged separately after your approval.
        </motion.p>
      </div>
    </section>
  );
};

export default AMCPlans;
