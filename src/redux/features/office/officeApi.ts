import { api } from "../../api/apiSlice";

const OfficeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query({
      query: () => ({
        url: `/api/v1/office/`,
      }),
      providesTags: ["image"],
    }),
    createImages: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/office/post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useCreateImagesMutation, useGetImagesQuery } = OfficeApi;
