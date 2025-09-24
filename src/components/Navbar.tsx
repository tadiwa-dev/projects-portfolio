import React from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-400">Tadiwa Matewe</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400 focus:outline-none focus:text-primary-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
