import {
  CartActionTypes,
  CartItem,
  DecreaseItemQuantityAction,
  IncreaseItemQuantityAction,
  RemoveNewItemAction
} from './types';

export enum ActionTypes {
  ADD_NEW_ITEM_REQUESTED = 'ADD_NEW_ITEM_REQUESTED',
  ADD_NEW_ITEM_SUCCESS = 'ADD_NEW_ITEM_SUCCESS',
  ADD_NEW_ITEM_FAILED = 'ADD_NEW_ITEM_FAILED',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY'
}

export async function saveNewItemToCart(
  newItem: CartItem,
  dispatch: React.Dispatch<CartActionTypes>
): Promise<CartItem | void> {
  dispatch({
    type: ActionTypes.ADD_NEW_ITEM_REQUESTED,
    payload: {
      newItem
    }
  });

  // simulate api
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.ADD_NEW_ITEM_SUCCESS
      });
      resolve(newItem);
    }, 1000);
  });
}

export function removeItemAction(id: number): RemoveNewItemAction {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id
    }
  };
}

export function increaseItemQuantityAction(
  id: number
): IncreaseItemQuantityAction {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      id
    }
  };
}

export function decreaseItemQuantityAction(
  id: number
): DecreaseItemQuantityAction {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      id
    }
  };
}
