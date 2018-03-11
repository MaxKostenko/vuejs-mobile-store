<template>
  <div class="holder">
    <loader v-if="productList.length===0"></loader>
    <product-catalogue v-else :list="productList"></product-catalogue>
  </div>
</template>

<script>
import ProductCatalogue from '@/components/ProductCatalogue';
import Loader from '@/components/base/LoaderScreen';
import * as api from '@/api/api';
import * as storage from '@/api/storage';

export default {
  name: 'catalog-view',
  components: { ProductCatalogue, Loader },

  data() {
    return {
      productList: [],
    };
  },

  mounted() {
    storage.getData('productList')
      .then((products) => { this.productList = products; })
      .catch(() => {
        api.getProductList().then((products) => {
          this.productList = products;
          storage.setData('productList', products);
        });
      });
  },
};
</script>

<style scoped>
  .holder {
    margin-right: 10px;
    display: inline-block;
  }

  .holder:after {
    clear: both;
  }
</style>
