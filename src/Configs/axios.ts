import axios, { AxiosError } from "axios";
import { NETWORK_ERROR_CODE } from "../Utils/Constants";
import { ENVIRONMENTS, IS_DEV } from "../Utils/Constants/environments";
import { DefaultErrors } from "../Utils/Enums/errors.enums";
import { devLog } from "../Utils/Helpers";
import { toast } from "./toast";

const { API_SERVER } = ENVIRONMENTS;

if (IS_DEV) devLog.log("\n\nAPI_SERVER", API_SERVER);

const reqConfig = {
  baseURL: API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
};

const AXIOS = axios.create(reqConfig);

const errorHandler = (error: AxiosError | unknown) => {
  if (error instanceof AxiosError) {
    const networkErrorMessage =
      error?.code === NETWORK_ERROR_CODE
        ? DefaultErrors?.NETWORK_ERROR_MESSAGE
        : "";

    const msg =
      networkErrorMessage ||
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ((error?.response?.data?.message || "") as string);
    // eslint-disable-next-line no-alert
    if (msg?.length) toast.error(msg, { toastId: msg?.toString?.() });
    // }
  }

  return Promise.reject(error);
};

export const showErrorMessage = () => {
  AXIOS.interceptors.response.use(
    (response) => response,
    (error) => errorHandler(error),
  );
};
showErrorMessage();
export default AXIOS;
