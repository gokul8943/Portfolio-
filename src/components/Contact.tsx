import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Textarea } from "./ui/textArea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gokul.mr@example.com",
      href: "mailto:gokulmr@331@gmail.com"
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "+91 9876543210",
    //   href: "tel:+919876543210"
    // },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-accent"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
              I'm always excited to work on new projects and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <Card
                      key={item.title}
                      className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-4">
                        <a
                          href={item.href}
                          className="flex items-center space-x-4 group"
                        >
                          <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{item.title}</div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {item.value}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:scale-110 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-gradient-secondary border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-primary">Available for work</div>
                      <div className="text-sm text-muted-foreground">
                        Open to freelance projects and full-time opportunities
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Discussion"
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;