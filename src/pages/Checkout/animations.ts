import { Variants } from 'framer-motion';

export const checkoutContainerFormVariant: Variants = {
  hidden: { opacity: 0, translateY: -20 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } }
};
