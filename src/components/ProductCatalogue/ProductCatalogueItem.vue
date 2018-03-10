<template>
  <div class="item">
    <div class="holder">
      <div class="img-holder">
        <div class="img"></div>
      </div>
      <div class="title">{{product.title}}</div>
      <div class="price"><price-formatter>{{product.price}}</price-formatter></div>
      <product-button :productId="product.id"><button class="button">Buy</button></product-button>
    </div>
  </div>
</template>

<script>
import PriceFormatter from '@/components/base/PriceFormatter';
import ProductButton from '@/components/ProductButton';

export default {
  name: 'product-catalogue-item',
  props: ['product'],
  components: { PriceFormatter, ProductButton },
};
</script>

<style scoped>
  .item {
    width: 20%;
    float: left;
    min-height: 100px;
    border:0;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 20px;
    display: inline-block;
  }

  @media (max-width: 1650px) {
    .item {
      width: 25%;
    }
  }

  @media (max-width: 1450px) {
    .item {
      width: 33.333%;
    }
  }

  @media (max-width: 1150px) {
    .item {
      width: 50%;
    }
  }

  @media (max-width: 780px) {
    .item {
      width: 100%;
    }
  }

  .holder {
    display: inline-block;
    border: 1px solid #AAA;
    padding: 10px;
    max-width: 320px;
    width: 94%;
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
