export const ENVIRONMENTS = {
  NODE_ENV: String(process.env.NODE_ENV || "")
    ?.trim()
    .toLowerCase(),
  API_SERVER: process.env.API_SERVER || "https://dev.charterpad.com/serve/api",
};
// eslint-disable-next-line prefer-destructuring
export const NODE_ENV = ENVIRONMENTS.NODE_ENV || "development";

export const IS_DEV = NODE_ENV === "development";
