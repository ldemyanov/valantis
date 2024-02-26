import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getMD5PasswordWithTimestamp } from '../../utils/time'
import type { FilterParams, GetBrandsResult, GetIdsResult, GetItemsResult, PaginationParams, ProductIds } from '../../types/products';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://api.valantis.store:40000/',
  prepareHeaders: (headers) => {
    headers.set('X-Auth', getMD5PasswordWithTimestamp());
    return headers
  },
})

type BaseQueryWithReauth = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>

const baseQueryWithRepeats: BaseQueryWithReauth = async (args, api, extraOptions) => {
  const repeats = 10;
  let i = 0;
  let result = await baseQuery(args, api, extraOptions);

  while (i++ < repeats && result.error) {
    console.error(result.error.data, result.error);
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
}

export const valantisApi = createApi({
  reducerPath: 'valantis',
  baseQuery: baseQueryWithRepeats,
  endpoints: (builder) => ({
    getIds: builder.query<GetIdsResult, PaginationParams>({
      query: (params) => ({
        url: '',
        method: 'POST',
        body: {
          action: "get_ids",
          params
        },
      }),
    }),
    getIdsByFilter: builder.query<GetIdsResult, FilterParams>({
      query: (params) => ({
        url: '',
        method: 'POST',
        body: {
          action: "filter",
          params
        }
      })
    }),
    getItems: builder.query<GetItemsResult, ProductIds>({
      query: (params) => ({
        url: '',
        method: 'POST',
        body: {
          action: "get_items",
          params
        },
        responseHandler: async (response) => {
          const data: GetItemsResult = await response.json();
          const result = data.result.filter((element, index) => (
            data.result.findIndex((el) => el.id === element.id) === index
          )).slice(0, 50);
          return { result }
        }
      }),
    }),
    getBrands: builder.query<GetBrandsResult, void>({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          action: "get_fields",
          params: { "field": "brand" }
        },
        responseHandler: async (response) => {
          const data: GetBrandsResult = await response.json();
          const filteredData = data.result.filter((v) => !!v);
          const result = Array.from(new Set(filteredData));
          return { result };
        }
      })
    })
  }),
})

export const { useGetIdsQuery, useGetItemsQuery, useGetIdsByFilterQuery, useGetBrandsQuery } = valantisApi;