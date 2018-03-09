<template>
  <div>
    <router-link
      :to="{ name: 'description', params: { productId: 'some-text-id1' }}"
    >
      Mobile Phone1
    </router-link>
    <router-link
      :to="{ name: 'description', params: { productId: 'some-text-id2' }}"
    >
      Mobile Phone2
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'product-catalogue',
};
</script>
