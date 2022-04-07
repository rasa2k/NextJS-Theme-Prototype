import { ActionType } from "../ActionTypes";

export enum EMessageType {
  SUCCES = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}

export const MessageType = {
  SUCCES: EMessageType.SUCCES,
  WARNING: EMessageType.WARNING,
  ERROR: EMessageType.ERROR,
  INFO: EMessageType.INFO,
};

export interface IMessageState {
  message: string;
  messagetype: EMessageType;
  messageshow: boolean;
}

export const initialMessageState: IMessageState = {
  message: "",
  messagetype: EMessageType.INFO,
  messageshow: false,
};
export interface messageAction {
  type: ActionType.SET_MESSAGE | ActionType.SET_MESSAGE_SHOW;
  data: IMessageState;
}

export const messageReducer = (state: IMessageState, action: messageAction) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE_SHOW:
      return action.data;

    case ActionType.SET_MESSAGE:
      return action.data;

    default:
      return state;
  }
};
