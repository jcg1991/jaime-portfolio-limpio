
import { useEffect } from 'react';

const About = () => {
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
    <section id="about" className="py-20 md:py-28 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Sobre mí</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center reveal">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan to-cyan-200 p-1">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <span className="text-4xl">JC</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 reveal">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy un desarrollador Full Stack apasionado por crear soluciones web intuitivas, 
              escalables y de alto rendimiento. Con más de 5 años de experiencia, he desarrollado 
              aplicaciones web complejas utilizando tecnologías modernas tanto en el frontend como en el backend.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Me especializo en arquitecturas limpias, código mantenible y experiencias de usuario excepcionales. 
              Mi enfoque combina principios de ingeniería robustos con un diseño centrado en el usuario para 
              entregar productos que no solo funcionan bien, sino que también se ven y se sienten geniales.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">React</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Python</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Flask</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">SQL</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Supabase</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Stripe</span>
              <span className="px-3 py-1 rounded-full bg-dark-200 text-sm border border-gray-700 hover:border-cyan transition-colors">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
