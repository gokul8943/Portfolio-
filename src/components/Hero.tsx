import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gokul M R
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer specializing in{" "}
              <span className="text-primary font-semibold">MERN Stack</span>
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating scalable web applications with modern technologies. 
              I build efficient, user-friendly solutions that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-glow-pulse">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-accent/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:gokul@example.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;