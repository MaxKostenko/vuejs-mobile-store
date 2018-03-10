<template>
  <div class="item">
    <div class="holder">
      <div class="img-holder">
        <div class="img"></div>
      </div>
      <div class="title">{{ product.title }}</div>
      <div class="price"><price-formatter>{{product.price}}</price-formatter></div>
      <buy-product-button
        v-if="hasButton"
        :productId="product.id"
      >
        <button class="button">Buy</button>
      </buy-product-button>
    </div>
  </div>
</template>

<script>
import PriceFormatter from '@/components/base/PriceFormatter';
import BuyProductButton from '@/components/Product/BuyProductButton';

export default {
  name: 'product-card',
  props: {
    product: {
      type: Object,
      required: true,
    },
    hasButton: {
      type: Boolean,
      default: false,
    },
  },
  components: { PriceFormatter, BuyProductButton },
};
</script>

<style scoped>
  .holder {
    display: block;
    border: 1px solid #AAA;
    padding: 10px;
    margin: 0 10px;
  }

  .img {
    width: 150px;
    height: 240px;
    background-color: lavender;
    margin: auto;
  }

  .img-holder {
    width: 100%;
    padding: 10px;
  }

  .title {
    margin: 10px 0;
    font-size: large;
    font-weight: bold;
    text-align: center;
  }

  .price {
    text-align: center;
    margin: 5px 0 10px 0;
  }

  .button {
    height: 45px;
    width: 100%;
    font-size: larger;
    background-color: cornflowerblue;
    border: 0;
    border-radius: 3px;
    color: white;
  }
</style>
