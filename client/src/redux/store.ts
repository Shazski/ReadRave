import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./reducers/book/bookSlice";

const reducer = combineReducers({
 book: bookSlice,
});

export const store = configureStore({
 reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
