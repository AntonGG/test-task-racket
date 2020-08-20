import { combineReducers } from "@reduxjs/toolkit";

import PanelReducer from "./panelReducer";
import App from "./app";

const rootReducer = combineReducers({ PanelReducer, App });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
