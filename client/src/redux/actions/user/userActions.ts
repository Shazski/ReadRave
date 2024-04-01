import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../../Interfaces/Iuser";
import { commonRequest } from "../../../config/axios";
import { config } from "../../../config/constants";

export const register = createAsyncThunk(
 "user/register",
 async (userCredentials: IUser, { rejectWithValue }) => {
  return commonRequest(
   "post",
   "/user/register",
   config,
   rejectWithValue,
   userCredentials
  );
 }
);
export const login = createAsyncThunk(
 "user/login",
 async (loginCredentials: IUser, { rejectWithValue }) => {
  return commonRequest(
   "post",
   "/user/login",
   config,
   rejectWithValue,
   loginCredentials
  );
 }
);
export const getUser = createAsyncThunk(
 "user/getUser",
 async (_, { rejectWithValue }) => {
  return commonRequest("get", "/user", config, rejectWithValue);
 }
);
export const logout = createAsyncThunk(
 "user/logout",
 async (_, { rejectWithValue }) => {
  return commonRequest("get", "/user/logout", config, rejectWithValue);
 }
);
