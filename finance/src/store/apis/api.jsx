import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { nanoid } from '@reduxjs/toolkit';


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
                providesTags:['User'],
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET'
                       
                    };
                }
            }),
            addUser: builder.mutation({
                invalidatesTags: () => {
                    return [{type: 'User'}]
                },
                query: () => {
                    return {
                        url: '/users',
                        method: 'POST',
                        body: {
                            id: nanoid(),
                            name: faker.person.fullName()
                        }
                    }
                }

            }),
            removeUser: builder.mutation({
                invalidatesTags: () => {
                    return [{type: 'User'}]
                },
                query: (user) => {
                    return {
                        url: `/users/${user.id}`,
                        method:'DELETE'
                    }
                }
            })
        };
    }
});

export { usersApi };

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation} = usersApi;
