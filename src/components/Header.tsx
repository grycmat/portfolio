import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleAnchorClick } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.container}>
        <a href="#" className={styles.logo} onClick={handleAnchorClick}>
          <img src="/gigapingu1.jpg" alt="Gigapingu Logo" className={styles.logoImg} />
        </a>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleAnchorClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
