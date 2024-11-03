<template>
  <div
    class="card w-100 my-3 shadow-sm rounded border border-gray-200"
    :class="{ 'opacity-50 cursor-not-allowed': product.deleted_at }"
  >
    <router-link
      :to="{ name: 'productDetail', params: { slug: product.id } }"
      class="text-decoration-none text-dark"
      :disabled="product.deleted_at"
    >
      <div class="image-container">
        <img v-if="product.thumbnail" :src="product.thumbnail" class="card-img-top rounded-top" />
        <img
          v-else
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdD7G7FFg1UKZFXhyP45b4AvY-qKEFvfjj3w&s"
          class="card-img-top rounded-top"
        />
      </div>
    </router-link>
    <div class="card-body d-flex flex-column">
      <router-link :to="{ name: 'productDetail', params: { slug: product.id } }">
        <h5 class="card-title line-clamp-2 h-14 text-lg">{{ product.name }}</h5>
      </router-link>
      <div class="d-flex flex-row align-items-center" v-if="product.hot_price">
        <h5 class="mb-1 me-2 text-success">{{ formatCurrency(Number(product.hot_price)) }}</h5>
        <span class="text-muted"
          ><s>{{ formatCurrency(Number(product.price)) }}</s></span
        >
      </div>
      <div class="d-flex flex-row align-items-center" v-else>
        <h5 class="card-title">{{ formatCurrency(Number(product.price)) }}</h5>
      </div>
      <p class="card-text line-clamp-2 h-12">{{ product.description }}</p>
      <div
        class="card-footer d-flex justify-content-between align-items-center pt-3 px-0 pb-0 mt-auto border-0 bg-white"
      >
        <a href="#!" class="btn btn-primary shadow-0">Add to cart</a>
        <a href="#!" class="btn btn-outline-secondary border-0 icon-hover hover:bg-gray-100">
          <i class="fas fa-heart fa-lg text-secondary"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductPreview } from '@/services'

defineProps<{
  product: ProductPreview
}>()

const formatCurrency = (price: number) => {
  return new Intl.NumberFormat('vn-VI', { style: 'currency', currency: 'VND' }).format(price)
}
</script>

<style scoped>
.image-container {
  height: 250px; /* Set your desired fixed height */
  overflow: hidden;
}

.card-img-top {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
