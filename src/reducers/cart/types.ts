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
    cartItem: CartItem | null;
  };
}

export type AddItemRequestedAction = {
  type: typeof ActionTypes.ADD_ITEM_REQUESTED;
  payload: {
    cartItem: CartItem;
  };
};

export type RemoveItemAction = {
  type: typeof ActionTypes.REMOVE_ITEM;
  payload: {
    id: number;
  };
};

export type AddItemSuccessAction = {
  type: typeof ActionTypes.ADD_ITEM_SUCCESS;
  payload: {
    cartItem: CartItem;
  };
};

export type AddItemFailedAction = {
  type: typeof ActionTypes.ADD_ITEM_FAILED;
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

export type ClearCartAction = {
  type: typeof ActionTypes.CLEAR_CART;
};

export type CartActionTypes =
  | RemoveItemAction
  | IncreaseItemQuantityAction
  | DecreaseItemQuantityAction
  | AddItemRequestedAction
  | AddItemSuccessAction
  | AddItemFailedAction
  | ClearCartAction;
