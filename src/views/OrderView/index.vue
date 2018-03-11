<template>
    <loader v-if="product===null"></loader>
    <router-view v-else :product="product"></router-view>
</template>

<script>
import Loader from '@/components/base/LoaderScreen';
import * as api from '@/api/api';

export default {
  components: { Loader },
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
    api.getProduct(this.productId).then((product) => {
      this.product = product;
    });
  },
};
</script>
