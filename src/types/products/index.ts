export type ProductItem = {
  id: string,
  brand: null | string,
  price: number,
  product: string,
}

export type ProductIds = {
  ids: string[],
}

export type GetItemsResult = { result: ProductItem[] }

export type GetIdsResult = { result: string[] }

export type PaginationParams = {
  offset: number,
  limit: number,
}

export type FilterParams = {
  [key: string]: string | number,
}