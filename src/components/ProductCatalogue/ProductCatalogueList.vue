<template>
  <div class="catalogue-holder">
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
    <product-catalogue-item></product-catalogue-item>
  </div>
</template>

<script>
import ProductCatalogueItem from './ProductCatalogueItem';

export default {
  name: 'product-catalogue-list',
  components: { ProductCatalogueItem },
};
</script>

<style scoped>
  .catalogue-holder {
    margin-right: 10px;
    display: inline-block;


  }

  .catalogue-holder:after {
    clear: both;
  }
</style>
