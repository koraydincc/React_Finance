import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const footballApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.collectapi.com/',
        fetchFn: async (...args) => {
            await pause(500);
            return fetch(...args);
        }
    }),
    endpoints(builder){
        return {
            //bir şey çekmek istediğimizde query düzeltmek istediğimizde mutation
            fetchLeagues: builder.query({
                providesTags:['Leagues'],
                query: () => {
                    return {
                        url: 'sport/leaguesList',
                        method: 'GET',
                        headers: {
                            'Authorization': 'apikey 6ud0IklkJZizyzSRHnITGp:57xKVezYysTvOJ6USzaEIg'
                        }
                    };
                }
            })
        };
    }
});

export { footballApi };

export const { useFetchLeaguesQuery } = footballApi;
