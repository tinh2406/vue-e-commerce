import { api } from '.'
import { ContentType, type Category, type ProductPreview } from './api'

export interface ProductBody {
  category: number
  name: string
  slug?: string | undefined
  description: string
  price: string
  sell_price: string
  on_sell?: boolean | undefined
  stock: number
  image?: File | null | undefined
}

export interface ProductFile {
  file: File
}

export interface ProductQuery {
  keyword?: string
  category_id?: string
  is_deleted?: boolean
  created_from?: Date
  created_to?: Date
  price_from?: number
  price_to?: number
  delete_from?: Date
  delete_to?: Date
  order_by?: string
  order_type?: string
  page_size?: number
  page?: number
}

// Fetch all products
export const getAllProducts = async (query: ProductQuery): Promise<any> => {
  try {
    const response = await api.products.productsList(query)
    return response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw new Error('Failed to fetch products')
  }
}

export const addNewProduct = async (productData: ProductBody) => {
  try {
    const response = await api.products.productsCreate(productData)

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProductById = async (productId: string) => {
  try {
    const response = await api.products.productsRead(productId)
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const updateProduct = async (productData: any) => {
  try {
    if (!productData.id) {
      throw new Error('Product ID is required')
    }
    if (productData.image instanceof File) {
      /* empty */
    } else {
      delete productData.image
    }
    const response = await api.products.productsUpdate(productData.id, productData)
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const response = await api.products.productsDelete(productId)
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export interface CategoryQuery {
  keyword?: string
  parent_id?: string
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

export const getAllCategories = async (query: CategoryQuery) => {
  try {
    const response = await api.products.categoriesList(query)
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export const getCategoryById = async (id: number) => {
  try {
    const response = await api.products.productsCategoriesRead(id)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const addNewCategory = async (category: Category) => {
  try {
    const response = await api.products.productsCategoriesCreate(category, {
      headers: {
        'Content-Type': ContentType.Json
      }
    })
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export const updateCategory = async (categoryId: string, category: Category) => {
  try {
    const response = await api.products.categoriesUpdate(categoryId, category, {
      headers: {
        'Content-Type': ContentType.Json
      }
    })
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export const deleteCategory = async (categoryId: string) => {
  try {
    const response = await api.products.categoriesDelete(categoryId)
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}
