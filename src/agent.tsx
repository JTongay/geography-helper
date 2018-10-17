import axios, { AxiosResponse } from 'axios';

const API_ROOT: string = 'https://restcountries.eu/rest/v2';

export const Request: { [key: string]: (val: string) => Promise<AxiosResponse<any>> } = {
  name: async (name: string) =>
    await axios.get(`${API_ROOT}/name/${name}`)
}