<template>
  <div>
  <div class="holder">
    <div class="action-holder">
      <product-card></product-card>
    </div>
    <div class="details-holder">
      some details<br/>
      some details<br/>
      some details<br/>
      some details<br/>
      some details<br/>
      some details<br/>
      some details<br/>
      some details<br/>
    </div>
  </div></div>
</template>

<script>
import ProductCard from '../ProductCard';

export default {
    name: 'details-view-layout',
    components: { ProductCard }
}
</script>

<style scoped>
  .holder::after {
    content: "";
    clear: both;
    display: table;
  }

  .details-holder {
    border: 1px solid #AAA;
    margin-right: 280px;
    height: 100%;
  }

  .action-holder {
    width: 280px;
    margin-left: -280px;
    float:right;
    height: 100%;
  }
</style>
