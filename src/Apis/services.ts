import https from "../Configs/axios";
import { AirportResponseType, TripApiResponse } from "../Utils/Types/api.types";

export const searchAirport = (name: string) =>
  https.get<AirportResponseType>(`/airport/${name}/keyword`);

export const searchTrips = ({
  airportId1,
  airportId2,
  departureDate,
  pageSize,
  pageNumber,
}: {
  airportId1?: number;
  airportId2?: number;
  departureDate?: string | null;
  pageSize?: number;
  pageNumber?: number;
}) =>
  https.get<TripApiResponse>(`/trip/search`, {
    params: {
      departureAirportId: airportId1,
      arrivalAirportId: airportId2,
      etd: departureDate,
      pageSize,
      pageNumber,
    },
  });
