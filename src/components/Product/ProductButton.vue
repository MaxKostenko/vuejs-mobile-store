<template functional>
  <router-link
    :to="{ name: props.route, params: { productId: props.productId }}"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'product-button',
  props: {
    productId: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>
