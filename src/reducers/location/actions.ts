import { UserLocationData } from './types';

export enum ActionTypes {
  IS_FETCHING = 'IS_FETCHING',
  SET_USER_LOCATION = 'SET_USER_LOCATION',
  REMOVE_USER_LOCATION = 'REMOVE_USER_LOCATION'
}

export function isFetchingAction(status: boolean) {
  return {
    type: ActionTypes.IS_FETCHING,
    payload: {
      status
    }
  };
}

export function setUserLocationAction(location: UserLocationData) {
  return {
    type: ActionTypes.SET_USER_LOCATION,
    payload: {
      location
    }
  };
}

export function removeUserLocationAction({
  userPermission
}: {
  userPermission: boolean;
}) {
  return {
    type: ActionTypes.REMOVE_USER_LOCATION,
    payload: {
      userPermission
    }
  };
}
