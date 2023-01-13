/** ALL THE ENDPOINTS WILL BE WRITTEN HERE AND EXPORTED
 * we dont need to write base because we've alredy configured it in axios.
 *  */
const apiURL = `${process.env.API_URL || ""}`;

export const AIRPORT_API = `${apiURL}/airport`;
export const TRIP_API = `${apiURL}/trip`;
