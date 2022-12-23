import { IFormInput } from '@src/pages/Checkout/types';
import { ActionTypes } from './actions';

export type DeliveryAddress = Omit<IFormInput, 'payment'>;

export interface ProductType {
  id: number;
  src: string;
  title: string;
  quantity: number;
  price: number;
  formattedPrice: string;
}

export interface Payment {
  type: string;
  totalProducts: number;
  shipment: number;
}

export interface OrderStateReducer {
  loading: boolean;
  deliveryAddress: DeliveryAddress;
  products: ProductType[];
  payment: Payment;
}

export type OrderState = Omit<OrderStateReducer, 'loading'>;

export type SetDeliveryAddressAction = {
  type: typeof ActionTypes.SET_DELIVERY_ADDRESS;
  payload: {
    deliveryAddress: DeliveryAddress;
  };
};

export type SetPaymentAction = {
  type: typeof ActionTypes.SET_PAYMENT;
  payload: {
    payment: Payment;
  };
};

export type AddProductsAction = {
  type: typeof ActionTypes.ADD_PRODUCTS;
  payload: {
    products: ProductType[];
  };
};

export type OrderRequestAction = {
  type: typeof ActionTypes.ORDER_REQUESTED;
  payload: {
    order: OrderState;
  };
};

export type OrderRequestSuccessAction = {
  type: typeof ActionTypes.ORDER_REQUEST_SUCCESS;
};

export type OrderRequestFailedAction = {
  type: typeof ActionTypes.ORDER_REQUEST_FAILED;
};

export type OrderActionTypes =
  | SetDeliveryAddressAction
  | SetPaymentAction
  | AddProductsAction
  | OrderRequestAction
  | OrderRequestSuccessAction
  | OrderRequestFailedAction;
