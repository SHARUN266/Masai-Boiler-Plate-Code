// First install react-toolkit
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const UserAPI = createApi({
  reducerPath: "UserApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mock15-bhoj.onrender.com/",
  }),

    createTicket: builder.mutation({
      query: (data) => ({
        url: "/",
        body: data,
        method: "POST",
      }),
    }),
    getUser: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        body: data,
        method: "POST",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export default UserAPI;
export const { useAllTicketQuery, useCreateUserMutation, useGetUserMutation,useCreateTicketMutation } =
  UserAPI;


// This is Store folder
import {configureStore} from "@reduxjs/toolkit"

import UserAPI from "./UserAPI"
const store=configureStore({
    reducer:{
        [UserAPI.reducerPath]:UserAPI.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(UserAPI.middleware)


})


export default store
