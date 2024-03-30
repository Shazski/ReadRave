import { AxiosError } from "axios";

export const BASE_URL = "http://localhost:3000/api/v1"; //base url of server
export type TODO = any; // to vanish any from code
export interface MyApiError {
 // custom type for api error
 message: string;
 autherisationFailed: boolean;
 userBlocked: boolean;
}
export const config = {
 //config for headers
 headers: {
  "Content-Type": "application/json",
 },
 withCredentials: true,
 credentials: "include",
};

export const handleError = async (
 error: AxiosError<MyApiError>,
 rejectWithValue: (value: string | unknown) => string | unknown
) => {
 if (error.response && error.response.data.message) {
  return rejectWithValue(error.response.data.message);
 } else {
  return rejectWithValue(error.message);
 }
};
