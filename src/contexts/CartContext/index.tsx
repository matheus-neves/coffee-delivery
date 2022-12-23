import { AddToCartSuccess } from '@src/components/Toast/AddToCartSuccess';
import {
  clearCartAction,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeItemAction,
  saveNewItemToCart
} from '@src/reducers/cart/actions';
import { cartReducer, INITIAL_CART_STATE } from '@src/reducers/cart/reducer';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      INITIAL_CART_STATE
    },
    () => {
      const storedCartAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-1.0.0'
      );

      if (!storedCartAsJSON) {
        return INITIAL_CART_STATE;
      }

      const parsedCart: CartItem[] = JSON.parse(storedCartAsJSON);

      return {
        cartItems: parsedCart,
        loading: {
          cartItem: null
        }
      };
    }
  );

  const { cartItems, loading } = cartState;

  useEffect(() => {
    const cartDataJSON = JSON.stringify(cartItems);
    localStorage.setItem('@coffee-delivery:cart-1.0.0', cartDataJSON);
  }, [cartItems]);

  const totalPriceItems = cartItems.reduce((acc, cartItem) => {
    const sum = acc + cartItem.price * cartItem.quantity;
    return (acc = Number(parseFloat(String(sum)).toFixed(2)));
  }, 0);

  const shipment = totalPriceItems ? 10 : 0; // mock shipment

  const total = shipment + totalPriceItems;

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

  const clearCart = useCallback(() => {
    dispatch(clearCartAction());
    localStorage.removeItem('@coffee-delivery:cart-1.0.0');
  }, []);

  const value = useMemo(
    () => ({
      cartItems,
      addItemToCart,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      loading,
      shipment,
      totalPriceItems,
      total,
      clearCart
    }),
    [
      addItemToCart,
      cartItems,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemFromCart,
      loading,
      shipment,
      totalPriceItems,
      total,
      clearCart
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
