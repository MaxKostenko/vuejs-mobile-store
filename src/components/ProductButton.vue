<template functional>
  <router-link
    :to="{ name: 'description', params: { productId: props.productId }}"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'product-button',
  props: ['productId'],
};
</script>
