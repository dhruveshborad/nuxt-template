<script setup lang="ts">
import "~/assets/style/Globle.css";
import "bootstrap/dist/css/bootstrap.min.css";
const route = useRoute();
const layout = route.fullPath === "/" ? "default" : "custom";
</script>
<template>
  <body :class="route.fullPath === '/' ? '' : 'sub_page'">
    <NuxtLayout :name="layout"><NuxtPage /> </NuxtLayout>
  </body>
</template>
