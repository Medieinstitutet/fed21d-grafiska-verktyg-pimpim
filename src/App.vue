<script setup lang="ts">
  import Header from './components/Header.vue'
  import Intro from './components/Intro.vue'
  import Articles from './components/Articles.vue'
  import Info from './components/Info.vue'
  import Statistics from './components/Statistics.vue'
</script>

<template>
  <header id="header-app">
      <Header/>
  </header>

  <main>
    <section id="section-intro">
      <Intro />
      <img src="./assets/hero.jpg" alt="city of stockholm" id="img-intro"/>
    </section>
  
    <section id="section-news">
      <Articles />
    </section>

    <section id="section-info">
      <Info />
    </section>

    <section id="section-statistics">
      <h2>Stokab i siffror</h2>
      <Statistics numbers="2556" object="Nya förbindelser"/>
    </section>
  </main>
</template>

<style scoped lang="scss">
  #section-intro{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    #img-intro{
      width:100vw;
      position: relative;
      left:-2rem;
      margin-top: 40px;
    }
  }
</style>
