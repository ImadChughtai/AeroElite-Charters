interface AirportResponseType {
  assembly: string;
  version: string;
  buildDate: string;
  statusCode: number;
  success: boolean;
  message: string;
  result?: ResultEntity[] | null;
}
interface ResultEntity {
  id: number;
  icao: string;
  iata: string;
  faa?: string | null;
  name: string;
  fullName: string;
  country: CountryOrStateOrCity;
  state: CountryOrStateOrCity;
  city: CountryOrStateOrCity;
  fir: string;
  uir: string;
  magneticVariation: string;
  airportElevation: number;
  airportOfEntry: boolean;
  latitude: LatitudeOrLongitude;
  longitude: LatitudeOrLongitude;
  distanceFromBaseAirport: number;
  priority: number;
}
interface CountryOrStateOrCity {
  id: number;
  name: string;
}
interface LatitudeOrLongitude {
  decimal: number;
  dms: string;
}

interface TripApiResponse {
  assembly: string;
  version: string;
  buildDate: string;
  statusCode: number;
  success: boolean;
  message: string;
  result: Trip[] | Result;
}

export interface Result {
  [x: string]: any;
  trips: Trip[] | any;
  recommendationTrips: unknown[];
  tripAlertSent: unknown[];
}

export interface Trip {
  id: number;
  tripType: number;
  title: string;
  postedDate: string;
  departureAirport: unknown;
  arrivalAirport: unknown;
  fromDate?: string | null;
  toDate: unknown;
  companyId: unknown;
  company: unknown;
  tripCategoryId: number;
  tripCategory: TripCategory;
  budget: number | null;
  currency: unknown;
  hasQuoted: boolean;
  hasReplies: boolean;
  hasQuotationRequest: boolean;
  integrationSourceId: number;
  noOfPassenger?: number | null;
  integrationSource: unknown;
  createdByUser: unknown;
  tripQuotes: unknown[];
  tripReplies: unknown[];
}

export interface TripCategory {
  id: number;
  name: string;
}

export type { AirportResponseType, TripApiResponse };
