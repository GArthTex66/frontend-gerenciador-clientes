import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { User } from '@/models/user.model';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<{data:User[]},void>({
            query: () => '/users',
        }),
    }),
});


export const { useGetUsersQuery } = usersApi;
