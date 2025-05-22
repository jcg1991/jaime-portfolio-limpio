
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after a while
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">
          <span className="gradient-text">Contáctame</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glassmorphism rounded-xl p-6 lg:p-8 reveal">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-medium mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-400">Me pondré en contacto contigo lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-cyan focus:border-cyan transition-all outline-none"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-cyan focus:border-cyan transition-all outline-none"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-cyan focus:border-cyan transition-all outline-none resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Información de contacto</h3>
              <p className="text-gray-400 mb-6">
                Si prefieres contactarme directamente, puedes hacerlo a través de los siguientes medios.
                Respondo generalmente en menos de 24 horas.
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:leyendalerus1991@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan transition-colors p-3 bg-dark-100 rounded-lg border border-gray-800 hover:border-cyan/30"
              >
                <Mail size={20} />
                <span>leyendalerus1991@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/jcg1991" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan transition-colors p-3 bg-dark-100 rounded-lg border border-gray-800 hover:border-cyan/30"
              >
                <Github size={20} />
                <span>github.com/jcg1991</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jaime-castillo-gutierrez-bb2077367/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan transition-colors p-3 bg-dark-100 rounded-lg border border-gray-800 hover:border-cyan/30"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/jaime-castillo-gutierrez-bb2077367</span>
              </a>
            </div>
            
            <div>
              <p className="text-gray-400">
                Actualmente <span className="text-cyan">disponible</span> para proyectos freelance
                y oportunidades de trabajo remoto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
