/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Login {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string
  /**
   * Password
   * @minLength 1
   */
  password: string
}

export interface LoginResponse {
  /**
   * Access token
   * @minLength 1
   */
  token: string

  user: {
    id: string
    username: string
    email: string
    role: string
  }
}

export interface Register {
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string
  /**
   * Password
   * @minLength 1
   */
  password: string
  /**
   * Repassword
   * @minLength 1
   */
  re_password: string
}

export interface RefreshToken {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string
}

export interface AddToCart {
  /** Product id */
  product_id: number
  /**
   * Quantity
   * @min 1
   */
  quantity: number
}

export interface OrderItem {
  /** ID */
  id?: number
  /** Product */
  product: number
  /**
   * Quantity
   * @min 0
   * @max 4294967295
   */
  quantity: number
  /**
   * Price at purchase
   * @format decimal
   */
  price_at_purchase?: string
}

export interface Order {
  /** ID */
  id?: number
  /** User */
  user?: number
  /** Status */
  status?: 'pd' | 'sb' | 'pr' | 'de' | 'cp' | 'df' | 'cn'
  /** Total price */
  total_price?: string
  /**
   * Address
   * @minLength 1
   */
  address?: string
  items?: OrderItem[]
}

export interface AddOrderItem {
  /** Product */
  product: number
  /**
   * Quantity
   * @min 1
   */
  quantity: number
}

export interface OrderStatusUpdate {
  /** Status */
  status?: 'pd' | 'sb' | 'pr' | 'de' | 'cp' | 'df' | 'cn'
}

export interface Category {
  /** ID */
  id?: string
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string

  /**
   * Parent ID
   * @format parent_id
   * @maxLength 50
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  parent_id?: string
}

export interface ProductPreview {
  /** ID */
  id: string
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string
  /**
   * Description
   * @minLength 1
   */
  description: string
  /**
   * Price
   * @format decimal
   */
  price: number
  /**
   * Sell price
   * @format decimal
   */
  hot_price: number
  /**
   * Image
   * @format uri
   */
  thumbnail: string
  /**
   * Created at
   * @format date-time
   */
  created_at?: string
  /**
   * Deleted at
   * @format date-time
   */
  deleted_at?: string
}
export interface Product extends ProductPreview {
  updated_at?: string
  category?: string
  images?: string[]
  attributes?: Record<string, string[]>
  variants?: {
    hot_price: number
    price: number
    stock: number
    image: string
    attributes: Record<string, string>
  }[]
}

export interface Review {
  /** ID */
  id?: number
  /** Product */
  product: number
  /** User */
  user?: number
  /**
   * Rating
   * @min 0
   * @max 4294967295
   */
  rating: number
  /** Comment */
  comment?: string
  /**
   * Created at
   * @format date-time
   */
  created_at?: string
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string
}

export interface UserList {
  /** ID */
  id?: number
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string
  /**
   * Username
   * @minLength 1
   * @maxLength 100
   */
  username: string
  /** Role */
  role?: 'admin' | 'user' | 'staff'
  /** Is active */
  is_active?: boolean
  /**
   * Date joined
   * @format date-time
   */
  date_joined?: string
}

export interface ChangePassword {
  /**
   * Old password
   * @minLength 1
   */
  old_password: string
  /**
   * New password
   * @minLength 1
   */
  new_password: string
}

export interface UserProfile {
  id: string
  name: string
  email: string
  birthday: string
  phone: string
  gender: string
  gender_name: string
  image: string
  role: number
  role_name: string
  created_at: string
  updated_at: string
  deleted_at: string
  banned_at: string
}

export interface UserSupportDetail {
  /**
   * First name
   * @maxLength 30
   */
  first_name?: string
  /**
   * Last name
   * @maxLength 30
   */
  last_name?: string
  /** Bio */
  bio?: string
  /**
   * Profile picture
   * @format uri
   */
  profile_picture?: string | null
  /**
   * Phone number
   * @maxLength 15
   */
  phone_number?: string
  /** Address */
  address?: string
}

export interface UserDetail {
  /** ID */
  id?: number
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string
  /**
   * Username
   * @minLength 1
   * @maxLength 100
   */
  username: string
  /** Role */
  role?: 'admin' | 'user' | 'staff'
  /** Is active */
  is_active?: boolean
  /**
   * Date joined
   * @format date-time
   */
  date_joined?: string
  /**
   * Last login
   * @format date-time
   */
  last_login?: string | null
  profile?: UserSupportDetail
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://127.0.0.1:8000/api'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title E-Commerce API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://127.0.0.1:8000/api
 * @contact <nhan.nguyenvan@paradox.ai>
 *
 * API documentation for E-Commerce project
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthLoginCreate
     * @request POST:/auth/login/
     * @secure
     */
    authLoginCreate: (data: Login, params: RequestParams = {}) =>
      this.request<LoginResponse, void>({
        path: `/login`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthLogoutCreate
     * @request POST:/auth/logout/
     * @secure
     */
    authLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout/`,
        method: 'POST',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegisterCreate
     * @request POST:/auth/register/
     * @secure
     */
    authRegisterCreate: (data: Register, params: RequestParams = {}) =>
      this.request<Register, any>({
        path: `/register`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthTokenRefreshCreate
     * @request POST:/auth/token/refresh/
     * @secure
     */
    authTokenRefreshCreate: (data: RefreshToken, params: RequestParams = {}) =>
      this.request<RefreshToken, any>({
        path: `/auth/token/refresh/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  }
  carts = {
    /**
     * No description
     *
     * @tags Cart
     * @name CartsList
     * @request GET:/carts/
     * @secure
     */
    cartsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/carts/`,
        method: 'GET',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartsAddCreate
     * @request POST:/carts/add/
     * @secure
     */
    cartsAddCreate: (data: AddToCart, params: RequestParams = {}) =>
      this.request<AddToCart, any>({
        path: `/carts/add/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Cart
     * @name CartsRemoveDelete
     * @request DELETE:/carts/remove/{product_id}/
     * @secure
     */
    cartsRemoveDelete: (productId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/carts/remove/${productId}/`,
        method: 'DELETE',
        secure: true,
        ...params
      })
  }
  orders = {
    /**
     * No description
     *
     * @tags Order
     * @name OrdersList
     * @request GET:/orders/
     * @secure
     */
    ordersList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number
          /** @format uri */
          next?: string | null
          /** @format uri */
          previous?: string | null
          results: Order[]
        },
        any
      >({
        path: `/orders/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersCreate
     * @request POST:/orders/
     * @secure
     */
    ordersCreate: (data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/orders/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersRead
     * @request GET:/orders/{id}/
     * @secure
     */
    ordersRead: (id: number, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/orders/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersUpdate
     * @request PUT:/orders/{id}/
     * @secure
     */
    ordersUpdate: (id: number, data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/orders/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersPartialUpdate
     * @request PATCH:/orders/{id}/
     * @secure
     */
    ordersPartialUpdate: (id: number, data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/orders/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersDelete
     * @request DELETE:/orders/{id}/
     * @secure
     */
    ordersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orders/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersAddCreate
     * @request POST:/orders/{order_id}/add/
     * @secure
     */
    ordersAddCreate: (orderId: string, data: AddOrderItem, params: RequestParams = {}) =>
      this.request<AddOrderItem, any>({
        path: `/orders/${orderId}/add/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersRemoveDelete
     * @request DELETE:/orders/{order_id}/remove/{product_id}
     * @secure
     */
    ordersRemoveDelete: (orderId: string, productId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orders/${orderId}/remove/${productId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrdersUpdateStatusCreate
     * @request POST:/orders/{order_id}/update-status/
     * @secure
     */
    ordersUpdateStatusCreate: (
      orderId: string,
      data: OrderStatusUpdate,
      params: RequestParams = {}
    ) =>
      this.request<OrderStatusUpdate, any>({
        path: `/orders/${orderId}/update-status/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  }
  products = {
    /**
     * No description
     *
     * @tags Categories
     * @name CategoriesList
     * @request GET:/categories/
     * @secure
     */
    categoriesList: (query: any, params: RequestParams = {}) =>
      this.request<
        {
          page_count: number
          item_count: number
          page_size: number
          page: number
          data: ProductPreview[]
        },
        any
      >({
        path: `/categories`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name ProductsCategoriesCreate
     * @request POST:/products/categories/
     * @secure
     */
    productsCategoriesCreate: (data: Category, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categories/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name ProductsCategoriesRead
     * @request GET:/products/categories/{id}/
     * @secure
     */
    productsCategoriesRead: (id: number, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categories/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name ProductsCategoriesUpdate
     * @request PUT:/products/categories/{id}/
     * @secure
     */
    categoriesUpdate: (id: string, data: Category, params: RequestParams = {}) =>
      this.request<Category, any>({
        path: `/categories/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name ProductsCategoriesDelete
     * @request DELETE:/products/categories/{id}/
     * @secure
     */
    categoriesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/categories/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsList
     * @request GET:/products
     * @secure
     */
    productsList: (query: any, params: RequestParams = {}) =>
      this.request<
        {
          page_count: number
          item_count: number
          page_size: number
          page: number
          data: ProductPreview[]
        },
        any
      >({
        path: `/products`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsProductsCreate
     * @request POST:/products/products/
     * @secure
     */
    productsCreate: (
      data: {
        category: number
        /**
         * @minLength 1
         * @maxLength 255
         */
        name: string
        /**
         * @format slug
         * @maxLength 50
         * @pattern ^[-a-zA-Z0-9_]+$
         */
        slug?: string
        /** @minLength 1 */
        description: string
        /** @format decimal */
        price: string
        /** @format decimal */
        sell_price: string
        on_sell?: boolean
        /**
         * @min 0
         * @max 4294967295
         */
        stock: number
        /** @format binary */
        image?: File | null
      },
      params: RequestParams = {}
    ) =>
      this.request<Product, any>({
        path: `/products/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsProductsRead
     * @request GET:/products/products/{id}/
     * @secure
     */
    productsRead: (id: string, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/products/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsProductsUpdate
     * @request PUT:/products/products/{id}/
     * @secure
     */
    productsUpdate: (
      id: string,
      data: {
        category: string
        /**
         * @minLength 1
         * @maxLength 255
         */
        name: string
        /**
         * @format slug
         * @maxLength 50
         * @pattern ^[-a-zA-Z0-9_]+$
         */
        slug?: string
        /** @minLength 1 */
        description: string
        /** @format decimal */
        price: string
        /** @format decimal */
        sell_price: string
        on_sell?: boolean
        /**
         * @min 0
         * @max 4294967295
         */
        stock: number
        /** @format binary */
        image?: File | null
      },
      params: RequestParams = {}
    ) =>
      this.request<Product, any>({
        path: `/products/products/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsProductsDelete
     * @request DELETE:/products/products/{id}/
     * @secure
     */
    productsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/products/products/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params
      }),

    /**
     * No description
     *
     * @tags Review
     * @name ProductsProductsReviewsList
     * @request GET:/products/products/{product_id}/reviews/
     * @secure
     */
    productsReviewsList: (
      productId: string,
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number
          /** @format uri */
          next?: string | null
          /** @format uri */
          previous?: string | null
          results: Review[]
        },
        any
      >({
        path: `/products/products/${productId}/reviews/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Review
     * @name ProductsReviewsCreate
     * @request POST:/products/reviews/
     * @secure
     */
    productsReviewsCreate: (data: Review, params: RequestParams = {}) =>
      this.request<Review, any>({
        path: `/products/reviews/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  }
  search = {
    /**
     * No description
     *
     * @tags search
     * @name SearchUserList
     * @request GET:/search/user/
     * @secure
     */
    searchUserList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/search/user/`,
        method: 'GET',
        secure: true,
        ...params
      })
  }
  users = {
    /**
     * No description
     *
     * @tags users
     * @name UsersList
     * @request GET:/users/
     * @secure
     */
    usersList: (
      query?: {
        /** email */
        email?: string
        /** is_active */
        is_active?: string
        /** A search term. */
        search?: string
        /** Which field to use when ordering the results. */
        ordering?: string
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number
          /** @format uri */
          next?: string | null
          /** @format uri */
          previous?: string | null
          results: UserList[]
        },
        any
      >({
        path: `/users/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPasswordChangeUpdate
     * @request PUT:/users/password/change/
     * @secure
     */
    usersPasswordChangeUpdate: (data: ChangePassword, params: RequestParams = {}) =>
      this.request<ChangePassword, any>({
        path: `/users/password/change/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPasswordChangePartialUpdate
     * @request PATCH:/users/password/change/
     * @secure
     */
    usersPasswordChangePartialUpdate: (data: ChangePassword, params: RequestParams = {}) =>
      this.request<ChangePassword, any>({
        path: `/users/password/change/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UsersProfileRead
     * @request GET:/users/profile/
     * @secure
     */
    usersProfileRead: (params: RequestParams = {}) =>
      this.request<UserProfile, any>({
        path: `/users/me`,
        method: 'GET',
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UsersProfileUpdate
     * @request PUT:/users/profile/
     * @secure
     */
    usersProfileUpdate: (
      data: {
        /** @maxLength 30 */
        first_name?: string
        /** @maxLength 30 */
        last_name?: string
        bio?: string
        /** @format binary */
        profile_picture?: File | null
        /** @maxLength 15 */
        phone_number?: string
        address?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<UserProfile, any>({
        path: `/users/profile/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UsersProfilePartialUpdate
     * @request PATCH:/users/profile/
     * @secure
     */
    usersProfilePartialUpdate: (
      data: {
        name: string
        phone: string
        image: string
        gender: string
        birthday: string
      },
      params: RequestParams = {}
    ) =>
      this.request<UserProfile, any>({
        path: `/users/profile/`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersRead
     * @request GET:/users/{id}/
     * @secure
     */
    usersRead: (id: number, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/users/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersUpdate
     * @request PUT:/users/{id}/
     * @secure
     */
    usersUpdate: (id: number, data: UserDetail, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersPartialUpdate
     * @request PATCH:/users/{id}/
     * @secure
     */
    usersPartialUpdate: (id: number, data: UserDetail, params: RequestParams = {}) =>
      this.request<UserDetail, any>({
        path: `/users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params
      })
  }
}
