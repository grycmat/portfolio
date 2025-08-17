import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Education.module.css';

export const Education: React.FC = () => {
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
      id="education" 
      className={styles.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <motion.div 
          className={styles.educationItem}
          whileHover={{ scale: 1.02 }}
        >
          <h3>{education.institution}</h3>
          <p className={styles.degree}>{education.degree}</p>
          <p className={styles.period}>{education.period}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
