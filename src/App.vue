<script setup lang="ts">
  import Header from './components/Header.vue'
  import Intro from './components/Intro.vue'
  import Articles from './components/Articles.vue'
  import Info from './components/Info.vue'
  import Statistics from './components/Statistics.vue'
  import Footer from './components/Footer.vue'
  import Cookies from './components/Cookies.vue'
</script>

<script lang="ts">
  export default {
    data(){
      return{
        cookiesOpen: true
      }
    },
    methods: {
      acceptCookies(){
        this.cookiesOpen = false
      }
    }
  }
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

  <Cookies v-if=cookiesOpen v-on:accept-cookies="acceptCookies" />
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

  #section-statistics {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 9rem;
    row-gap: 4rem;

    h2{
      width: 100%;
      color: #ECEDEE;
      font-size: 1.8rem;
      text-align: center;
      margin: 0;
    }
  }

</style>
