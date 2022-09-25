<script setup lang="ts">
</script>

<template>
  <nav>
    <div>
      <ul id="navPrimary">
        <li><a href="">Vårt erbjudande</a></li>
        <li><a href="">Det här är Stokab</a></li>
        <li><a href="">Kontakta oss</a></li>
        <li><a href="">In English</a></li>
      </ul>

      <ul id="navSecondary">
        <li><a href="">Till kundportalen</a></li>
        <li><a href="">API</a></li>
        <li><a href="">Nyheter & Press</a></li>
        <li><a href="">För leverantörer</a></li>
      </ul>
    </div>

    <div class="wrap">
      <img src="./icons/IconMagnifier.svg" class="iconMagnifier" alt="magnifier icon"/>
      <input type="text" placeholder="Sök"/>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  nav{
    background-color: #1A1D1E;
    border: 1px solid #3A3F42;
    border-radius: 8px;
    position:absolute;
    top: 5px;
    left:5px;
    width:98%;
    text-align: right;
    padding:4rem 2rem 1rem;
    display:flex;
    flex-direction: column;
    row-gap: 1.5rem;
    z-index: 996;

    ul{
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      margin: 20px 0;
      font-weight: bold;

      a{
        color:white;
      }
    }

    #navSecondary a{
      color: #9BA1A6;
    }

    input{
      background-color: #1A1D1E;
      color: #697177;
      border:none;
      font-size:1rem;
      border-radius: 99px;
      width:100%;
      padding: 7px 50px;
      
      &:focus-visible{
        outline: 2px solid #245530;
        border:1px solid #46A758;
      }
    }

    .wrap{
      display:flex;
      gap: 8px;
      border: 1px solid #3A3F42;
      border-radius: 99px;
      align-items:center;

      .iconMagnifier{
        z-index:997;
        position:absolute;
        margin-left: 20px;
        margin-bottom: 2px;
      }
    }
  }
</style>

