<script setup lang="ts">
import Button from "./Button.vue";
import IconLogo from "./icons/IconLogo.vue";

</script>

<template>
  <ul id=footer-linkList>
    <li class="footer-linkGroup">
      Genvägar
      <ul class="footer-links">
        <li><a href="#">Kundportalen</a></li>
        <li><a href="#">Nybyggnation/Föranmälan fiber</a></li>
        <li><a href="#">För leverantörer</a></li>
        <li><a href="#">Dataskydd - GDPR</a></li>
        <li><a href="#">Visselblåsarfunktion</a></li>
      </ul>
    </li>

    <li class="footer-linkGroup">
      Företag
      <ul class="footer-links">
        <li><a href="#">Kontakta oss</a></li>
        <li><a href="#">Nyheter & Press</a></li>
        <li><a href="#">Kontakta oss</a></li>
        <li><a href="#">Dataskydd - GDPR</a></li>
        <li><a href="#">Vårt hållbarhetsarbete</a></li>
      </ul>
    </li>

    <li class="footer-linkGroup">
      Följ oss
      <ul class="footer-links">
        <li>
          <a href="#">
            <img src="./icons/IconYoutube.svg" alt="youtube icon" class="icon-social"/>
            Youtube
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./icons/IconLinkedin.svg" alt="linkedin icon" class="icon-social"/>
            Linkedin
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./icons/IconTwitter.svg" alt="twitter icon" class="icon-social"/>
            Twitter
          </a>
        </li>
      </ul>
    </li>
  </ul>

  <ul id="footer-contact">
    <li>Växel: <span>+46 8 508 30 200</span></li>
    <li>E-post: <span>info@stokab.se</span></li>
    <li><span>Box 711, 120 02 Årsta</span></li>
    <li>Org.nr: <span>556475-6467</span></li>
    <li>Besöksadress: <span>Pastellvägen 6, Johanneshov</span></li>
    <Button>Hitta hit</Button>
  </ul>

  <div>
    <IconLogo id="footer-logo" />
    <p class="date">©2022 Stokab</p>
  </div>
</template>

<style lang="scss">
  #footer-contact{
    padding: 0 1.3rem;
    display: flex;
    flex-wrap:wrap;
    flex-grow: 2;
    row-gap: 14px;
    justify-content: center;

    li{
      font-size: 1.1rem;
      vertical-align: middle;

      span{
        font-weight: 300;
      }

      &:last-child{
        flex-basis: content;
      }

      &:nth-child(even)::before{
        content: "";
        margin: 0 1rem;
        background: #3A3F42;
        display: inline-block;
        width: 2.5px;
        height: 25px;
        rotate: 22deg;
        vertical-align: text-top;
      }
    }
  }
</style>