export interface IconContainerProps {
  bgcolor: string;
}

export interface CoffeeState {
  id: number;
  src: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  formattedPrice: string;
}
