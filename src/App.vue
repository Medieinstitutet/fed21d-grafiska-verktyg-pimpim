<script setup lang="ts">
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
</script>

<template>
  <header>
      <Header/>
  </header>

  <main>
    <Main />
    <img src="./assets/hero.jpg" alt="city of stockholm"/>
  </main>

</template>

<style scoped>
  img{
    width:100vw;
    position: relative;
    left:-2rem;
    margin-top: 40px;
  }

  main{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin: 4rem 0 3rem;
  }
</style>
