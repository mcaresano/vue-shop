<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';

</script>

<template>
  <!-- Header Navbar -->
  <TopMenu />

  <!-- Title -->
  <div class="pt-32  bg-white">
    <h1 class="text-center text-2xl font-bold text-gray-800">All Products</h1>
  </div>

  <!-- se agrega el Router View : Dentro de este va el HomeView en el children del route, que se creó dentro de views -->
  <RouterView />


  <!-- Footer -->
  <CustomFooter />
</template>