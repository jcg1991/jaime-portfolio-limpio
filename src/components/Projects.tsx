
import { Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const projectsData = [
  {
    title: "E-commerce Dashboard",
    description: "Panel de administración para tiendas online con analíticas avanzadas, gestión de inventario y procesamiento de pagos con Stripe.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "App de Gestión de Tareas",
    description: "Aplicación para organización personal y profesional con funciones de colaboración, recordatorios y sincronización multiplataforma.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Plataforma Educativa",
    description: "Sistema LMS para cursos online con vídeos, evaluaciones, foros de discusión y certificaciones personalizadas.",
    stack: ["React", "Python", "Flask", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portal Inmobiliario",
    description: "Plataforma para búsqueda, filtrado y gestión de propiedades inmobiliarias con mapas interactivos y tours virtuales.",
    stack: ["Next.js", "TypeScript", "Supabase", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "API de Análisis de Datos",
    description: "Servicio backend para procesamiento de grandes volúmenes de datos con visualizaciones y reportes automatizados.",
    stack: ["Python", "FastAPI", "Redis", "Pandas", "Docker"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Reservas",
    description: "Aplicación para gestión de citas y reservas con calendario interactivo, notificaciones y pasarela de pagos.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Twilio"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-28 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Proyectos destacados</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card bg-dark-200 rounded-xl overflow-hidden border border-gray-800 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 my-3">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-dark-100 text-xs rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    className="flex items-center text-sm text-cyan hover:text-cyan-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> Ver demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-sm text-cyan hover:text-cyan-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> Ver en GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
