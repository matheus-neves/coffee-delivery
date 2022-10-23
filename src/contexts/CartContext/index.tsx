import {
  addNewItemAction,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemAction
} from '@src/reducers/cart/actions';
import { cartReducer } from '@src/reducers/cart/reducer';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';
import { CartContextType, CartItem } from './types';

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: []
  });

  const { cartItems } = cartState;

  const total = cartItems.reduce((acc, cartItem) => {
    const sum = acc + cartItem.price * cartItem.quantity;
    return (acc = Number(parseFloat(String(sum)).toFixed(2)));
  }, 0);

  const addItemToCart = useCallback((data: CartItem) => {
    dispatch(addNewItemAction(data));
  }, []);

  const removeItemFromCart = useCallback((id: number) => {
    dispatch(removeItemAction(id));
  }, []);

  const increaseItemQuantity = useCallback((id: number) => {
    dispatch(increaseItemQuantityAction(id));
  }, []);

  const decreaseItemQuantity = useCallback((id: number) => {
    dispatch(decreaseItemQuantityAction(id));
  }, []);

  console.log(cartState);

  const value = useMemo(
    () => ({
      cartItems,
      total,
      addItemToCart,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart
    }),
    [
      addItemToCart,
      cartItems,
      total,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
}
