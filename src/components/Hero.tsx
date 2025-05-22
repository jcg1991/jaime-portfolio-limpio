
import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Animation for text elements
    const animateHero = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, 300 * index);
      });
    };

    animateHero();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-cyan opacity-0 translate-y-4 transition-all duration-700 animate-on-load">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 translate-y-4 transition-all duration-700 animate-on-load">
            <span className="gradient-text">Jaime Castillo</span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-8 opacity-0 translate-y-4 transition-all duration-700 animate-on-load">
            Desarrollador Full Stack • React • Next.js • TypeScript • Python • Tailwind • Supabase • Stripe
          </h2>
          <div className="opacity-0 translate-y-4 transition-all duration-700 animate-on-load">
            <a href="#projects" className="btn-primary inline-flex items-center">
              Ver proyectos
              <ArrowDown size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* Imagen de laptop con código */}
        <div className="w-full h-[500px] rounded-xl border border-gray-800 bg-dark-100/50 relative mt-12 opacity-0 translate-y-4 transition-all duration-700 animate-on-load overflow-hidden">
          <img 
                src="/images/hero-jaime.png" 
                alt="Laptop con código" 
                className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-cyan" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
