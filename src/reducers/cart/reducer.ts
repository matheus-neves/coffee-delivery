import { produce } from 'immer';
import { ActionTypes } from './actions';
import { CartState } from './types';

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, draft => {
        const foundIndex = draft.cartItems.findIndex(
          item => item.id === action.payload.newItem.id
        );
        if (foundIndex !== -1) {
          draft.cartItems[foundIndex] = action.payload.newItem;
          return;
        }

        draft.cartItems.push(action.payload.newItem);
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
    default:
      return state;
  }
}
