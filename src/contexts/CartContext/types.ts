export interface CartItem {
  id: number;
  src: string;
  title: string;
  quantity: number;
  price: number;
  formattedPrice: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  totalPriceItems: number;
  total: number;
  shipment: number;
  loading: {
    cartItem: CartItem | null;
  };
  addItemToCart: (data: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  clearCart: () => void;
}
