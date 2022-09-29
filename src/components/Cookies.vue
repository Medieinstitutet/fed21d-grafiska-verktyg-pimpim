<script setup lang="ts">

</script>

<template>
  <div id="cookies">
    <b>Vi använder kakor</b>
    <p>Vi använder cookies, inlusive tredjeparts, på vår webbplats för att den ska fungera så bra som möjligt, förbättra och skräddarsy innehåll, rapportera om användningen av webbplatsen samt för riktad marknadsföring. </p>
    <a href="#">Du kan läsa mer om hur vi använder cookies i vår cookie-policy.</a>
    <button>Godkänn alla kakor</button>
    <button>Inställningar</button>
  </div>
</template>

<style lang="scss">
  #cookies{
    background-color: #1A1D1E;
    border: 2px solid #3A3F42;
    border-radius: 16px;
    width: 98.5%;
    position: fixed;
    bottom:2px;
    left: 3.5px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    justify-content: space-evenly;

    b{
      font-size: 1.3rem;
      width:100%;
    }

    p{
      font-size: 1.1rem;
    }

    a{
      color: #3399FF;
      text-decoration: underline #214B74 2px;
      font-size: 1.1rem;
      font-weight: 500;
    }

    button{
      border-radius: 99px;
      padding: 10px 30px;
      font-weight: 600;
      font-size: 1.1rem;

      &:first-of-type{
        background-color: #F5D90A;
        color: #151718;
      }

      &:last-of-type{
        color: #F5D90A;
        background-color: #151718;
        border: 1px solid #3A3F42;
      }
    }
  }
</style>>