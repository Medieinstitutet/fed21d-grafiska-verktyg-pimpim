<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-primary">
        <li><a href="#">Vårt erbjudande</a></li>
        <li><a href="#">Det här är Stokab</a></li>
        <li><a href="#">Kontakta oss</a></li>
        <li><a href="#">In English</a></li>
      </ul>

      <ul id="nav-secondary">
        <li><a href="#">Till kundportalen</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">Nyheter & Press</a></li>
        <li><a href="#">För leverantörer</a></li>
      </ul>
    </div>

    <div class="nav-inputWrapper">
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
    top: 3px;
    left:4px;
    width:98.5%;
    text-align: right;
    padding:2rem 2rem 1.5rem;
    display:flex;
    flex-direction: column;
    row-gap: 36px;
    z-index: 996;

    .nav-wrapper{
      display: flex;
      flex-direction: column;
      row-gap: 35px;
      padding-top: 5rem;

      ul{
        display: flex;
        flex-direction: column;
        row-gap: 36px;
        margin: 0;
        padding: 0;
        font-weight: bold;

        a{
          color:white;
          font-size: 1.1rem;
        }
      }

      #nav-secondary a{
        color: #9BA1A6;
      }
    }

    .nav-inputWrapper{
      display:flex;
      gap: 10px;
      border: 1.5px solid #4C5155;
      border-radius: 99px;
      align-items:center;
      .iconMagnifier{
        z-index:997;
        position:absolute;
        margin-left: 20px;
        margin-bottom: 2px;
        width: 1.6rem;
      }

      input{
        background-color: #1A1D1E;
        color: #697177;
        border:none;
        font-size:1.4rem;
        border-radius: 99px;
        font-weight: 300;
        width:100%;
        padding: 10px 55px;

        &::placeholder{
          color: #697177;
          font-style: 'Plus Jakarta Sans', sans-serif;
          font-size:1.4rem;
        }
      
        &:focus-visible{
          outline: 2px solid #245530;
          border:1px solid #46A758;
        }
      }
    }
  }
</style>

