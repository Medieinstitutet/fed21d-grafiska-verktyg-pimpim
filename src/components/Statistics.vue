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
    row-gap: 14px;
    column-gap: 183px;    

    h3{
      color: #ECEDEE;
      font-size: 1.25rem;
      margin: 0;
    }

    .statsObj-nmbr{
      border: 3px dashed #F5D90A;
      border-radius: 50%;
      padding: 5px;
      text-align: center;
      width: 128px;
      height: 128px;

      p{
        height:112px;
        background-color: #F5D90A;
        border-radius: 50%;
        line-height: 112px;
        color: #151718;
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
</style>