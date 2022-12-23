import {
  DeliveryAddress,
  OrderState,
  Payment,
  ProductType
} from '@src/reducers/order/types';

export interface OrderContextType {
  loading: boolean;
  deliveryAddress: DeliveryAddress;
  products: ProductType[];
  payment: Payment;
  finishOrder: (order: OrderState) => Promise<OrderState>;
}

export interface OrderProviderProps {
  children: React.ReactNode;
}
