import axios, { AxiosError } from "axios";
import { BASE_URL, MyApiError, TODO, handleError } from "./constants";

const axiosInstance = axios.create({
 baseURL: BASE_URL,
 withCredentials: true,
});

export const commonRequest = async (
 method: string,
 route: string,
 config: TODO,
 rejectWithValue: TODO,
 body?: TODO
) => {
 const requestConfig = {
  method,
  url: route,
  data: body,
  config,
 };
 try {
  const { data } = await axiosInstance(requestConfig);
  return data.data;
 } catch (error: TODO) {
  const axiosError = error as AxiosError<MyApiError>;
  return handleError(axiosError, rejectWithValue);
 }
};
