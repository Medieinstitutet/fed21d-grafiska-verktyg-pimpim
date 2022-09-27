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
  section{
    display:flex;
    flex-direction: column;
    gap:5rem;

    div{
      text-align: center;

      p{
        font-weight: 700;
        font-size: 1.1rem;
        padding: 0 2rem;
      }
    }

    article{
      display: flex; 
      flex-direction: column;
      border: 1px solid #3A3F42;
      border-radius: 1rem;
      background-color: #1A1D1E;
      padding: 20px 20px 0;
      gap: 1rem;

      p{
        font-size: 1.1rem;
      }

      .cardHeading{
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: left;

        img{
          grid-column: 1;
          grid-row: 1/span 2;
          width:100%;
        }

        h3{
          grid-column: 2/span 2;
          font-size: 1.5rem;
          line-height: 1.5;
          margin:0;
          padding: 0 1rem;
        }
        span{
          grid-column: 2/span 2;
          font-weight: 400;
          color: #9BA1A6;
          font-size: 1.1rem;
          line-height: 1.5;
          padding: 0.5rem 1rem;
        }
      }

      button{
        place-self: center;
        position: relative;
        bottom: -1.5rem;
      }
    }
  }
</style>

