import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./reducers/book/bookSlice";
import userslice from "./reducers/user/userslice";

const reducer = combineReducers({
 book: bookSlice,
 user: userslice,
});

export const store = configureStore({
 reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
