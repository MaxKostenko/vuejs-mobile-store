<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

  *, *:before, *:after {
    box-sizing: border-box;
  }

  * {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #app {
    width: 80%;
    max-width: 1470px;
    min-width: 450px;
    box-sizing: border-box;
    margin: auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    background-color: white;
    padding: 40px;
  }

  @media (max-width: 550px) {
    #app {
      width: 100%;
    }
  }

</style>
