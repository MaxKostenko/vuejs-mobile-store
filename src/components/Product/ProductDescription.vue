<template functional>
  <div>
    <h1>{{ props.product.brand }} - {{ props.product.title }}</h1>
    <p>{{ props.product.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'product-description',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
