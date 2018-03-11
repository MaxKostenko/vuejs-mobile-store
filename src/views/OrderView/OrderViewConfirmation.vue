<template>
  <div v-if="personalDetails" class="holder">
    <h1>Thank You for order!</h1>
    <p>
    Dear {{ fullName }}<br/>
    thank you for purchasing {{ productName }}.<br/>
    KPN.
    </p>
  </div>
</template>

<script>
export default {
  name: 'order-view-confirmation',
  props: {
    product: {
      type: Object,
      required: true,
    },
    personalDetails: {
      type: Object,
    },
  },
  created() {
    if (!this.personalDetails) {
      this.$router.push({ name: 'checkout' });
    }
  },
  computed: {
    fullName() {
      return `${this.personalDetails.firstName} ${this.personalDetails.lastName}`;
    },
    productName() {
      return `${this.product.brand} ${this.product.title}`;
    },
  },
};
</script>

<style scoped>
  .holder {
    height: 80vh;
  }
</style>
