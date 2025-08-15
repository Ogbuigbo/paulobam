"use client"

import { useState } from "react";
import { Button } from "../_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { Input } from "../_components/ui/input";
import { Textarea } from "../_components/ui/textarea";
import { Label } from "../_components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  Building2,
  Globe,
  FileText
} from "lucide-react";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "paulotam@ymail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Registered Office",
      details: "No. 12, Sandfield Area, Road 1, Ogu Town, Rivers State, Nigeria",
      description: "Our official business address"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Nigerian local time (WAT)"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Company Registration",
      details: "RC Number: 7268414",
      description: "Registered December 18, 2023"
    }
  ];

  const services = [
    "Fashion & Food Distribution",
    "Import & Export Services",
    "Civil Engineering & Construction",
    "Manufacturing & Representation",
    "Real Estate & Property",
    "Equipment & Marine Leasing",
    "Road Construction",
    "Petroleum Products",
    "General Contracts",
    "Other Services"
  ];

  return (
    <div className="min-h-screen bg-background">
   
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to discuss your project or partnership opportunities? 
              We're here to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-navy mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-lg mr-4 text-navy">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{info.details}</p>
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Facts */}
                <Card className="mt-8 border-0 bg-muted/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy mb-4 flex items-center">
                      <FileText className="w-5 h-5 text-gold mr-2" />
                      Quick Facts
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Multi-sector service provider</li>
                      <li>• Legally registered and compliant</li>
                      <li>• Active business status</li>
                      <li>• Nigerian and international operations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name (optional)"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="navy" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Contact;