import { useState } from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, X, Linkedin, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home, isRoute: true },
    { name: 'Sobre', href: '#about', icon: User },
    { name: 'Formação', href: '#experience', icon: Briefcase },
    { name: 'Projetos', href: '#projects', icon: FolderOpen },
    { name: 'Certificações', href: '#certifications', icon: Award },
    { name: 'Contato', href: '#contact', icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-secondary backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" translate="no" className="text-2xl font-bold inline-flex items-center gap-2">
            <span className="text-white">Maurilio</span>
            <span className="text-primary">Cesar</span>
          </a>

          {/* LinkedIn and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/maurilio-cesar-2ab94b1b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Right-side drawer mobile menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop (click to close) */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer panel anchored to the right (full width on small screens) */}
            <aside className="fixed top-0 right-0 z-50 h-full w-full sm:w-72 max-w-full bg-secondary p-6 animate-slide-in-right shadow-lg">
              {/* Close button inside drawer for reliable positioning on mobile */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = link.isRoute ? location.pathname === link.href : false;

                  if (link.isRoute) {
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 text-lg font-bold transition-all duration-200 hover:translate-x-1 ${
                          isActive ? 'text-primary' : 'text-white hover:text-primary'
                        }`}
                        style={{ animationDelay: `${index * 0.04}s` }}
                      >
                        <Icon size={20} />
                        <span>{link.name}</span>
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 text-lg font-bold text-white hover:text-primary transition-all duration-200"
                        style={{ animationDelay: `${index * 0.04}s` }}
                      >
                        <Icon size={20} />
                        <span>{link.name}</span>
                      </a>
                    );
                  }
                })}
              </nav>
            </aside>

            {/* (close button moved inside drawer) */}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;