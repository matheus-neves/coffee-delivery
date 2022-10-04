export interface CoffeeCardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export type CoffeeCardContextProps = CoffeeCardProps;

export interface CoffeeCardProviderProps {
  children: React.ReactNode;
  data: CoffeeCardContextProps;
}
