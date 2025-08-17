import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolio';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className={styles.container}>
        <img
          src="/gigapingu2.jpg"
          alt="Gigapingu Logo"
          className={styles.logoImg}
        />
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <p className={styles.copyright}>
          © {currentYear} Mateusz Gryc & Gigapingu. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};
