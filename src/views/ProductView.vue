<template>
  <loader v-if="product===null"></loader>
  <details-view-layout v-else>
    <product-card slot="actions" :product="product" :has-button="true"></product-card>
    <product-description slot="details" :product="product"></product-description>
  </details-view-layout>
</template>

<script>
import DetailsViewLayout from '@/components/base/DetailsViewLayout';
import Loader from '@/components/base/LoaderScreen';
import ProductCard from '@/components/Product/ProductCard';
import ProductDescription from '@/components/Product/ProductDescription';
import * as api from '@/api/api';
import * as storage from '@/api/storage';

export default {
  name: 'product-view',
  components: { DetailsViewLayout, Loader, ProductCard, ProductDescription },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      product: null,
    };
  },

  mounted() {
    storage.getData('product')
      .then((product) => { this.product = product; })
      .catch(() => {
        api.getProduct(this.productId).then((product) => {
          this.product = product;
        });
      });
  },
};
</script>
