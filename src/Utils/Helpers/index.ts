import { IS_DEV } from "../Constants/environments";
import { AirportResponseType } from "../Types/api.types";

export const devFunction = (func: () => void) => {
  if (IS_DEV && typeof func === "function") {
    func();
  }
};
export const prodFunction = (func: () => void) => {
  if (!IS_DEV && typeof func === "function") {
    func();
  }
};

export const devLog = {
  // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  error: (...args: any) => devFunction(() => console.error(...args)),
  // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  warn: (...args: any) => devFunction(() => console.warn(...args)),
  // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  log: (...args: any) => devFunction(() => console.log(...args)),
};

export const transformAirportsLabel = (data: AirportResponseType) => {
  if (!data.result?.length) return [];
  return data.result?.map((d) => {
    const divider = d?.icao?.length ? "/" : "";
    const iAta = d?.iata ? `${divider}${d?.iata}` : "";
    return {
      label: `(${d?.icao}${iAta}) ${d?.name}`,
      id: d?.id,
    };
  });
};
