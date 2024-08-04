import React, { useState } from 'react';
import { FaEquals, FaTimes, FaGripfire } from 'react-icons/fa';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { name: 'Sobre', href: '#' },
    { name: 'Treinos', href: '#' },
    { name: 'Planos', href: '#'},  
    { name: 'Contato', href: '#' },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-20 md:py-6 sticky shadow-md z-10">
        <a href="#">
            <div className="text-slate-400 font-bold flex">
                <a className="content-center" href="index.html"><FaGripfire className="size-8" /></a>
                <div className="p-2">
                    <div>Matheus Lucena</div>
                    <div>Personal Trainer</div>
                </div>
            </div>
        </a>
      <div className="hidden md:flex items-center justify-center">
        <ul className="flex items-center justify-center list-none relative">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="px-3 md:px-5 relative"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink('')}
            >
              <a
                className={`text-base font-semibold text-slate-400 hover:text-slate-200 ${
                    link.name === 'Sobre' ? 'active' : '' && 
                    activeLink === link.name ? 'active' : ''
                } ${hoveredLink === link.name ? 'hovered' : ''}`}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button id="menu-toggle" className="text-slate-400 " onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <FaTimes className='size-5' /> : <FaEquals className='size-5' />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-900 w-full absolute top-20 left-0 py-4 shadow-md">
          <ul className="flex flex-col items-end mr-6 list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <a
                  className={`no-underline text-base font-semibold text-slate-400 hover:text-slate-200 ${activeLink === link.name ? 'text-slate-200' : ''}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
