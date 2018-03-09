<template>
  <div>
    I am order checkout for {{ productId }}
    <router-link
      :to="{ name: 'confirmed'}"
    >
      Confirm
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'order-checkout',
  props: ['productId'],
};
</script>
