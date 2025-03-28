
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: 'Breed Information', path: '/breeds' },
    { title: 'Breeding Recommendations', path: '/breeding' },
    { title: 'Cow Dung Utilization', path: '/dung' },
    { title: 'Farmer Education', path: '/education' },
    { title: 'Marketplace', path: '/marketplace' },
  ];

  return (
    <nav className="bg-kamdhenu-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Kamdhenu Connect</Link>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white hover:bg-kamdhenu-primary/80"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="py-2 hover:text-kamdhenu-light transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/profile">
              <Button className="bg-kamdhenu-accent hover:bg-kamdhenu-accent/90 text-white">
                Profile
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="block py-2 hover:bg-kamdhenu-primary/80 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link 
              to="/profile" 
              className="block mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-kamdhenu-accent hover:bg-kamdhenu-accent/90 text-white">
                Profile
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
