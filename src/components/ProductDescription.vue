<template>
  <div>
    I am Product description
    <router-link
      :to="{ name: 'checkout', params: { productId: productId }}"
    >
      Mobile Phone {{ productId }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-description',
  props: ['productId'],
};
</script>
