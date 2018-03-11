<template>
    <loader v-if="product===null"></loader>
    <router-view
      v-else
      :product="product"
      :personalDetails="personalDetails"
      @updatePersonalDetails="updatePersonalDetails"
    >
    </router-view>
</template>

<script>
import Loader from '@/components/base/LoaderScreen';
import * as api from '@/api/api';
import * as storage from '@/api/storage';

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
      personalDetails: null,
    };
  },

  mounted() {
    storage.getData('product')
      .then(product => new Promise((resolve, reject) => {
        if (product.id === this.productId) {
          resolve(product);
        } else {
          sessionStorage.removeItem('product');
          reject();
        }
      }))
      .then((product) => { this.product = product; })
      .catch(() => {
        api.getProduct(this.productId)
          .then((product) => {
            this.product = product;
            storage.setData('product', product);
          });
      });

    storage.getData('personalDetails')
      .then((personalDetails) => { this.personalDetails = personalDetails; });
  },

  methods: {
    updatePersonalDetails(data) {
      storage.setData('personalDetails', data);
      this.personalDetails = data;
    },
  },
};
</script>
