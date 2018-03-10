<template>
  <div class="holder">
    <router-link
      :to="{ name: 'description', params: { productId: 'some-text-id1' }}"
    >
      Mobile Phone1
    </router-link>
    <router-link
      :to="{ name: 'description', params: { productId: 'some-text-id2' }}"
    >
      Mobile Phone2
    </router-link>
    <product-catalog-list></product-catalog-list>
  </div>
</template>

<script>
import ProductCatalogList from './ProductCatalogueList';

export default {
  name: 'product-catalogue',
  components: { ProductCatalogList },
  mounted() {
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(productsData => productsData.products)
      .then(products => products.map((el) => {
        const { description, ...params } = el;
        return params;
      }));
  },
};
</script>

<style scoped="">
  .holder {
    display: inline-block;
  }
</style>
