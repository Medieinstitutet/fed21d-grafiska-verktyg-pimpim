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
    <button @click='acceptCookies' class='button-primary'>Godkänn alla kakor</button>
    <button>Inställningar</button>
  </div>
</template>
