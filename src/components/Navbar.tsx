
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-md shadow-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-xl font-bold gradient-text">JC</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm hover:text-cyan transition-colors">Sobre mí</a>
            <a href="#skills" className="text-sm hover:text-cyan transition-colors">Habilidades</a>
            <a href="#projects" className="text-sm hover:text-cyan transition-colors">Proyectos</a>
            <a href="#services" className="text-sm hover:text-cyan transition-colors">Servicios</a>
            <a href="#testimonials" className="text-sm hover:text-cyan transition-colors">Testimonios</a>
            <a href="#contact" className="text-sm hover:text-cyan transition-colors">Contacto</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 bg-dark glassmorphism transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <a href="#home" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Inicio</a>
          <a href="#about" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Sobre mí</a>
          <a href="#skills" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Habilidades</a>
          <a href="#projects" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Proyectos</a>
          <a href="#services" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Servicios</a>
          <a href="#testimonials" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Testimonios</a>
          <a href="#contact" className="text-xl hover:text-cyan transition-colors" onClick={toggleMenu}>Contacto</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
