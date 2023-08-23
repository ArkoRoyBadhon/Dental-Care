import { api } from "../../api/apiSlice";

const OfficeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createImages: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/office/post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["image"],
    }),
    getImages: builder.query({
      query: () => ({
        url: `/api/v1/office/`,
      }),
      providesTags: ["image"],
    }),
    deleteImage: builder.mutation({
      query: (id) => ({
        url: `/api/v1/office/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useCreateImagesMutation, useGetImagesQuery, useDeleteImageMutation } = OfficeApi;
