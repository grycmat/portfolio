import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileScreenButton, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { skills, focusAreas } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Skills.module.css';

const iconMap = {
  'code': faCode,
  'mobile-screen-button': faMobileScreenButton,
  'screwdriver-wrench': faScrewdriverWrench,
};

export const Skills: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      id="skills" 
      className={styles.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <motion.div className={styles.skillsGrid} variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0, 168, 255, 0.3)'
              }}
            >
              <FontAwesomeIcon 
                icon={iconMap[skill.icon as keyof typeof iconMap]} 
                className={styles.skillIcon}
              />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <h2 className={`${styles.sectionTitle} ${styles.focusTitle}`}>Current Focus</h2>
        <motion.div className={styles.focusGrid} variants={containerVariants}>
          {focusAreas.map((area, index) => (
            <motion.div 
              key={index} 
              className={styles.focusItem}
              variants={itemVariants}
            >
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
