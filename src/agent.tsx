import axios, { AxiosResponse } from 'axios';

const API_ROOT: string = 'https://restcountries.eu/rest/v2';

/**
 * Documentation: https://restcountries.eu/
 */

export const Request: { [key: string]: (val: string) => Promise<AxiosResponse<any>> } = {
  alpha3: async (alpha: string) =>
    await axios.get(`${API_ROOT}/alpha/${alpha}`),
  name: async (name: string) =>
    await axios.get(`${API_ROOT}/name/${name}`)
}
