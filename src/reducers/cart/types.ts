import { ActionTypes } from './actions';

export interface CartItem {
  id: number;
  src: string;
  title: string;
  quantity: number;
  price: number;
  formattedPrice: string;
}

export interface CartState {
  cartItems: CartItem[];
  loading: {
    cartId: number | null;
  };
}

export type AddNewItemRequestedAction = {
  type: typeof ActionTypes.ADD_NEW_ITEM_REQUESTED;
  payload: {
    newItem: CartItem;
  };
};

export type RemoveNewItemAction = {
  type: typeof ActionTypes.REMOVE_ITEM;
  payload: {
    id: number;
  };
};

export type AddNewItemSuccessAction = {
  type: typeof ActionTypes.ADD_NEW_ITEM_SUCCESS;
};

export type AddNewItemFailedAction = {
  type: typeof ActionTypes.ADD_NEW_ITEM_FAILED;
};

export type IncreaseItemQuantityAction = {
  type: typeof ActionTypes.INCREASE_ITEM_QUANTITY;
  payload: {
    id: number;
  };
};

export type DecreaseItemQuantityAction = {
  type: typeof ActionTypes.DECREASE_ITEM_QUANTITY;
  payload: {
    id: number;
  };
};

export type CartActionTypes =
  | RemoveNewItemAction
  | IncreaseItemQuantityAction
  | DecreaseItemQuantityAction
  | AddNewItemRequestedAction
  | AddNewItemSuccessAction
  | AddNewItemFailedAction;
