<script setup lang="ts">
  defineProps<{
    numbers: string
    object: string
  }>()
</script>

<template>
  <div>
    <h3>{{ object }}</h3>
    <p>{{ numbers }}</p>
  </div>
</template>

<style lang="scss">

</style>