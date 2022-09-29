
<script setup lang="ts">
  import IconBurger from './icons/IconBurger.vue';
  import IconCross from './icons/IconCross.vue'
  import MenuMobile from './MenuMobile.vue';
  import IconLogo from './icons/IconLogo.vue';
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
    <IconLogo id="header-logo" />
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

    #header-logo{
      z-index: 999;
    }

    #iconCross{
      z-index: 999;
      width:1.5rem;
      height:1.5rem;
      place-self: end;
      position:relative;
      cursor:pointer;
    }
  }
</style>
