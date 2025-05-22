
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    name: "María González",
    position: "CEO",
    company: "TechStart",
    content: "Contratar a Jaime para nuestro rediseño web fue una de las mejores decisiones que tomamos. Entregó un producto que superó nuestras expectativas y aumentó nuestra conversión en un 30%.",
    avatar: "MG"
  },
  {
    name: "Carlos Rodríguez",
    position: "CTO",
    company: "DataSystems",
    content: "El conocimiento técnico de Jaime es impresionante. Desarrolló una API robusta y bien documentada que se integra perfectamente con nuestros sistemas existentes. Definitivamente volveremos a trabajar con él.",
    avatar: "CR"
  },
  {
    name: "Laura Martínez",
    position: "Product Manager",
    company: "InnovaApps",
    content: "Jaime no solo es un excelente desarrollador, sino también un gran comunicador. Supo traducir nuestros requerimientos complejos en soluciones técnicas elegantes y mantenibles.",
    avatar: "LM"
  },
  {
    name: "Daniel Torres",
    position: "Founder",
    company: "E-Learn Platform",
    content: "Nuestra plataforma educativa necesitaba una renovación completa. Jaime no solo modernizó la tecnología, sino que también mejoró significativamente la experiencia de usuario. Trabajo excepcional.",
    avatar: "DT"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTestimonial();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTestimonial();
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Testimonios</span>
        </h2>
        
        <div className="max-w-4xl mx-auto reveal">
          <div 
            className="relative glassmorphism rounded-xl p-8 md:p-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center border border-gray-800 hover:border-cyan transition-colors z-10 md:opacity-70 hover:opacity-100"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center border border-gray-800 hover:border-cyan transition-colors z-10 md:opacity-70 hover:opacity-100"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={20} />
            </button>
          
            {/* Testimonial Content */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan/10 border-2 border-cyan flex items-center justify-center text-xl font-semibold mb-6">
                {testimonialsData[currentIndex].avatar}
              </div>
              
              <blockquote>
                <p className="text-lg md:text-xl leading-relaxed italic text-gray-300 mb-6">
                  "{testimonialsData[currentIndex].content}"
                </p>
              </blockquote>
              
              <div>
                <div className="font-medium text-cyan">{testimonialsData[currentIndex].name}</div>
                <div className="text-sm text-gray-400">
                  {testimonialsData[currentIndex].position}, {testimonialsData[currentIndex].company}
                </div>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-cyan w-4' : 'bg-gray-600'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
