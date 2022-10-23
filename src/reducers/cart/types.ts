export interface CartItem {
  id: number;
  src: string;
  title: string;
  quantity: number;
  price: number;
  formattedPrice: string;
}

export interface CartState {
  cartItems: CartItem[];
}
