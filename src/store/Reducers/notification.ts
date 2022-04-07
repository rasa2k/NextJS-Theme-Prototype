import { ActionType } from "../ActionTypes";

enum ELocalStorage {
  NOTIFICATION = "notification",
}

export enum ENotificationTypes {
  NEWS = "News",
  WARNING = "Warning",
  ERROR = "Error",
  MAINTENANCE = "Maintenance",
}

export const NotificationType = {
  NEWS: ENotificationTypes.NEWS,
  WARNING: ENotificationTypes.WARNING,
  ERROR: ENotificationTypes.ERROR,
  MAINTENANCE: ENotificationTypes.MAINTENANCE,
};

export interface INotificationState {
  time: number;
  title: string;
  id?: string;
  message?: string;
  link?: string;
  linkLabel?: string;
  type?: ENotificationTypes;
}

export const initialNotificationState: any =
  typeof window !== "undefined" && localStorage.getItem(ELocalStorage.NOTIFICATION)
    ? JSON.parse(localStorage.getItem(ELocalStorage.NOTIFICATION)!)
    : [];

export interface notificationAction {
  type: ActionType.ADD_NOFITICATION_ITEM | ActionType.REMOVE_NOFITICATION_ITEM | ActionType.REMOVEALL_NOFITICATION_ITEM;
  data: INotificationState;
}

export const notificationReducer = (state: INotificationState[], action: notificationAction) => {
  switch (action.type) {
    case ActionType.ADD_NOFITICATION_ITEM:
      localStorage.setItem(ELocalStorage.NOTIFICATION, JSON.stringify([action.data, ...state]));
      return [action.data, ...state];

    case ActionType.REMOVE_NOFITICATION_ITEM:
      const removestate = state.filter((item) => {
        return item.id !== action.data.id;
      });
      return [...removestate];

    case ActionType.REMOVEALL_NOFITICATION_ITEM:
      localStorage.removeItem(ELocalStorage.NOTIFICATION);
      return [];

    default:
      return state;
  }
};
