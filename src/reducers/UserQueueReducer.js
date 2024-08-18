import { actionTypes } from "./actionTypes";

export const initialState = {
  usersQueue: []
};

export function userQueueReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return { usersQueue: [...state.usersQueue, action.payload] };
    case actionTypes.ATTEND_USER:
      return { usersQueue: state.usersQueue.slice(1) };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
