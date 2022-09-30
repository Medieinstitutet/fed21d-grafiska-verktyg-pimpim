<script setup lang="ts">
  defineProps<{
    numbers: string
    object: string
  }>()
</script>

<template>
  <div class="statsObj-wrapper">
    <h3>{{ object }}</h3>
    <div class="statsObj-nmbr">
      <p>{{ numbers }}</p>
    </div>
  </div>
</template>

<style lang="scss">
  .statsObj-wrapper{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 14px;

    h3{
      color: #ECEDEE;
      font-size: 1.5rem;
      margin: 0;
    }

    .statsObj-nmbr{
      border: 3px dashed #F5D90A;
      border-radius: 50%;
      padding: 5px;
      text-align: center;
      width: 11rem;
      height: 11rem;

      p{
        height:10rem;
        background-color: #F5D90A;
        border-radius: 50%;
        line-height: 10rem;
        color: #151718;
        font-weight: 700;
        font-size: 1.9rem;
      }
    }
  }
</style>