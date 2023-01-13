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
  departureDate?: Date;
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

// const a = {
//   assembly: "3.22.1214.1",
//   version: "2.20.1.22",
//   buildDate: "2022-12-14T11:01:12Z",
//   statusCode: 200,
//   success: true,
//   message: "3 airports fetched",
//   result: [
//     {
//       id: 7904,
//       icao: "OMDB",
//       iata: "DXB",
//       faa: null,
//       name: "Dubai Intl",
//       fullName: "(OMDB/DXB) Dubai Intl, Dubai, Dubai, United Arab Emirates",
//       country: { id: 71, name: "United Arab Emirates" },
//       state: { id: 1409, name: "Dubai" },
//       city: { id: 17091, name: "Dubai" },
//       fir: "OMAE",
//       uir: "OMAE",
//       magneticVariation: "E0020",
//       airportElevation: 62,
//       airportOfEntry: true,
//       latitude: { decimal: 25.252777777777776, dms: "025° 15' 10\" N" },
//       longitude: { decimal: 55.364444444444445, dms: "055° 21' 52\" E" },
//       distanceFromBaseAirport: 0.0,
//       priority: 1,
//     },
//     {
//       id: 7906,
//       icao: "OMDW",
//       iata: "DWC",
//       faa: null,
//       name: "Dubai/Al Maktoum Intl",
//       fullName:
//         "(OMDW/DWC) Dubai/Al Maktoum Intl, Jebel Ali, Dubai, United Arab Emirates",
//       country: { id: 71, name: "United Arab Emirates" },
//       state: { id: 1409, name: "Dubai" },
//       city: { id: 17092, name: "Jebel Ali" },
//       fir: "OMAE",
//       uir: "OMAE",
//       magneticVariation: "E0020",
//       airportElevation: 171,
//       airportOfEntry: true,
//       latitude: { decimal: 24.918333333333333, dms: "024° 55' 06\" N" },
//       longitude: { decimal: 55.175555555555555, dms: "055° 10' 32\" E" },
//       distanceFromBaseAirport: 0.0,
//       priority: 1,
//     },
//     {
//       id: 25949,
//       icao: "OMDM",
//       iata: "NHD",
//       faa: "A68",
//       name: "Dubai Minhad",
//       fullName: "(OMDM/NHD) Dubai Minhad, Dubai, Dubai, United Arab Emirates",
//       country: { id: 71, name: "United Arab Emirates" },
//       state: { id: 1409, name: "Dubai" },
//       city: { id: 17091, name: "Dubai" },
//       fir: "OMAE",
//       uir: "    ",
//       magneticVariation: "E0010",
//       airportElevation: 172,
//       airportOfEntry: false,
//       latitude: { decimal: 25.026833333333332, dms: "025° 01' 37\" N" },
//       longitude: { decimal: 55.366333333333337, dms: "055° 21' 59\" E" },
//       distanceFromBaseAirport: 0.0,
//       priority: 1,
//     },
//   ],
// };
