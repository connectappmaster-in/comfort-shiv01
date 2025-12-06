import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-ac.jpg";
const Hero = () => {
  const [copiedGSTIN, setCopiedGSTIN] = useState(false);
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]); // Parallax effect

  const handleCopyGSTIN = () => {
    navigator.clipboard.writeText("27HEKPS5234F1Z4");
    setCopiedGSTIN(true);
    toast({
      title: "Copied!",
      description: "GSTIN copied to clipboard",
      duration: 2000
    });
    setTimeout(() => setCopiedGSTIN(false), 2000);
  };
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };
  return <section id="home" className="relative overflow-hidden min-h-[300px] md:min-h-[600px] flex items-center bg-gradient-to-br from-background via-accent to-background">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{
      y
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40 z-10" />
        <img src={heroImage} alt="AC Service" className="w-full h-full object-cover opacity-30" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-2 md:px-4 relative z-20 py-6 md:py-28">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          {/* Main Heading */}
          <motion.h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5 leading-tight text-foreground" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            Fast, Reliable AC Service in Pune & PCMC
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="md:text-xl lg:text-2xl mb-1.5 md:mb-4 text-foreground/90 text-lg">
            Professional AC servicing, repair, and maintenance since 2018
          </motion.p>

          {/* Description */}
          <motion.p className="text-xs md:text-base mb-3 md:mb-8 max-w-2xl mx-auto text-muted-foreground" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            7+ years of experience • Worked with multiple companies in Pune
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-row justify-center gap-1.5 md:gap-3 mb-3 md:mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }}>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="sm" className="h-7 md:h-10 px-2 md:px-4 text-[10px] md:text-sm font-semibold whitespace-nowrap" onClick={() => {
              const message = "Hi Comfort Technical Services! I'd like to book a service.";
              window.open(createWhatsAppLink(message), '_blank');
            }}>
                Book Service Now
              </Button>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="sm" variant="secondary" className="h-7 md:h-10 px-2 md:px-4 text-[10px] md:text-sm font-semibold bg-success hover:bg-success/90 text-success-foreground whitespace-nowrap" onClick={() => {
              const message = "Hi! I'd like to know more about your AC services.";
              window.open(createWhatsAppLink(message), '_blank');
            }}>
                <MessageCircle className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />
                WhatsApp Us
              </Button>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button size="sm" variant="outline" className="h-7 md:h-10 px-2 md:px-4 text-[10px] md:text-sm font-semibold border-2 whitespace-nowrap" onClick={() => window.open('tel:+917745046520')}>
                <Phone className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>

          {/* GSTIN with Copy */}
          <motion.div className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <p>GSTIN: 27HEKPS5234F1Z4</p>
            
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;