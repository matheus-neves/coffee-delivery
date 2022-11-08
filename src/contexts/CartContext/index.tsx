import { AddToCartSuccess } from '@src/components/Toast/AddToCartSuccess';
import {
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemAction,
  saveNewItemToCart
} from '@src/reducers/cart/actions';
import { cartReducer } from '@src/reducers/cart/reducer';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';
import { toast } from 'react-toastify';
import { CartContextType, CartItem } from './types';

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    loading: {
      cartId: null
    }
  });

  const { cartItems, loading } = cartState;

  const total = cartItems.reduce((acc, cartItem) => {
    const sum = acc + cartItem.price * cartItem.quantity;
    return (acc = Number(parseFloat(String(sum)).toFixed(2)));
  }, 0);

  const addItemToCart = useCallback(async (data: CartItem) => {
    const newItem = await saveNewItemToCart(data, dispatch);
    if (!newItem) return;
    toast.success(
      <AddToCartSuccess quantity={newItem.quantity} title={newItem.title} />
    );
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

  const value = useMemo(
    () => ({
      cartItems,
      total,
      addItemToCart,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      loading
    }),
    [
      addItemToCart,
      cartItems,
      total,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      loading
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
