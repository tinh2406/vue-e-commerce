import {
  addNewCategory,
  deleteCategory as apiDeleteCategory,
  getAllCategories,
  updateCategory as apiUpdateCategory,
  type CategoryQuery
} from '@/services/product.service'
import type { Category } from './../services/api'
import { defineStore } from 'pinia'
import type { Actions, DataPagingList } from './datastore'

interface CategoryPagingList extends DataPagingList<Category> {}
interface CategoryActions extends Actions {
  setQuery: (query: CategoryQuery) => void
  add: (newData: Category) => void
  update: (id: string, updatedData: Category) => void
  resetState: () => void
}
export const useCategoryStore = defineStore<string, CategoryPagingList, {}, CategoryActions>(
  'category',
  {
    state: (): CategoryPagingList => ({
      data: [],
      page: 1,
      page_size: 10,
      page_count: undefined,
      item_count: 0,
      loading: false,
      error: null,
      query: {
        page: 1,
        page_size: 10,
        is_deleted: false
      }
    }),
    actions: {
      setQuery(query: CategoryQuery) {
        this.query = query
        this.query.page = 1
        this.fetch()
      },

      async fetch() {
        this.loading = true
        this.error = null

        try {
          const response = await getAllCategories(this.query)

          this.data = response.data
          this.page = response.page
          this.page_size = response.page_size
          this.page_count = response.page_count
          this.item_count = response.item_count
        } catch (error) {
          this.error = 'Failed to load categories'
          console.error('Error fetching categories:', error)
        } finally {
          this.loading = false
        }
      },

      async loadNextPage() {
        if (this.loading) return
        if (this.page_count && this.page < this.page_count) {
          this.loading = true
          this.error = null
          this.query.page = this.page + 1

          try {
            const response = await getAllCategories(this.query)

            this.data = this.data.concat(response.data)
            this.page = response.page
            this.page_size = response.page_size
            this.page_count = response.page_count
            this.item_count = response.item_count
          } catch (error) {
            this.error = 'Failed to load categories'
            console.error('Error fetching categories:', error)
          } finally {
            this.loading = false
          }
        }
      },

      async add(newCategory: Category) {
        this.loading = true
        this.error = null

        try {
          const response = await addNewCategory(newCategory)
          this.data.push(response)
        } catch (error) {
          this.error = 'Failed to add category'
          console.error('Error adding category:', error)
        } finally {
          this.loading = false
        }
      },

      async update(categoryId: string, updatedCategory: Category) {
        this.loading = true
        this.error = null

        try {
          const response = await apiUpdateCategory(categoryId, updatedCategory)
          const index = this.data.findIndex((category) => category.id === categoryId)
          if (index !== -1) {
            this.data.splice(index, 1, response)
          }
        } catch (error) {
          this.error = 'Failed to update category'
          console.error('Error updating category:', error)
        } finally {
          this.loading = false
        }
      },

      async delete(categoryId: string) {
        this.loading = true
        this.error = null

        try {
          await apiDeleteCategory(categoryId)
          this.data = this.data.filter((category) => category.id !== categoryId)
        } catch (error) {
          this.error = 'Failed to delete category'
          console.error('Error deleting category:', error)
        } finally {
          this.loading = false
        }
      },

      resetState() {
        this.data = []
        this.page = 1
        this.page_size = 10
        this.page_count = 1
        this.item_count = 0
        this.loading = false
        this.error = null
      },
      resetQuery() {
        this.query = {
          page: 1,
          page_size: 10,
          is_deleted: false
        }
      }
    }
  }
)
