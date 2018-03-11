<template functional>
  <div>
  <div class="holder">
    <div class="action-holder">
      <slot name="actions"></slot>
    </div>
    <div class="details-holder">
      <slot name="details"></slot>
    </div>
  </div></div>
</template>

<script>
export default {
  name: 'details-view-layout',
};
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
    padding: 20px;
    min-width: 280px;
  }

  .action-holder {
    width: 280px;
    margin-left: -280px;
    float:right;
    height: 100%;
  }

  @media (max-width: 850px) {
    .details-holder, .action-holder {
      float: none;
      width: 100%;
      margin: 0 0 20px 0;
    }
  }
</style>
