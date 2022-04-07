import { ActionType } from "../ActionTypes";

export interface IUserState {
  id: string;
  username: string;
  fullname: string;
  initials: string;
  email: string;
}

export const initialUserState: any = null;

export interface userAction {
  type: ActionType.SET_USER | ActionType.UNSET_USER;
  data: IUserState;
}

export const userReducer = (state: IUserState, action: userAction) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return action.data;

    case ActionType.UNSET_USER:
      return initialUserState;

    default:
      return state;
  }
};
