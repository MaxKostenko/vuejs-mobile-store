<template>
  <div class="item">
    <div class="holder">
      <div class="img-holder">
        <div class="img"></div>
      </div>
      <div class="title">Product Title</div>
      <div class="price">1000</div>
      <button class="button">Buy</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-card',
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
    font-size: x-large;
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
