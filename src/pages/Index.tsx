import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Award, Shield, Users, Clock, Mail, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-ac.jpg";
import acCleaning from "@/assets/ac-cleaning.jpg";
import acInstallation from "@/assets/ac-installation.jpg";
import acGasCheck from "@/assets/ac-gas-check.jpg";
import acBeforeAfter from "@/assets/ac-before-after.jpg";
import teamImage from "@/assets/team.jpg";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import MultiStepBookingForm from "@/components/MultiStepBookingForm";
import { AnimatedCounter } from "@/hooks/use-counter-animation";
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
  const amcPlans = [{
    name: "Home Plan",
    visits: "4 visits/year",
    includes: ["Basic servicing", "Filter cleaning", "Priority support"],
    price: "₹2,499/year"
  }, {
    name: "Office Plan",
    visits: "6 visits/year",
    includes: ["Servicing", "Gas top-up", "Emergency support", "Priority scheduling"],
    price: "₹4,999/year"
  }, {
    name: "Commercial Plan",
    visits: "12 visits/year",
    includes: ["Full maintenance", "Gas refills", "24/7 support", "Free minor repairs"],
    price: "Custom quote"
  }];
  const values = [{
    icon: <Award className="w-8 h-8" />,
    title: "Quality Work",
    desc: "7+ years of excellence"
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Honest Pricing",
    desc: "Transparent, no hidden costs"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Trusted Team",
    desc: "Experienced technicians"
  }, {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick Service",
    desc: "Same/next-day availability"
  }];
  const testimonials = [{
    name: "Rajesh Kumar",
    area: "Aundh, Pune",
    text: "Excellent service! Very professional and punctual.",
    rating: 5
  }, {
    name: "Priya Sharma",
    area: "Pimpri",
    text: "Best AC service in PCMC. Highly recommended!",
    rating: 5
  }, {
    name: "Amit Desai",
    area: "Wakad",
    text: "Affordable and reliable. Been using for 2 years.",
    rating: 5
  }];
  const gallery = [acCleaning, acInstallation, acGasCheck, acBeforeAfter];
  return <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <Services />

      {/* How It Works Section */}
      <section className="py-5 md:py-20 bg-accent">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div {...fadeInUp} className="text-center mb-4 md:mb-12">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1.5 md:mb-4 text-foreground">How It Works</h2>
            <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">Simple 4-step process to get your AC serviced</p>
          </motion.div>
          <motion.div className="max-w-5xl mx-auto">
            <motion.div {...staggerFast} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6">
              {[{
              num: "1",
              title: "Contact Us",
              desc: "Call, WhatsApp, or book online"
            }, {
              num: "2",
              title: "Inspection",
              desc: "Expert diagnosis of your AC"
            }, {
              num: "3",
              title: "Service",
              desc: "Professional work completed"
            }, {
              num: "4",
              title: "Satisfaction",
              desc: "Payment & your feedback"
            }].map((step, i) => <motion.div key={i} {...fadeInScale} whileHover={{
              scale: 1.05,
              y: -8
            }} className="text-center">
                  <Card className="p-2 md:p-7 h-full flex flex-col items-center hover:shadow-lg transition-all">
                    <motion.div className="w-8 h-8 md:w-16 md:h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-sm md:text-2xl font-bold mb-2 md:mb-4" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }}>
                      {step.num}
                    </motion.div>
                    <h4 className="text-xs md:text-lg font-bold mb-1 md:mb-2 text-foreground">{step.title}</h4>
                    <p className="text-[10px] md:text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AMC Plans Section */}
      <section id="amc" className="py-5 md:py-20 bg-background">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div {...fadeInUp} className="text-center mb-4 md:mb-12">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1.5 md:mb-4 text-foreground">AMC Plans</h2>
            <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">Long-term care for your air conditioning systems with priority service</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6 max-w-6xl mx-auto">
            {amcPlans.map((plan, i) => <motion.div key={i} {...fadeInScale} whileHover={{
            scale: 1.05,
            y: -10
          }} transition={{
            duration: 0.3
          }}>
                <Card className="p-2 md:p-7 h-full cursor-pointer transition-all hover:shadow-xl hover:border-primary/30 border-2" onClick={() => handleServiceClick(`${plan.name} AMC`)}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-2 mb-1.5 md:mb-3">
                    <h3 className="text-sm md:text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm md:text-xl font-bold text-primary">{plan.price}</p>
                  </div>
                  <p className="text-[10px] md:text-sm text-primary font-semibold mb-2 md:mb-4">{plan.visits}</p>
                  <ul className="space-y-1 md:space-y-2">
                    {plan.includes.map((item, j) => <li key={j} className="flex items-start text-[10px] md:text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary mr-1 md:mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>)}
                  </ul>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Gallery + Testimonials Section */}
      <section id="gallery" className="py-5 md:py-20 bg-muted">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div {...fadeInUp} className="text-center mb-4 md:mb-12">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1.5 md:mb-4 text-foreground">Our Work</h2>
            <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">See the quality of our AC services</p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-5 mb-5 md:mb-16 max-w-6xl mx-auto">
            {gallery.map((img, i) => <motion.div key={i} {...fadeInScale} whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.3
          }} className="relative overflow-hidden rounded-xl aspect-square cursor-pointer shadow-lg hover:shadow-2xl">
                <img src={img} alt={`AC service work ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>)}
          </motion.div>

          <motion.div {...fadeInUp} className="bg-background rounded-2xl p-3 md:p-10">
            <h3 className="text-base md:text-2xl lg:text-3xl font-bold text-center mb-3 md:mb-10 text-foreground">What Our Customers Say</h3>
            <motion.div {...staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6 mb-3 md:mb-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, i) => <motion.div key={i} {...fadeInScale} whileHover={{
              scale: 1.03,
              y: -8
            }} transition={{
              duration: 0.3
            }}>
                  <Card className="p-2 md:p-7 border-2 h-full hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => <motion.div key={j} initial={{
                    scale: 0,
                    opacity: 0
                  }} whileInView={{
                    scale: 1,
                    opacity: 1
                  }} transition={{
                    delay: i * 0.15 + j * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }} viewport={{
                    once: true
                  }}>
                          <Star className="w-3 h-3 md:w-5 md:h-5 text-primary fill-primary" />
                        </motion.div>)}
                    </div>
                    <p className="text-[10px] md:text-sm text-muted-foreground mb-2 md:mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <p className="text-xs md:text-base font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-[10px] md:text-sm text-muted-foreground">{testimonial.area}</p>
                    </div>
                  </Card>
                </motion.div>)}
            </motion.div>
            
            <motion.div className="text-center" {...fadeInUp}>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={() => window.open('https://share.google/XSCTACp1FdcN3VrHi', '_blank')} size="lg" className="h-8 md:h-12 px-3 md:px-7 text-xs md:text-base">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 fill-current" />
                  Rate Us on Google
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 md:py-20 bg-background">
        <div className="container mx-auto px-2 md:px-4">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-4 md:mb-12">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-lg md:text-3xl lg:text-4xl font-bold mb-1.5 md:mb-4 text-foreground">
                About <span className="text-primary">Comfort Technical Services</span>
              </motion.h2>
              <motion.p initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-xs md:text-base text-muted-foreground mb-1.5 md:mb-3">
                Your trusted partner for professional air conditioning services in Pune & PCMC
              </motion.p>
              <motion.div initial={{
              width: 0
            }} whileInView={{
              width: 96
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} className="h-0.5 md:h-1.5 bg-primary mx-auto rounded-full" />
              <motion.p initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-4">
                Proprietor: <span className="font-semibold text-foreground">Sagar Shinde</span>
              </motion.p>
            </div>

            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-16 mb-6 md:mb-20">
              <motion.div {...fadeInLeft} className="space-y-2 md:space-y-6">
                <h3 className="text-base md:text-3xl font-bold text-foreground mb-2 md:mb-6">Our Story</h3>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  Comfort Technical Services has been providing professional AC services in the Pune region since 2018. Serving Pune with 7+ years of experience, delivering reliable installation, maintenance, and repair services with outstanding customer care.
                </p>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  We place a high priority on providing outstanding customer service through prompt and dependable repairs, open communication, and affordable prices.
                </p>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  We facilitate flawless living and operational excellence; we are more than just a repair service. We want to create long-lasting connections that endure by keeping the greatest standards of professionalism, ethics, and customer care.
                </p>
              </motion.div>

              <motion.div {...fadeInRight}>
                <motion.img src={teamImage} alt="Comfort Technical Services team" className="rounded-2xl shadow-2xl w-full object-cover h-[180px] md:h-[400px]" whileHover={{
                scale: 1.03
              }} transition={{
                duration: 0.4
              }} />
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div {...fadeInUp} className="mb-6 md:mb-20">
              <h3 className="text-base md:text-3xl font-bold text-center mb-5 md:mb-12 text-foreground">Our Journey</h3>
              <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
                {[{
                year: "2018",
                title: "Foundation",
                desc: "Started Comfort Technical Services in Pune with a vision to provide reliable AC services"
              }, {
                year: "2019",
                title: "First 500 Customers",
                desc: "Reached our first 500 satisfied customers and expanded service coverage across Pune"
              }, {
                year: "2020",
                title: "GST Registration",
                desc: "Became a registered GST business, offering professional invoices to all customers"
              }, {
                year: "2021",
                title: "PCMC Expansion",
                desc: "Extended services to PCMC area including Akurdi, Chinchwad, and surrounding regions"
              }, {
                year: "2023",
                title: "10,000+ Services",
                desc: "Crossed the milestone of 10,000+ AC units serviced with 5-star customer ratings"
              }, {
                year: "2024",
                title: "AMC Programs",
                desc: "Launched comprehensive Annual Maintenance Contract programs for homes and businesses"
              }].map((milestone, i) => <motion.div key={i} {...fadeInScale} whileHover={{
                y: -8
              }} transition={{
                duration: 0.3
              }}>
                    <Card className="p-3 md:p-6 h-full border-2 hover:border-primary/40 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-1.5 md:gap-3 mb-2 md:mb-4">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs md:text-lg font-bold text-primary">{milestone.year}</span>
                        </div>
                      </div>
                      <h4 className="text-sm md:text-lg font-bold mb-1.5 md:mb-3 text-foreground">{milestone.title}</h4>
                      <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                    </Card>
                  </motion.div>)}
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 mb-6 md:mb-20" {...staggerContainer}>
              {[{
              label: "Years Experience",
              value: 7,
              suffix: "+"
            }, {
              label: "AC Units Serviced",
              value: 10000,
              suffix: "+"
            }, {
              label: "Google Reviews",
              value: 57,
              suffix: "+"
            }, {
              label: "Google Rating",
              value: 5.0,
              suffix: "/5",
              isDecimal: true
            }].map((stat, i) => <motion.div key={i} {...fadeInScale} whileHover={{
              scale: 1.05,
              y: -8
            }} transition={{
              duration: 0.3
            }}>
                  <Card className="p-3 md:p-8 text-center border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all">
                    <motion.p className="text-lg md:text-4xl lg:text-5xl font-bold text-primary mb-1.5 md:mb-3" initial={{
                  scale: 0.5,
                  opacity: 0
                }} whileInView={{
                  scale: 1,
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: i * 0.1
                }}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} className={stat.isDecimal ? "inline-block" : ""} />
                    </motion.p>
                    <p className="text-[10px] md:text-base text-muted-foreground font-semibold">{stat.label}</p>
                  </Card>
                </motion.div>)}
            </motion.div>

            {/* Core Values */}
            <motion.div {...fadeInUp}>
              <h3 className="text-base md:text-3xl font-bold text-center mb-5 md:mb-12 text-foreground">Our Core Values</h3>
              <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-2 md:gap-8">
                {[{
                icon: <Award className="w-5 h-5 md:w-8 md:h-8" />,
                title: "Quality First",
                desc: "We never compromise on the quality of our work. Every service is performed with precision and care."
              }, {
                icon: <Users className="w-5 h-5 md:w-8 md:h-8" />,
                title: "Customer Focused",
                desc: "Your satisfaction is our priority. We listen to your needs and provide tailored solutions."
              }, {
                icon: <Shield className="w-5 h-5 md:w-8 md:h-8" />,
                title: "Transparency",
                desc: "Honest pricing, clear communication, and no hidden charges."
              }].map((value, i) => <motion.div key={i} {...fadeInScale} whileHover={{
                y: -8,
                scale: 1.03
              }} transition={{
                duration: 0.3
              }}>
                    <Card className="p-3 md:p-8 text-center h-full border-2 hover:border-primary/40 hover:shadow-xl transition-all">
                      <motion.div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-6 text-primary" whileHover={{
                    rotate: 360
                  }} transition={{
                    duration: 0.6
                  }}>
                        {value.icon}
                      </motion.div>
                      <h4 className="text-sm md:text-xl font-bold mb-2 md:mb-4 text-foreground">{value.title}</h4>
                      <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                    </Card>
                  </motion.div>)}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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