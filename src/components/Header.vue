<script setup lang="ts">
  import IconBurger from './icons/IconBurger.vue';
  import IconCross from './icons/IconCross.vue'
  import Menu from './Menu.vue';
  import IconLogo from './icons/IconLogo.vue';
  import { ref } from 'vue';

  const screenWidth = ref()
  const menuOpen = ref(false)

  window.addEventListener('resize', () => {
    screenWidth.value = document.documentElement.clientWidth
  })
</script>



<template>
  <IconLogo id="header-logo" />
  <div class="menu-mobile" v-if="screenWidth <= 768">
    <button @click="menuOpen = !menuOpen" >
      <IconBurger id="iconBurger" v-if="!menuOpen" />
      <IconCross id="iconCross" v-if="menuOpen"/>
    </button>
    <Menu v-if="menuOpen" />
  </div>

  <Menu v-if="screenWidth > 768" />
</template>


