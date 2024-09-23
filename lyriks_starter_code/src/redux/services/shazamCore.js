import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazameCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', '*');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/chart' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;