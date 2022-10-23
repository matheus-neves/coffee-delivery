import { CartItem } from './types';

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY'
}

export function addNewItemAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem
    }
  };
}

export function removeItemAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id
    }
  };
}

export function increaseItemQuantityAction(id: number) {
  return {
    type: ActionTypes.INCREASE_ITEM_QUANTITY,
    payload: {
      id
    }
  };
}

export function decreaseItemQuantityAction(id: number) {
  return {
    type: ActionTypes.DECREASE_ITEM_QUANTITY,
    payload: {
      id
    }
  };
}
