import { createContext, Context } from "react";
import { ActionType } from "./ActionTypes";
import { GlobalState } from "../components/AppWrapper/AppWrapper";

// @ts-ignore
export const GlobalContext: Context<[GlobalState, GlobalDispatch]> = createContext(null);

export interface IGlobalContext {
  state: GlobalState;
  dispatch: GlobalDispatch;
}

export interface GlobalDispatchArgs {
  type: ActionType;
  data?: any;
  [key: string]: any;
}

export interface GlobalDispatch {
  ({ type, data }: GlobalDispatchArgs): void;
}

export const useCombinedReducer = (useReducers: Record<string, any[]>): [GlobalState, GlobalDispatch] => {
  const _state = Object.keys(useReducers).reduce((acc, key) => ({ ...acc, [key]: useReducers[key][0] }), {});
  const state = _state as unknown as GlobalState;

  const dispatch = (action: GlobalDispatchArgs) => {
    Object.keys(useReducers)
      .map((key) => useReducers[key][1])
      .forEach((fn) => fn(action));
  };
  //console.log("useCombinedReducer: state", state);
  return [state, dispatch];
};

export default useCombinedReducer;
