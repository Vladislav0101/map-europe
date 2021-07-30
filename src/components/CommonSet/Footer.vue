<template>
 <footer class="wrapper">
  <div class="inf">
   <span class="logo">{{$t('footer.logo')}}</span>
   <i18n path="footer.Rockethub" class="address" tag="p">
     <template v-slot:br></template>
     <br>
   </i18n>
   <a href="mailto:info@exnaton.com">{{$t("footer.mailExnaton")}}</a>
   <i18n path="footer.copyright" tag="span" class="development">
     <template v-slot:copy>
       &copy;
     </template>
   </i18n>
  </div>

  <div class="footer-navigation">
   <div class="exnaton">
    <span class="exnaton-title">Exnaton</span>
    <span>{{$t('footer.ContactUs')}}</span>
    <span>{{$t('footer.Career')}}</span>
   </div>

   <div class="privacy">
    <span class="privacy-title">{{$t('footer.Privacy')}}</span>
    <span>{{$t('footer.PrivacyPolicy')}}</span>
    <span>{{$t('footer.TermsOfUse')}}</span>
   </div>

   <div class="more">
    <span class="more-title">{{$t('footer.More')}}</span>
    <span>{{$t('footer.FollowUsOnLinkedin')}}</span>
    <span>{{$t('footer.FollowUsOnTwitter')}}</span>
    <span>{{$t('footer.SubscribeToOurNewsletter')}}</span>
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
