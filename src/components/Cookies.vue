<script setup lang='ts'>
  const emit = defineEmits(['show'])

  function acceptCookies(){
    emit('show', false)
  }
</script>

<template>
  <div id='cookies'>
    <b>Vi använder kakor</b>
    <p>Vi använder cookies, inlusive tredjeparts, på vår webbplats för att den ska fungera så bra som möjligt, förbättra och skräddarsy innehåll, rapportera om användningen av webbplatsen samt för riktad marknadsföring. </p>
    <a href='#'>Du kan läsa mer om hur vi använder cookies i vår cookie-policy.</a>
    <button @click='acceptCookies'>Godkänn alla kakor</button>
    <button>Inställningar</button>
  </div>
</template>

<style lang='scss'>
  #cookies{
    background-color: #1A1D1E;
    border: 2px solid #3A3F42;
    border-radius: 16px;
    width: 98.5%;
    position: fixed;
    bottom:2px;
    margin-left: 3.5px;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    justify-content: space-evenly;

    b{
      font-size: 1.1rem;
      width:100%;
    }

    p{
      font-size: 0.9rem;
      line-height: 22px;
    }

    a{
      color: #3399FF;
      text-decoration: underline #214B74 2px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    button{
      border-radius: 99px;
      padding: 10px 20px;
      font-weight: 600;
      font-size: 0.9rem;

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

  @media screen and (min-width: 768px){
    #cookies{
      position: fixed;
      width: 50%;
      right: 3.5px;
      justify-content: start;
      column-gap: 8px;
      padding: 32px;
    }
  }
</style>>