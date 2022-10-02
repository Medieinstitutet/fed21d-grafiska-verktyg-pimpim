<script setup lang='ts'>
  defineProps<{
    numbers: string
    object: string
  }>()
</script>

<template>
  <div class='statsObj-wrapper'>
    <h3>{{ object }}</h3>
    <div class='statsObj-nmbr'>
      <p>{{ numbers }}</p>
    </div>
  </div>
</template>
