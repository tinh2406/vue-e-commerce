import type { Product, ProductPreview } from '@/services'
import {
  addNewProduct,
  deleteProduct as apiDeleteProduct,
  getAllProducts,
  type ProductQuery
} from '@/services/product.service'
import { defineStore } from 'pinia'
import type { Actions, DataPagingList } from './datastore'

interface ProductPagingList extends DataPagingList<ProductPreview> {
  query: ProductQuery
}
interface ProductActions extends Actions {
  setQuery: (query: ProductQuery) => void
  add: (newData: Product) => void
  update: (id: string, updatedData: Product) => void
  resetState: () => void
}

export const useProductStore = defineStore<string, ProductPagingList, {}, ProductActions>(
  'product',
  {
    state: (): ProductPagingList => ({
      data: [],
      page: 1,
      page_size: 10,
      page_count: 1,
      item_count: 0,
      loading: false,
      error: null,
      query: {
        page: 1,
        page_size: 15,
        is_deleted: false
      }
    }),
    actions: {
      setQuery(query: ProductQuery) {
        this.query = query
        this.query.page = 1
        this.fetch()
      },
      async fetch() {
        this.loading = true
        this.error = null

        try {
          const response = await getAllProducts(this.query)
          console.log('🚀 ~ fetchProducts ~ response:', response)

          this.data = response.data
          this.page = response.page
          this.page_size = response.page_size
          this.page_count = response.page_count
          this.item_count = response.item_count
        } catch (error) {
          this.error = 'Failed to load products'
          console.error('Error fetching products:', error)
        } finally {
          this.loading = false
          console.log('Loading state:', this.loading) // Log the loading state
        }
      },

      // Add a function to load the next page of products
      async loadNextPage() {
        if (this.loading) return
        if (this.page_count && this.page < this.page_count) {
          this.loading = true
          this.error = null
          this.query.page = this.page + 1

          try {
            const response = await getAllProducts(this.query)

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

      async add(product: any) {
        this.loading = true
        this.error = null

        try {
          const response = await addNewProduct(product)
        } catch (error) {
          this.error = 'Failed to add product'
          console.error('Failed to add product', { error })
        } finally {
          this.loading = false
        }
      },
      async update(productId: string, product: any) {
        this.loading = true
        this.error = null

        try {
          // const response = await apiUpdateProduct(product)
          // const index = this.products.findIndex((p) => p.id === response.id)
          // if (index !== -1) {
          //   this.products[index] = response
          // }
          // this.selectedProduct = response // Update the selected product
        } catch (error) {
          this.error = 'Failed to update product'
          console.error('Error updating product:', error)
        } finally {
          this.loading = false
        }
      },
      async delete(productId: string) {
        this.loading = true
        this.error = null

        try {
          await apiDeleteProduct(productId)
          // this.products = this.products.filter((product) => product.id !== productId)
        } catch (error) {
          this.error = 'Failed to delete product'
          console.error('Error deleting product:', error)
        } finally {
          this.loading = false
        }
      },

      // Reset the state
      resetState() {
        this.page = 1
        this.page_size = 10
        this.page_count = 1
        this.item_count = 0
        this.data = []
        this.loading = false
        this.error = null
      },
      resetQuery() {
        this.setQuery({
          page: 1,
          page_size: 15,
          is_deleted: false
        })
      }
    }
  }
)
