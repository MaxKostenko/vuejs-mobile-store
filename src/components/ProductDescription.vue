<template>
  <div>
    <div>
    I am Product description
    <router-link
      :to="{ name: 'checkout', params: { productId: productId }}"
    >
      Mobile Phone {{ productId }}
    </router-link>
    </div>
    <details-view-layout></details-view-layout>
  </div>
</template>

<script>
import DetailsViewLayout from './DetailsViewLayout';

export default {
  name: 'product-description',
  components: { DetailsViewLayout },
  props: ['productId'],
};
</script>
