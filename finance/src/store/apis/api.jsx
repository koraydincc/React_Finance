import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const usersApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(500);
            return fetch(...args);
        }
    }),
    endpoints(builder){
        return {
            fetchUsers: builder.query({
                providesTags:['Users'],
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET'
                       
                    };
                }
            })
        };
    }
});

export { usersApi };

export const { useFetchUsersQuery } = usersApi;
