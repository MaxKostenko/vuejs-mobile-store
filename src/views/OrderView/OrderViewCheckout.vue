<template>
  <details-view-layout>
    <product-card slot="actions" :product="product"></product-card>
    <checkout-form slot="details" @saveForm="saveFormEvent"></checkout-form>
  </details-view-layout>
</template>

<script>
import DetailsViewLayout from '@/components/base/DetailsViewLayout';
import ProductCard from '@/components/Product/ProductCard';
import CheckoutForm from '@/components/CheckoutForm';

export default {
  name: 'order-checkout',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: { DetailsViewLayout, ProductCard, CheckoutForm },
  methods: {
    saveFormEvent(data) {
      this.$emit('updatePersonalDetails', data);
      this.$nextTick(() => this.$router.push({ name: 'confirmed' }));
    },
  },
};
</script>
