import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    reset();
  };

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
      id="contact" 
      className={styles.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
          <motion.div 
            className={styles.formGroup}
            whileFocus={{ scale: 1.02 }}
          >
            <input 
              type="text" 
              placeholder="Your Name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              className={errors.name ? styles.error : ''}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
          </motion.div>

          <motion.div 
            className={styles.formGroup}
            whileFocus={{ scale: 1.02 }}
          >
            <input 
              type="email" 
              placeholder="Your Email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
          </motion.div>

          <motion.div 
            className={styles.formGroup}
            whileFocus={{ scale: 1.02 }}
          >
            <textarea 
              placeholder="Your Message"
              rows={5}
              {...register('message', { 
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' }
              })}
              className={errors.message ? styles.error : ''}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
          </motion.div>

          <motion.button 
            type="submit" 
            className={styles.btn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};
