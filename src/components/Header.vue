
<script setup lang="ts">
  import IconBurger from './icons/IconBurger.vue';
  import IconCross from './icons/IconCross.vue'
  import Menu from './Menu.vue';
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
  <IconLogo id="header-logo" />
  <div class="menu-mobile" >
    <button @click="menuOpen = !menuOpen" v-if="screenWidth <= 768">
      <IconBurger id="iconBurger" v-if="!menuOpen" />
      <IconCross id="iconCross" v-if="menuOpen"/>
    </button>
    <Menu v-if="menuOpen" />
  </div>

  <Menu v-if="screenWidth > 768" />
</template>

<style scoped lang="scss">
  
</style>
