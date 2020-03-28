import { combineReducers } from "redux";
import { postsRecuder } from "./postsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  posts: postsRecuder,
  app: appReducer
});
