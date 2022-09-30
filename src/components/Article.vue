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
      <div>
        <h3>{{ heading }}</h3>
        <p class="date">Publicerad {{ date }}</p>
      </div>
    </header>
    <p>{{ text }}</p>
    <Button>{{ buttonText }}</Button>
  </article>
</template>

<style scoped lang="scss">
  
</style>
