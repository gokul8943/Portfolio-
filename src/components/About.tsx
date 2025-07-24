import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical thinking to tackle complex development challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with expertise in full-stack development, 
              specializing in creating innovative solutions with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm <span className="text-primary font-semibold">Gokul M R</span>, a dedicated software engineer 
                  with a passion for creating robust, scalable web applications. My expertise lies in the 
                  <span className="text-primary font-semibold"> MERN stack</span>, where I combine creativity 
                  with technical precision to build exceptional digital experiences.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in both frontend and backend development, I enjoy the complete 
                  product development lifecycle - from conceptualization and design to deployment and maintenance. 
                  I believe in writing clean, efficient code and staying updated with the latest industry trends.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always excited about 
                  opportunities to work on challenging projects that make a positive impact.
                </p>
              </div>
            </div>

            {/* Right side - Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;