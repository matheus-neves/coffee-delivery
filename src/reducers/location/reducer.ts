import { produce } from 'immer';
import { ActionTypes } from './actions';
import { LocationState } from './types';

export const INITIAL_LOCATION_STATE: LocationState = {
  userLocation: {
    data: null,
    userPermission: false
  },
  isLoading: true
};

export function locationReducer(state = INITIAL_LOCATION_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.SET_USER_LOCATION:
      return produce(state, draft => {
        draft.userLocation = {
          data: action.payload.location,
          userPermission: true
        };
      });
    case ActionTypes.REMOVE_USER_LOCATION:
      console.log(action);
      console.log(action.payload.userPermission);
      return produce(state, draft => {
        draft.userLocation = {
          data: null,
          userPermission: action.payload.userPermission
        };
        draft.isLoading = false;
      });
    case ActionTypes.IS_FETCHING:
      return produce(state, draft => {
        draft.isLoading = action.status;
      });
    default:
      return state;
  }
}
