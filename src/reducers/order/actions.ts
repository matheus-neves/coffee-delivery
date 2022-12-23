import {
  AddProductsAction,
  DeliveryAddress,
  OrderActionTypes,
  OrderState,
  Payment,
  ProductType,
  SetDeliveryAddressAction,
  SetPaymentAction
} from './types';

export enum ActionTypes {
  ORDER_REQUESTED = 'ORDER_REQUESTED',
  ORDER_REQUEST_SUCCESS = 'ORDER_REQUEST_SUCCESS',
  ORDER_REQUEST_FAILED = 'ORDER_REQUEST_FAILED',
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
  SET_PAYMENT = 'SET_PAYMENT',
  ADD_PRODUCTS = 'ADD_PRODUCTS',
  FINISH_ORDER = 'FINISH_ORDER'
}

export function setDeliveryAddressAction(
  deliveryAddress: DeliveryAddress
): SetDeliveryAddressAction {
  return {
    type: ActionTypes.SET_DELIVERY_ADDRESS,
    payload: {
      deliveryAddress
    }
  };
}

export function setPaymentAction(payment: Payment): SetPaymentAction {
  return {
    type: ActionTypes.SET_PAYMENT,
    payload: {
      payment
    }
  };
}

export function addProductsAction(products: ProductType[]): AddProductsAction {
  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: {
      products
    }
  };
}

export async function sendOrder(
  order: OrderState,
  dispatch: React.Dispatch<OrderActionTypes>
): Promise<OrderState> {
  dispatch({
    type: ActionTypes.ORDER_REQUESTED,
    payload: {
      order
    }
  });

  dispatch(setPaymentAction(order.payment));
  dispatch(setDeliveryAddressAction(order.deliveryAddress));
  dispatch(addProductsAction(order.products));

  // simulate api
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.ORDER_REQUEST_SUCCESS
      });
      resolve(order);
    }, 3000);
  });
}
