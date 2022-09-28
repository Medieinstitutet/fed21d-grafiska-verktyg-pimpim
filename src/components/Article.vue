<script setup lang="ts">
import Button from "./Button.vue";
  defineProps<{
      heading: string
      date: string
      text: string
      buttonText: string
    }>()
</script>

<template>
  <article class="item">
    <header class="cardHeading">
      <slot></slot>
      <h3>{{ heading }}</h3>
      <span>Publicerad {{ date }}</span>
    </header>
    <p>{{ text }}</p>
    <Button>{{ buttonText }}</Button>
  </article>
</template>

<style scoped lang="scss">

</style>
