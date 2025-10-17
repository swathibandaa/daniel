import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Ruby",
    description: "Modern e-commerce platform with seamless user experience and advanced analytics dashboard.",
    year: "2024",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/placeholder-ruby.jpg"
  },
  {
    title: "Stimulate",
    description: "Creative agency website with interactive animations and portfolio showcase.",
    year: "2023",
    category: "Website",
    tags: ["Next.js", "Framer Motion", "Design"],
    image: "/placeholder-stimulate.jpg"
  },
  {
    title: "Caldera",
    description: "SaaS platform for team collaboration with real-time features and intuitive design.",
    year: "2023",
    category: "SaaS",
    tags: ["Web3", "React", "WebSocket"],
    image: "/placeholder-caldera.jpg"
  },
  {
    title: "Reward Point",
    description: "Loyalty program management system with gamification elements and user engagement focus.",
    year: "2022",
    category: "Platform",
    tags: ["Vue.js", "Gamification", "UX"],
    image: "/placeholder-reward.jpg"
  },
  {
    title: "Memex",
    description: "Knowledge management tool with AI-powered organization and beautiful interface design.",
    year: "2021",
    category: "Tool",
    tags: ["AI", "React", "Design System"],
    image: "/placeholder-memex.jpg"
  },
  {
    title: "Pix AI",
    description: "AI-powered image generation platform with intuitive controls and stunning results.",
    year: "2020",
    category: "AI Tool",
    tags: ["AI", "Machine Learning", "Creative"],
    image: "/placeholder-pix.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Selected Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of work from 2020 to present, featuring innovative solutions 
            for startups, enterprises, and creative agencies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more work or discuss a project?
          </p>
          <button 
            onClick={() => window.open('mailto:hello@danielsun.space')}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;