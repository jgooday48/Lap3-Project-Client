import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://reddy-server-33.onrender.com/"})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User"], //potentially add notes here?
    endpoints: (builder) => ({}),
})
