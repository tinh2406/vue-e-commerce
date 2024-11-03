export interface DataQuery {
  keyword?: string
  is_deleted?: boolean
  created_from?: Date
  created_to?: Date
  delete_from?: Date
  delete_to?: Date
  order_by?: string
  order_type?: string
  page_size?: number
  page?: number
}

export interface DataPagingList<T = any> {
  data: T[]
  page: number
  page_size: number
  page_count?: number
  item_count: number
  loading: boolean
  error: string | null
  query: DataQuery
}

export interface Actions {
  setQuery: (query: DataQuery) => void
  fetch: () => void
  loadNextPage: () => void
  add: (newData: any) => void
  update: (id: string, updatedData: any) => void
  delete: (id: string) => void
  resetState: () => void
  resetQuery: () => void
}

import { type StoreDefinition } from 'pinia'

export type useDataStore = StoreDefinition<string, DataPagingList, {}, Actions>
