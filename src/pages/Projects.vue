<template>
 <div>
  <Header />
  <section class="ongoing wrapper">
   <div class="ongoing-description">
    <h3>Ongoing projects</h3>
    <p>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio provident
     qui maxime autem reprehenderit distinctio voluptatibus nulla fuga velit
     commodi voluptas deserunt, nihil nobis.
    </p>
   </div>
   <div class="ongoing-projects">
    <div class="ongoing-projects-elem">Project 1</div>
    <div class="ongoing-projects-elem">Project 2</div>
    <div class="ongoing-projects-elem">Project 3</div>
   </div>
  </section>

  <section class="our-lessons wrapper">
   <h3>Our lessons learned from the Quartierstrom project</h3>
   <div class="our-lessons-text-box">
    <div class="our-lessons-text-box-col">
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
    </div>
    <div class="our-lessons-text-box-col">
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
    </div>
   </div>
  </section>

  <section class="quartierstrom wrapper">
   <h3>Quartierstrom in the media</h3>
   <div class="quartierstrom-box">
    <div class="quartierstrom-box-elem-1"></div>
    <div class="quartierstrom-box-elem-2"></div>
    <div class="quartierstrom-box-elem-2"></div>
    <div class="quartierstrom-box-elem-2"></div>
    <div class="quartierstrom-box-elem-2"></div>
    <div class="quartierstrom-box-elem-2"></div>
    <div class="quartierstrom-box-elem-2"></div>
   </div>
  </section>

  <section class="reviews wrapper">
   <h3>Users about our products &amp; cooperation</h3>
   <div class="reviews-slider">
    <div class="arrow-left">&lt;</div>
    <div class="reviews-slider-box">
     <div class="reviews-slider-avatar"></div>
     <span class="reviews-slider-name">Irene Battig</span>
     <span class="reviews-slider-sprachwerk">Sprachwerk</span>
     <div class="reviews-slider-review">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat vel rem
      incidunt dicta voluptate, animi quae. Optio adipisci voluptatum
      perferendis quam voluptatem aliquid eius?
     </div>
    </div>
    <div class="arrow-right">&gt;</div>
   </div>
  </section>

  <Footer />
 </div>
</template>

<script>
import Header from "../components/CommonSet/Header.vue";
import Footer from "../components/CommonSet/Footer.vue";

export default {
 components: { Header, Footer },
};
</script>

<style scoped>
.ongoing {
 display: grid;
 justify-items: center;
 padding-bottom: 5rem;
}
.ongoing-description {
 width: max-content;
 margin: 3rem 0;
 text-align: center;
}
.ongoing-description h3,
.our-lessons h3,
.quartierstrom h3,
.reviews h3 {
 font-size: 2rem;
 text-align: center;
}
.ongoing-description p {
 max-width: 34rem;
}
.ongoing-projects {
 display: grid;
 width: 100%;
 grid-template-columns: repeat(3, 1fr);
 justify-items: center;
}
.ongoing-projects-elem {
 display: grid;
 align-items: center;
 justify-content: center;
 background-color: aqua;
 width: 17rem;
 height: 25rem;
}
.our-lessons {
 display: grid;
 justify-content: center;
 background-color: blueviolet;
}
.our-lessons-text-box {
 display: grid;
 max-width: 60rem;
 margin: 4rem 0 15rem 0;
 grid-template-columns: repeat(2, auto);
 justify-content: space-between;
 column-gap: 10rem;
}
.our-lessons-text-box-col {
 display: grid;
 width: max-content;
}
.our-lessons-text-box-col span {
 max-width: 19rem;
}

.quartierstrom {
 display: grid;
 justify-items: center;
 padding: 2rem 0 7rem 0;
}
.quartierstrom h3 {
 margin-bottom: 5rem;
}
.quartierstrom-box {
 display: grid;
 width: 100%;
 max-width: 70rem;
 justify-items: center;
 grid-template-columns: repeat(5, 1fr);
 row-gap: 2rem;
}
.quartierstrom-box-elem-1,
.quartierstrom-box-elem-2 {
 background-color: coral;
}
.quartierstrom-box-elem-1 {
 grid-area: 1/1/3/3;
 width: 12rem;
}
.quartierstrom-box-elem-2 {
 width: 4rem;
 height: 4rem;
}
.arrow-right,
.arrow-left {
  font-size: 6rem;
  display: grid;
  align-items: center;
  justify-content: center;
}
.reviews-slider{
  display: grid;
  margin: 3rem 0 8rem 0;
  grid-template-columns: repeat(3, auto);
}
.reviews-slider-box{
  display: grid;
  justify-items: center;
  row-gap: 1rem;
}
.reviews-slider-avatar{
  width: 10rem;
  height: 10rem;
 background-color: yellowgreen;
 border-radius: 100%;
}
.reviews-slider-review{
  max-width: 20rem;
  text-align: center;
}
</style>