import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy functionality - calculate which section is most visible
  useEffect(() => {
    // Always start with home section active
    setActiveSection("home");
    
    const navbarHeight = 64;
    const sectionIds = ["home", "services", "amc", "gallery", "about", "contact"];
    
    const calculateActiveSection = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // If at top of page, set to home
      if (scrollTop < 100) {
        setActiveSection("home");
        return;
      }
      
      // If user is near the bottom, activate contact section
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setActiveSection("contact");
        return;
      }
      
      // Find the section that is currently most visible in viewport
      let currentSection = "home";
      let maxVisibility = 0;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const sectionTop = Math.max(rect.top - navbarHeight, 0);
        const sectionBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, sectionBottom - sectionTop);
        
        // Prioritize sections that start near the top of viewport
        const isNearTop = rect.top <= navbarHeight + 150 && rect.top >= -rect.height + 100;
        
        if (isNearTop && visibleHeight > 0) {
          currentSection = sectionId;
          break;
        }
        
        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          currentSection = sectionId;
        }
      }
      
      setActiveSection(currentSection);
    };

    // Delay initial calculation
    const initialTimeout = setTimeout(calculateActiveSection, 150);
    
    window.addEventListener("scroll", calculateActiveSection);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("scroll", calculateActiveSection);
    };
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "AMC Plans",
    href: "#amc"
  }, {
    name: "Gallery",
    href: "#gallery"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // navbar height in pixels
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.1)]" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="CTS Logo" className="w-10 h-10 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Comfort Technical Services </h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center max-w-2xl">
            {navItems.map(item => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return <button key={item.name} onClick={() => scrollToSection(item.href)} className={`text-sm font-medium transition-all duration-300 relative group z-10 ${isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary hover:-translate-y-0.5"}`}>
                  {item.name}
                  {isActive && <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" transition={{
                type: "spring",
                stiffness: 380,
                damping: 30
              }} />}
                  {!isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />}
                </button>;
          })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Button size="sm" variant="outline" onClick={() => window.open('tel:+917745046520')}>
              <Phone className="w-4 h-4 mr-1" />
              Call
            </Button>
            <Button size="sm" onClick={() => window.open('https://wa.me/917745046520?text=Hi! I\'d like to know more about your AC services.', '_blank')}>
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>

          {/* Tablet CTA - Icons Only */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Button size="icon" variant="outline" onClick={() => window.open('tel:+917745046520')} aria-label="Call">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="icon" onClick={() => window.open('https://wa.me/917745046520?text=Hi! I\'d like to know more about your AC services.', '_blank')} aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && <>
            {/* Dark Overlay */}
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="fixed inset-0 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} />
            
            {/* Menu Panel */}
            <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3,
          ease: "easeOut"
        }} className="lg:hidden border-t border-border bg-background shadow-lg relative z-10">
              <div className="container mx-auto px-4 py-4">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>

                {/* Menu Items */}
                <div className="space-y-1 mb-4">
                  {navItems.map(item => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return <button key={item.name} onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(item.href);
                }} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 touch-manipulation ${isActive ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-primary hover:bg-muted/50 hover:translate-x-1"}`} style={{
                  fontSize: '16px'
                }}>
                        {item.name}
                      </button>;
              })}
                </div>

                {/* Mobile CTA Buttons - Stacked Vertically */}
                <div className="flex flex-col gap-2 pt-2 md:hidden">
                  <Button size="lg" variant="outline" className="w-full justify-center" onClick={() => {
                setIsOpen(false);
                window.open('tel:+917745046520');
              }}>
                    <Phone className="w-5 h-5 mb-1" />
                    <span className="ml-2">Call Now</span>
                  </Button>
                  <Button size="lg" className="w-full justify-center" onClick={() => {
                setIsOpen(false);
                window.open('https://wa.me/917745046520?text=Hi! I\'d like to know more about your AC services.', '_blank');
              }}>
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="ml-2">WhatsApp Us</span>
                  </Button>
                </div>

                {/* Tablet CTA Buttons - Horizontal */}
                <div className="hidden md:flex lg:hidden gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => {
                setIsOpen(false);
                window.open('tel:+917745046520');
              }}>
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" className="flex-1" onClick={() => {
                setIsOpen(false);
                window.open('https://wa.me/917745046520?text=Hi! I\'d like to know more about your AC services.', '_blank');
              }}>
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </nav>;
};
export default Navbar;