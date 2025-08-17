import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
}

export const useScrollAnimation = (threshold = 0.1): UseScrollAnimationReturn => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};
