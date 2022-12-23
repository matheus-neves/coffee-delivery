import { sendOrder } from '@src/reducers/order/actions';
import { INITIAL_ORDER_STATE, orderReducer } from '@src/reducers/order/reducer';
import { OrderState } from '@src/reducers/order/types';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
} from 'react';
import { OrderContextType, OrderProviderProps } from './types';

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, INITIAL_ORDER_STATE);

  const { deliveryAddress, payment, products, loading } = orderState;

  const finishOrder = useCallback(async (order: OrderState) => {
    const response = await sendOrder(order, dispatch);
    return response;
  }, []);

  const value = useMemo(
    () => ({
      loading,
      deliveryAddress,
      products,
      payment,
      finishOrder
    }),
    [deliveryAddress, products, payment, finishOrder, loading]
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error(
      'useOrderContext must be used within a OrderContextProvider'
    );
  }
  return context;
}
