import { combineReducers } from "@reduxjs/toolkit";
import { issueReducer } from "./modules/issue/reducer";

export const reducers = combineReducers({
    issue: issueReducer
});

export type AppState = ReturnType<typeof reducers>;
