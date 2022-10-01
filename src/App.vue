<script setup lang="ts">
  import Header from './components/Header.vue'
  import Intro from './components/Intro.vue'
  import Articles from './components/Articles.vue'
  import Info from './components/Info.vue'
  import Statistics from './components/Statistics.vue'
  import Footer from './components/Footer.vue'
  import Cookies from './components/Cookies.vue'
  import { ref } from 'vue'

  const showCookies = ref(true)
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
      <Statistics numbers="2 556" object="Nya förbindelser"/>
      <Statistics numbers="1,9 mn" object="Kilometer fiberoptik"/>
      <Statistics numbers="23 200" object="Anslutningspunkter"/>
    </section>
  </main>
  <footer>
    <Footer />
  </footer>

  <Cookies v-if=showCookies @show="(value) => showCookies = false" />
</template>
