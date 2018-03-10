<template>
  <div>
    <product-catalogue-item
      v-for="product in list"
      :key="product.id"
      :product="product"
    ></product-catalogue-item>

  </div>
</template>

<script>
import ProductCatalogueItem from './ProductCatalogueItem';

export default {
  name: 'product-catalogue',
  props: ['list'],
  components: { ProductCatalogueItem },
};
</script>
