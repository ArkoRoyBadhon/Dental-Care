import { api } from "../../api/apiSlice";

const ServiceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/service/post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["image"],
    }),
    getServices: builder.query({
      query: () => ({
        url: `/api/v1/service/`,
      }),
      providesTags: ["image"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/api/v1/service/delete/${id}`,
        method: "DELETE",
      }), 
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useCreateServiceMutation, useGetServicesQuery, useDeleteServiceMutation } = ServiceApi;
