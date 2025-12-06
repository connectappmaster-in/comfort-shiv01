import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Check, CalendarIcon, Loader2, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  phone: z.string()
    .regex(/^(\+91)?[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  service: z.string()
    .min(1, "Please select a service"),
  date: z.date().optional().refine((date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  }, "Date must be today or in the future"),
  message: z.string()
    .max(500, "Message must be less than 500 characters")
    .optional()
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  { name: "AC Servicing", icon: "🔧" },
  { name: "Deep Cleaning", icon: "✨" },
  { name: "Gas Refill", icon: "❄️" },
  { name: "AC Repair", icon: "🔨" },
  { name: "AC Installation", icon: "⚙️" },
  { name: "AMC Plans", icon: "📋" }
];

const MultiStepBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      date: undefined,
      message: ""
    },
    mode: "onChange"
  });

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const handleFormSubmit = async (data: FormValues) => {
    if (!data.name || !data.phone || !data.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in Name, Phone, and Service fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    
    const whatsappMessage = `🔧 New Service Booking Request\n\n` + 
      `Name: ${data.name}\n` + 
      `Phone: ${data.phone}\n` + 
      `Service: ${data.service}\n` + 
      `Preferred Date: ${data.date ? format(data.date, "dd-MMM-yyyy") : "Not specified"}\n` + 
      `Message: ${data.message || "No additional message"}`;
    
    setTimeout(() => {
      window.open(createWhatsAppLink(whatsappMessage), '_blank');
      
      toast({
        title: "Success!",
        description: "Opening WhatsApp with your booking details...",
        duration: 3000,
      });

      setIsSubmitting(false);
      
      setTimeout(() => {
        form.reset();
        setCurrentStep(1);
      }, 1000);
    }, 500);
  };

  const goToNextStep = async () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = await form.trigger("name");
    } else if (currentStep === 2) {
      isValid = await form.trigger("phone");
    } else if (currentStep === 3) {
      isValid = await form.trigger("service");
    } else if (currentStep === 4) {
      isValid = await form.trigger("date");
    }
    
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="space-y-3 md:space-y-6">
      {/* Modern Progress Indicator */}
      <div className="flex items-center justify-between mb-1 md:mb-2">
        {[1, 2, 3, 4, 5].map((step, idx) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1 md:gap-2 flex-1">
              <motion.div
                initial={false}
                animate={{
                  scale: step === currentStep ? 1.1 : 1,
                  backgroundColor: step <= currentStep ? "hsl(var(--primary))" : "hsl(var(--muted))"
                }}
                className={cn(
                  "w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all",
                  step <= currentStep ? "text-primary-foreground shadow-md" : "text-muted-foreground"
                )}
              >
                {step < currentStep ? <Check className="w-2 h-2 md:w-4 md:h-4" /> : step}
              </motion.div>
            </div>
            {idx < 4 && (
              <div className={cn(
                "h-0.5 flex-1 transition-all duration-300 mx-0.5 md:mx-1",
                step < currentStep ? "bg-primary" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-3 md:space-y-6">
          <div className="min-h-[120px] md:min-h-[180px]">
            <AnimatePresence mode="wait" custom={1}>
              {/* Step 1: Name */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-primary rounded-full" />
                    <h4 className="text-xs md:text-lg font-semibold text-foreground">Your Name</h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className={cn(
                                "text-xs md:text-sm h-8 md:h-11 pl-2 md:pl-4 pr-8 md:pr-10 rounded-lg border-2 transition-all",
                                fieldState.error && "border-destructive",
                                !fieldState.error && field.value && field.value.length >= 3 && "border-primary bg-primary/5"
                              )}
                              autoFocus
                            />
                            {!fieldState.error && field.value && field.value.length >= 3 && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2"
                              >
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                              </motion.div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] md:text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 2: Phone */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-primary rounded-full" />
                    <h4 className="text-xs md:text-lg font-semibold text-foreground">Phone Number</h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Enter 10-digit mobile number" 
                              type="tel"
                              {...field} 
                              className={cn(
                                "text-xs md:text-sm h-8 md:h-11 pl-2 md:pl-4 pr-8 md:pr-10 rounded-lg border-2 transition-all",
                                fieldState.error && "border-destructive",
                                !fieldState.error && field.value && /^(\+91)?[6-9]\d{9}$/.test(field.value) && "border-primary bg-primary/5"
                              )}
                              autoFocus
                            />
                            {!fieldState.error && field.value && /^(\+91)?[6-9]\d{9}$/.test(field.value) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2"
                              >
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                              </motion.div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] md:text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 3: Service */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-primary rounded-full" />
                    <h4 className="text-xs md:text-lg font-semibold text-foreground">Select Service</h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger 
                                className={cn(
                                  "text-xs md:text-sm h-8 md:h-11 rounded-lg border-2 transition-all",
                                  fieldState.error && "border-destructive",
                                  !fieldState.error && field.value && "border-primary bg-primary/5"
                                )}
                              >
                                <SelectValue placeholder="Choose a service" />
                              </SelectTrigger>
                              <SelectContent className="pointer-events-auto">
                                {serviceOptions.map((service, i) => (
                                  <SelectItem key={i} value={service.name} className="text-xs md:text-sm">
                                    <span className="flex items-center gap-1 md:gap-2">
                                      <span>{service.icon}</span>
                                      <span>{service.name}</span>
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {!fieldState.error && field.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none"
                              >
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                              </motion.div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] md:text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 4: Date */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-primary rounded-full" />
                    <h4 className="text-xs md:text-lg font-semibold text-foreground">Preferred Date <span className="text-[10px] md:text-xs text-muted-foreground font-normal">(Optional)</span></h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal h-8 md:h-11 rounded-lg border-2 transition-all text-xs md:text-sm",
                                  !field.value && "text-muted-foreground",
                                  fieldState.error && "border-destructive",
                                  !fieldState.error && field.value && "border-primary bg-primary/5"
                                )}
                              >
                                <CalendarIcon className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                                {field.value ? format(field.value, "dd-MMM-yyyy") : "Select date or skip"}
                                {!fieldState.error && field.value && (
                                  <Check className="ml-auto w-3 h-3 md:w-4 md:h-4 text-primary" />
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return date < today;
                                }}
                                initialFocus
                                className="p-2 md:p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage className="text-[10px] md:text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 5: Message */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
                    <div className="w-0.5 md:w-1 h-4 md:h-6 bg-primary rounded-full" />
                    <h4 className="text-xs md:text-lg font-semibold text-foreground">Additional Details <span className="text-[10px] md:text-xs text-muted-foreground font-normal">(Optional)</span></h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Textarea 
                              placeholder="Any special requirements or notes..." 
                              {...field}
                              value={field.value || ""} 
                              rows={3}
                              className={cn(
                                "text-xs md:text-sm rounded-lg border-2 transition-all resize-none",
                                fieldState.error && "border-destructive"
                              )}
                              autoFocus
                            />
                            {field.value && field.value.length > 0 && (
                              <div className="absolute right-2 md:right-3 bottom-2 md:bottom-3 text-[10px] md:text-xs text-muted-foreground">
                                {field.value.length}/500
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] md:text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Modern Navigation Buttons */}
          <div className="flex gap-2 md:gap-3 pt-1 md:pt-2">
            {currentStep > 1 && (
              <Button 
                type="button"
                variant="outline"
                onClick={goToPrevStep}
                className="px-3 md:px-6 h-8 md:h-11 rounded-lg border-2 text-xs md:text-sm"
              >
                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Back
              </Button>
            )}
            
            {currentStep < 5 ? (
              <Button 
                type="button"
                onClick={goToNextStep}
                className="flex-1 h-8 md:h-11 rounded-lg shadow-md hover:shadow-lg transition-all text-xs md:text-sm"
              >
                Continue
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={isSubmitting || !form.watch("name") || !form.watch("phone") || !form.watch("service")}
                className={cn(
                  "flex-1 h-8 md:h-11 rounded-lg shadow-md hover:shadow-lg transition-all text-xs md:text-sm",
                  isSubmitting && "opacity-70 cursor-wait",
                  (!form.watch("name") || !form.watch("phone") || !form.watch("service"))
                    ? "bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed" 
                    : "bg-[#25D366] text-white hover:bg-[#20BA5A]"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Send via WhatsApp
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MultiStepBookingForm;
