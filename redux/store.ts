/**
 * Referrence: Redux Toolkit TypeScript Quick Start
 * https://redux-toolkit.js.org/tutorials/typescript
 */

import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice";

const store = configureStore({
  reducer: {
    messageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;