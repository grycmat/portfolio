import React from 'react';
import { motion } from 'framer-motion';
import { profileData, socialLinks } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { handleAnchorClick } = useSmoothScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section 
      id="hero" 
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className={styles.heroTitle} variants={itemVariants}>
        {profileData.name}
      </motion.h1>
      
      <motion.p className={styles.heroSubtitle} variants={itemVariants}>
        <span className={styles.typewriter}>{profileData.subtitle}</span>
      </motion.p>

      <motion.div className={styles.ctaSplit} variants={itemVariants}>
        <a href={`/${profileData.cvFileName}`} className={`${styles.btn} ${styles.btnPrimary}`} download>
          Download CV
        </a>
        <div className={styles.ctaDivider}></div>
        <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`} onClick={handleAnchorClick}>
          Get in touch
        </a>
      </motion.div>

      <motion.div className={styles.socialLinks} variants={itemVariants}>
        {socialLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};
