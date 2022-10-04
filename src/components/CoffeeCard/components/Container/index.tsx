import { CoffeeCardContainer } from './styles';

type ContainerProps = { children: React.ReactNode };

export function Container({ children }: ContainerProps) {
  return <CoffeeCardContainer>{children}</CoffeeCardContainer>;
}
