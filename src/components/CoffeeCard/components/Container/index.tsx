import { Variants } from 'framer-motion';
import { CoffeeCardContainer } from './styles';

type ContainerProps = { children: React.ReactNode };

const coffeeItem: Variants = {
  hidden: { translateX: -40, opacity: 0 },
  visible: {
    translateX: 0,
    opacity: 1
  }
};

export function Container({ children }: ContainerProps) {
  return (
    <CoffeeCardContainer variants={coffeeItem}>{children}</CoffeeCardContainer>
  );
}
