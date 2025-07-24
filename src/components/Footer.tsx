import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:gokul.mr@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Gokul M R
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer specializing in MERN stack development. 
              Creating innovative web solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Full Stack Web Development</li>
              <li>MERN Stack Applications</li>
              <li>API Development & Integration</li>
              <li>Database Design & Optimization</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Gokul M R. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;