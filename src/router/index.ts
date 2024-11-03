import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './authGuard'
import { ALL_ROLE, ROLE_ADMIN, ROLE_STAFF } from '@/helpers'

const HomeLayout = () => import('@/layouts/HomeLayout.vue')
const UserLayout = () => import('@/layouts/UserLayout.vue')

const HomeView = () => import('@/views/HomeView.vue')
const DetailView = () => import('@/views/products/DetailView.vue')

const LoginView = () => import('@/views/auth/LoginView.vue')
const SignUpView = () => import('@/views/auth/SignUpView.vue')
const ResetPasswordView = () => import('@/views/auth/ResetPasswordView.vue')
const ForgotPasswordView = () => import('@/views/auth/ForgotPasswordView.vue')

const ProductFormView = () => import('@/views/management/product/DetailView.vue')
const ListView = () => import('@/views/management/product/ListView.vue')
const DashboardView = () => import('@/views/management/DashboardView.vue')
const CategoryListView = () => import('@/views/management/category/ListView.vue')

const UserListView = () => import('@/views/management/user/ListView.vue')
const UserDetailView = () => import('@/views/management/user/DetailView.vue')
const ProfileView = () => import('@/views/settings/ProfileView.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homelayout',
      component: HomeLayout,
      children: [
        {
          path: '/products/:slug',
          name: 'productDetail',
          component: DetailView
        },
        {
          path: '/user',
          name: 'userlayout',
          component: UserLayout,
          children: [
            {
              path: '',
              name: 'profile',
              component: ProfileView
            }
          ]
        },
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    },

    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignUpView },
    { path: '/reset-password', name: ' reset-password', component: ResetPasswordView },
    { path: '/forgot-password', name: ' forgot-password', component: ForgotPasswordView },
    {
      path: '/management',
      meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] },
      children: [
        {
          name: 'management',
          path: '',
          component: DashboardView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] } // Explicitly set role for admin
        },
        {
          path: 'categories',
          name: 'categories',
          component: CategoryListView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] } // Explicitly set role for categories
        },
        {
          path: 'products',
          name: 'products',
          component: ListView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] } // Explicitly set role for products
        },
        {
          path: 'products/new',
          name: 'addProduct',
          component: ProductFormView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] } // Explicitly set role for adding products
        },
        {
          path: 'products/edit/:id',
          name: 'editProduct',
          component: ProductFormView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN, ROLE_STAFF] } // Explicitly set role for editing products
        },
        {
          path: 'users',
          name: 'userManagement',
          component: UserListView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN] } // Explicitly set role for editing products
        },
        {
          path: 'users/detail/:id',
          name: 'userDetail',
          component: UserDetailView,
          meta: { requiresAuth: true, role: [ROLE_ADMIN] } // Explicitly set role for editing products
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

router.beforeEach(authGuard)

export default router
