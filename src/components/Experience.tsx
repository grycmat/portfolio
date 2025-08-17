import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      id="experience" 
      className={styles.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <motion.div className={styles.timeline} variants={containerVariants}>
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              data-when={item.period}
              variants={itemVariants}
            >
              <motion.div 
                className={styles.timelineContent}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className={styles.company}>{item.company}</h3>
                
                {item.role && (
                  <p className={styles.role}>
                    <strong>{item.role}</strong>
                  </p>
                )}
                
                {item.roles && (
                  <ul className={styles.timelineRoles}>
                    {item.roles.map((role, roleIndex) => (
                      <li key={roleIndex}>
                        <span className={styles.when}>{role.period}</span>
                        <span className={`${styles.roleChip} ${role.isPromotion ? styles.promotion : ''}`}>
                          {role.title} {role.isPromotion && '— Promotion'}
                        </span>
                        <div className={styles.desc}>{role.description}</div>
                      </li>
                    ))}
                  </ul>
                )}
                
                {item.summary && (
                  <p className={styles.summary}>{item.summary}</p>
                )}
                
                {item.bullets && (
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
