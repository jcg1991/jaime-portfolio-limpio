
import { useEffect } from 'react';
import { Lock, Network, Gauge } from 'lucide-react';

const skillsData = [
  {
    name: "React",
    description: "Biblioteca para interfaces de usuario interactivas",
    icon: "💻"
  },
  {
    name: "Next.js",
    description: "Framework React para apps SSR/SSG",
    icon: "🔄"
  },
  {
    name: "TypeScript",
    description: "JavaScript con tipado estático",
    icon: "📝"
  },
  {
    name: "Python",
    description: "Lenguaje versátil para backend y datos",
    icon: "🐍"
  },
  {
    name: "Flask",
    description: "Framework web minimalista para Python",
    icon: "🌐"
  },
  {
    name: "Tailwind CSS",
    description: "Framework CSS utility-first",
    icon: "🎨"
  },
  {
    name: "Supabase",
    description: "Alternativa open source a Firebase",
    icon: "🔥"
  },
  {
    name: "SQL",
    description: "Gestión y consulta de bases de datos",
    icon: "📊"
  },
  {
    name: "Stripe",
    description: "Procesamiento de pagos online",
    icon: "💳"
  },
  {
    name: "Docker",
    description: "Contenedores para aplicaciones",
    icon: "🐳"
  },
  {
    name: "Testing",
    description: "Jest, Testing Library, Cypress",
    icon: "🧪"
  },
  {
    name: "CI/CD",
    description: "GitHub Actions, Jenkins",
    icon: "⚙️"
  },
  {
    name: "SEO Avanzado",
    description: "Optimización técnica y estratégica para buscadores",
    icon: "🔍"
  },
  {
    name: "Autenticación",
    description: "Gestión de usuarios con Auth, JWT y OAuth 2.0",
    icon: "🔒"
  },
  {
    name: "GraphQL",
    description: "Consultas estructuradas eficientes para APIs modernas",
    icon: "🔄"
  },
  {
    name: "Rendimiento",
    description: "Optimización de carga, Lighthouse, Core Web Vitals",
    icon: "🚀"
  }
];

const Skills = () => {
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
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Habilidades técnicas</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-dark-100 border border-gray-800 p-6 rounded-xl hover:border-cyan/30 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-4 skill-icon">{skill.icon}</div>
                <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
