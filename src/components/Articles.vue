<script setup lang="ts">
  import Article from "./Article.vue";
</script>

<template>
  <div>
    <h2>Senaste nytt från redaktionen</h2>
    <p>Se vad vi jobbar med just nu och bläddra våra jobbannonser</p>
  </div>

  <Article heading="Valvakornas TV-produktion styrdes centralt via fibernätet" 
    date="12 september 2022" 
    text="Över 2,5 miljoner svenskar följde igår TV-kanalernas bevakning av de politiska partiernas valvakor. De utsända TV-teamens direktrapportering via Stokabs fibernät produceras centralt i TV-husens kontrollrum med gemensam bildproducent och tekniker."
    buttonText="Läs mer om projektet">
    <img src="../assets/post1.jpg"/>
  </Article>

  <Article heading="Stokab bidrar till PTS insamling för Ukraina" 
    date="6 september 2022" 
    text="Post- och telestyrelsen, PTS, fick i våras en förfrågan av dess Ukrainska motsvarighet om bidrag till återuppbyggnad av landets infrastruktur för elektronisk kommunikation. En insamling inom NTSG (Nationella Telesamverkansgruppen) möjliggjorde lastbilstransport med telekomutrustning i juli." 
    buttonText="Läs mer om insamlingen">
    <img src="../assets/post2.jpg"/>
  </Article>
  

  <Article heading="Vi söker en CERT teamledare" 
    date="3 augusti 2022" 
    text="Stokabs dotterbolag S:t Erik Kommunikation AB, söker en CERT teamledare vars uppgift blir att bygga upp och etablera en CERT-funktion som kommer att ha en mycket viktig koordinerande och samordnande roll i stadens IT-säkerhetsarbete."
    buttonText="Läs mer om tjänsten">
    <img src="../assets/post3.jpg" /> 
  </Article>
</template>

<style lang="scss">
  
</style>

