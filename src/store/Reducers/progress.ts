import { ActionType } from "../ActionTypes";

export interface IProgressState {
  title: string;
  progressValue: number;
  browserStep?: number;
  id: string;
  operationId?: string;
  error?: boolean;
  done?: boolean;
}

export const initialProgressState: any = [];

export interface progressAction {
  type:
    | ActionType.ADD_PROGRESS_ITEM
    | ActionType.REMOVE_PROGRESS_ITEM
    | ActionType.UPDATE_PROGRESS_ITEM
    | ActionType.TOGGLE_PROGRESS_ITEM;
  data: IProgressState;
}
export const progressesReducer = (state: IProgressState[], action: progressAction) => {
  switch (action.type) {
    case ActionType.ADD_PROGRESS_ITEM:
      return [action.data, ...state];

    case ActionType.REMOVE_PROGRESS_ITEM:
      const removestate = state.filter((item) => {
        return item.id !== action.data.id;
      });
      return [...removestate];

    case ActionType.UPDATE_PROGRESS_ITEM:
      const updatestate = state.map((item) => {
        if (item.id !== action.data.id) {
          return item;
        } else {
          return action.data;
        }
      });
      return [...updatestate];

    case ActionType.TOGGLE_PROGRESS_ITEM:
      const togglestate = state.map((item) => {
        if (item.id !== action.data.id) {
          return item;
        } else {
          return { ...action.data, done: !action.data.done };
        }
      });
      return [...togglestate];

    default:
      return state;
  }
};
