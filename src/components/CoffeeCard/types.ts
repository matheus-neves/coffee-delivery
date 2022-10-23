export interface CoffeeCardProps {
  id: number;
  src: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  formattedPrice: string;
}

export type CoffeeCardContextProps = CoffeeCardProps;

export interface CoffeeCardProviderProps {
  children: React.ReactNode;
  data: CoffeeCardProps;
}
