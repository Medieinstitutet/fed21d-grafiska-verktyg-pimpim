<script setup lang="ts">
  import Article from "./Article.vue";
import Button from "./Button.vue";
</script>

<template>
  <div>
    <h2>Stockholms fibernätsleverantör</h2>
    <p>I Stockholm äger och ansvarar Stokab för världens största öppna stadsnät av fiber för internet.</p>
    <p>Fibernätet byggs ut av oss i samma takt som Stockholm växer och vi ser till att det finns en digital infrastruktur för dig som bor och arbetar i Stockholm på samma sätt som det finns en infrastruktur för vatten, el och vägar.</p>
    <Button>Läs mer om vår roll i Stockholm</Button>
  </div>

  <div>
    <h2>Vårt produktutbud</h2>
    <p>Du behöver inte göra kostsamma investeringar i fiberinfrastruktur för att etablera dig på Stockholmsmarknaden, det har vi redan gjort. Du hyr bara den svartfiber du behöver, så länge du vill.</p>
    <p>Du kan enkelt lägga till, eller dra ifrån, fibernätsdistanser och anslutningar utifrån hur din egen affär växer och förändras.</p>
    <Button>Läs mer om våra produkter</Button>
  </div>

  <div>
    <h2>Säkerheten främst</h2>
    <p>Säkerhet är ett av våra viktigaste fokusområden och har så varit under våra mer än 25 år som fibernätsleverantör i Stockholm.</p>
    <p>När vi pratar säkerhet fokuserar vi på fyra områden: nätstrukturen, korskopplingarna, noderna och produktutbudet.</p>
    <Button>Läs mer om våra säkerhetsområden</Button>
  </div>

</template>

<style lang="scss">
  #section-info{
    background-color: #1A1D1E;
    border-top: 1px solid #3A3F42;
    border-bottom: 1px solid #3A3F42;
    display: flex;
    flex-wrap: wrap;
    row-gap: 5rem;

    div{
      display:flex;
      flex-direction: column;
      row-gap: 0.9rem;

      h2{
        margin:0;
      }

      p{
        font-size: 1.1rem;
        line-height: 1.6;
      }

      button{
        margin-top: 0.5rem;
      }
    }    
  }
</style>