<template>
 <footer class="wrapper">
  <div class="inf">
   <span class="logo">LOGO</span>
   <p class="address">
    Rockethub by ETH Etrepreneursclub <br />
    Stampfenbachstrasse 52/56 <br />
    8006 Zurich, Switzerland
   </p>
   <a href="mailto:info@exnaton.com">info@exnaton.com</a>
   <span class="development">
    Exnaton AG - &copy; 2021 all rights reserved
   </span>
  </div>

  <div class="footer-navigation">
   <div class="exnaton">
    <span class="exnaton-title">Exnaton</span>
    <span>Contact us</span>
    <span>Career</span>
   </div>

   <div class="privacy">
    <span class="privacy-title">Privacy</span>
    <span>Privacy Policy</span>
    <span>Terms of Use</span>
   </div>

   <div class="more">
    <span class="more-title">More</span>
    <span>Follow us on linkedin</span>
    <span>Follow us on twitter</span>
    <span>Subscribe to our newsletter</span>
   </div>
  </div>
 </footer>
</template>

<style scoped>
footer {
 display: flex;
 justify-content: space-between;
 padding: 4rem 8rem;
 background-color: #b3cfca;
}
.inf {
 display: grid;
}
.logo {
 font-size: 3rem;
 line-height: 1;
}
.footer-navigation {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
}
.exnaton,
.privacy,
.more {
 display: grid;
}
.exnaton-title,
.privacy-title,
.more-title {
 font-weight: 600;
}
a {
 text-decoration: none;
 color: black;
}
</style>
