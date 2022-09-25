
<script setup lang="ts">
  import IconBurger from './icons/IconBurger.vue';
  import IconCross from './icons/IconCross.vue'
  import MenuMobile from './MenuMobile.vue';
</script>

<script lang="ts">
    export default {
      data(){
        return{
          menuOpen: false
        }
      }
    }
</script>

<template>
  <div class="wrapper">
    <img src="./icons/LogoPrimary.svg" alt="company logo" id="logoPrimary"/>
    <button @click="menuOpen = !menuOpen">
      <IconBurger id="iconBurger" v-if="!menuOpen" />
      <IconCross id="iconCross" v-if="menuOpen"/>
    </button>
  </div>

  <MenuMobile v-if="menuOpen" />
</template>

<style scoped lang="scss">
  .wrapper{
    display:flex;
    justify-content: space-between;

    #logoPrimary{
      z-index: 999;
    }

    #iconCross{
      z-index: 999;
      place-self: end;
      position:relative;
      cursor:pointer;
    }
  }
</style>
