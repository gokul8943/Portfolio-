import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with user authentication, payment integration, and admin dashboard. Features include product management, shopping cart, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with interactive charts and data visualization. Includes user engagement metrics and content performance tracking.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Weather App",
      description: "Responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "Full-featured blogging platform with rich text editor, comment system, and SEO optimization. Includes author profiles and content categorization.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Quill.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with expense categorization, budget tracking, and financial insights with interactive reports.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work building modern web applications with the MERN stack. 
            Each project demonstrates different aspects of full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;