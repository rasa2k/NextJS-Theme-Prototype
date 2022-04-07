import React, { ReactNode } from "react";
import { GlobalContext, useCombinedReducer } from "../../store/GlobalContext";
import { messageReducer, initialMessageState, IMessageState } from "../../store/Reducers/message";
import { userReducer, initialUserState, IUserState } from "../../store/Reducers/user";
import { progressesReducer, initialProgressState, IProgressState } from "../../store/Reducers/progress";
import { notificationReducer, initialNotificationState, INotificationState } from "../../store/Reducers/notification";

interface IProps {
  children: ReactNode;
}

export interface GlobalState {
  message: IMessageState | undefined;
  user: IUserState | undefined;
  progresses: IProgressState[] | undefined;
  notifications: INotificationState[] | undefined;
}

function AppWrapper({ children }: IProps) {
  const [state, dispatch] = useCombinedReducer({
    message: React.useReducer(messageReducer, initialMessageState),
    user: React.useReducer(userReducer, initialUserState),
    progresses: React.useReducer(progressesReducer, initialProgressState),
    notifications: React.useReducer(notificationReducer, initialNotificationState),
  });
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
}

export default AppWrapper;
