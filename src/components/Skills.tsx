import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Bootstrap"],
      color: "text-accent"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices", "JWT Authentication"],
      color: "text-primary"
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Database Design"],
      color: "text-accent"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "AWS", "Heroku", "Netlify", "Postman", "VS Code"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in MERN stack development with a focus on building scalable, 
            modern web applications using cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className={`text-2xl font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-secondary p-6 rounded-2xl border border-primary/20">
            <div className="text-6xl">⚡</div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">MERN Stack Expert</h3>
              <p className="text-muted-foreground">
                MongoDB • Express.js • React • Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;