<script setup lang="ts">
  import Button from './Button.vue';
</script>

<script lang="ts">
  export default {
    data(){
      return{
        primaryButton: {
          backgroundColor: '#F5D90A',
          color: '#151718'
        }
      }
    }
  }
</script>

<template>
  <div>
    <p class="date">1994 - nutid</p>
    <h1>Vi är Stockholms <span class="yellow">fibernätsleverantör.</span></h1>
    <p>Stokab äger, bygger, hyr ut och underhåller fibernät i Stockholmsregionen. Vi lägger grunden för IT i Stockholm och möjliggör en smart stad</p>
    <Button :style="primaryButton">Kontakta oss</Button>
  </div>
</template>
