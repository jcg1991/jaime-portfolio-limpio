import { useEffect } from 'react';
import { Settings, Puzzle } from 'lucide-react';

const servicesData = [
  {
    title: "Desarrollo Web Moderno",
    description: "Creación de aplicaciones web utilizando los frameworks y tecnologías más recientes. Enfoque en rendimiento y experiencia de usuario.",
    icon: "🌐"
  },
  {
    title: "APIs Backend con Python",
    description: "Desarrollo de APIs robustas y escalables utilizando Python con Flask o FastAPI. Documentación completa con Swagger/OpenAPI.",
    icon: "⚙️"
  },
  {
    title: "Integración de Pagos",
    description: "Implementación de pasarelas de pago con Stripe, PayPal u otras plataformas. Gestión segura de transacciones y suscripciones.",
    icon: "💳"
  },
  {
    title: "Bases de Datos y Almacenamiento",
    description: "Diseño e implementación de bases de datos SQL y NoSQL. Optimización de consultas y estructuras para máximo rendimiento.",
    icon: "📊"
  },
  {
    title: "Despliegue y DevOps",
    description: "Configuración de pipelines CI/CD, containerización con Docker y despliegue en plataformas cloud como AWS, Vercel o Digital Ocean.",
    icon: "☁️"
  },
  {
    title: "SEO Técnico",
    description: "Optimización del rendimiento web, implementación de schemas, SSR/SSG y buenas prácticas para mejorar el posicionamiento en buscadores.",
    icon: "🔍"
  },
  {
    title: "SEO Avanzado",
    description: "Estrategias de posicionamiento orgánico, análisis de palabras clave, optimización de contenido y estructura para maximizar visibilidad online.",
    icon: "📈"
  },
  {
    title: "Automatización de Procesos",
    description: "Desarrollo de scripts y herramientas para automatizar tareas repetitivas o flujos de trabajo, integrando APIs externas y servicios personalizados.",
    icon: "⚙️"
  },
  {
    title: "Consultoría Técnica",
    description: "Asesoramiento personalizado sobre arquitectura web, selección de tecnologías, escalabilidad, y optimización de proyectos en desarrollo.",
    icon: "🧩"
  }
];

const Services = () => {
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
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Qué puedo hacer por ti</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-dark-100 border border-gray-800 rounded-xl p-6 hover:border-cyan/30 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
