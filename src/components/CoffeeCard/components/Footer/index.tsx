import { CoffeeCardFooter } from './styles';

type FooterProps = { children: React.ReactNode };

export function Footer({ children }: FooterProps) {
  return <CoffeeCardFooter>{children}</CoffeeCardFooter>;
}
