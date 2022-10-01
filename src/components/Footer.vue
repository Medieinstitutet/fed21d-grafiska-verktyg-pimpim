<script setup lang="ts">
  import Button from "./Button.vue";
  import IconLogo from "./icons/IconLogo.vue";
</script>

<template>
  <ul id="footer-linkList">
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
    <li><p><span>Växel: </span>+46 8 508 30 200</p></li>
    <li><p><span>E-post: </span>info@stokab.se</p></li>
    <li><p>Box 711, 120 02 Årsta</p></li>
    <li><p><span>Org.nr: </span>556475-6467</p></li>
    <li><p><span>Besöksadress: </span>Pastellvägen 6, Johanneshov</p></li>
    <li><Button>Hitta hit</Button></li>
  </ul>

  <div>
    <IconLogo id="footer-logo" />
    <p class="date">©2022 Stokab</p>
  </div>
</template>
