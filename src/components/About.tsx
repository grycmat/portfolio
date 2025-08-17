import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <motion.section 
      id="about" 
      className={styles.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className={styles.container}>
        <img src="/PORTRAIT.jpg" alt="Mateusz Gryc" className={styles.profileImg} />
        <div>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutText}>
            {profileData.about.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
