import { produce } from 'immer';
import { ActionTypes } from './actions';
import { CartActionTypes, CartState } from './types';

export const INITIAL_CART_STATE: CartState = {
  cartItems: [],
  loading: {
    cartItem: null
  }
};

export function cartReducer(
  state = INITIAL_CART_STATE,
  action: CartActionTypes
) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_REQUESTED:
      return produce(state, draft => {
        draft.loading = {
          cartItem: action.payload.cartItem
        };
      });

    case ActionTypes.ADD_ITEM_SUCCESS:
      return produce(state, draft => {
        const foundIndex = draft.cartItems.findIndex(
          item => item.id === action.payload.cartItem.id
        );

        if (foundIndex !== -1) {
          draft.cartItems[foundIndex] = action.payload.cartItem;
          draft.loading = {
            cartItem: action.payload.cartItem
          };

          return;
        }

        draft.cartItems.push(action.payload.cartItem);
        draft.loading = {
          cartItem: null
        };
      });

    case ActionTypes.REMOVE_ITEM:
      return produce(state, draft => {
        const foundIndex = draft.cartItems.findIndex(
          item => item.id === action.payload.id
        );
        draft.cartItems.splice(foundIndex, 1);
      });

    case ActionTypes.INCREASE_ITEM_QUANTITY:
      return produce(state, draft => {
        const foundIndex = draft.cartItems.findIndex(
          item => item.id === action.payload.id
        );
        draft.cartItems[foundIndex].quantity =
          draft.cartItems[foundIndex].quantity + 1;
      });

    case ActionTypes.DECREASE_ITEM_QUANTITY:
      return produce(state, draft => {
        const foundIndex = draft.cartItems.findIndex(
          item => item.id === action.payload.id
        );

        const itemQtd = draft.cartItems[foundIndex].quantity;

        if (itemQtd === 1) {
          draft.cartItems.splice(foundIndex, 1);
          return;
        }
        draft.cartItems[foundIndex].quantity = itemQtd - 1;
      });

    case ActionTypes.CLEAR_CART:
      return INITIAL_CART_STATE;

    default:
      return state;
  }
}
