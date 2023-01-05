import { Variants } from 'framer-motion';

export const featureListVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3
    }
  }
};

export const coffeeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.7,
      delayChildren: 1.7,
      staggerChildren: 0.3
    }
  }
};

export const featureItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};
