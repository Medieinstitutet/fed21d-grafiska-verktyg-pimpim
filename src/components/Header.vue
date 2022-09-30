
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
          menuOpen: false,
          screenWidth: document.documentElement.clientWidth
        }
      },
      mounted(){
        window.addEventListener('resize', this.getWidth)
      },

      methods: {
        getWidth(){
          this.screenWidth = document.documentElement.clientWidth
        }
      }
    }
    
</script>

<template>
  <div class="wrapper" v-if="screenWidth <= 900" >
    <IconLogo id="header-logo" />
    <button @click="menuOpen = !menuOpen">
      <IconBurger id="iconBurger" v-if="!menuOpen" />
      <IconCross id="iconCross" v-if="menuOpen"/>
    </button>
  </div>

  <MenuMobile v-if="menuOpen" />
</template>

<style scoped lang="scss">
  
</style>
