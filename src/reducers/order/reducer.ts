import { produce } from 'immer';
import { ActionTypes } from './actions';
import { OrderActionTypes, OrderStateReducer } from './types';

export const INITIAL_ORDER_STATE: OrderStateReducer = {
  loading: false,
  payment: {
    shipment: 0,
    totalProducts: 0,
    type: ''
  },
  products: [],
  deliveryAddress: {
    city: '',
    complement: '',
    district: '',
    number: '',
    state: '',
    street: '',
    zipCode: ''
  }
};

export function orderReducer(
  state = INITIAL_ORDER_STATE,
  action: OrderActionTypes
) {
  switch (action.type) {
    case ActionTypes.ORDER_REQUESTED:
      return produce(state, draft => {
        draft.loading = true;
      });

    case ActionTypes.ORDER_REQUEST_FAILED:
      return produce(state, draft => {
        draft.loading = false;
      });

    case ActionTypes.ORDER_REQUEST_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
      });

    case ActionTypes.ADD_PRODUCTS:
      return produce(state, draft => {
        draft.products = action.payload.products;
      });

    case ActionTypes.SET_DELIVERY_ADDRESS:
      return produce(state, draft => {
        draft.deliveryAddress = action.payload.deliveryAddress;
      });

    case ActionTypes.SET_PAYMENT:
      return produce(state, draft => {
        draft.payment = action.payload.payment;
      });

    default:
      return state;
  }
}
