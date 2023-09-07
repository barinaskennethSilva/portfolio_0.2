<template>
  <div class="home">
    <div class="row mt-5">
<div class="col-12 p-3">
    <h1 class="text-center">About me </h1>
</div>  
<div class="col-12">
 <div class="list text-center">
   <label>Kenneth Barinas</label>
   <p> I am a BSIT Student with the skill of web developer. We offer to develop websites and web applications. </p>
</div>
 </div>
 </div>
 <div class="row w-100">
  <h1 class="ms-2">My Skills </h1> 
 </div>
    <Carousel_pages
      :navigation="true"
      :pagination="true"
      :startAutoPlay="true"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide_pages v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`./img/${slide}.png`)" alt="" />
        </div>
      </Slide_pages>
    </Carousel_pages>
  </div>
</template>

<script>
import Carousel_pages from "./Carousel.vue";
import Slide_pages from "./Slide.vue";

export default {
  name: "About_pages",
  components: { Carousel_pages, Slide_pages },
  setup() {
    const carouselSlides = ["card1", "card2", "card3","card4"];

    return { carouselSlides };
  },
};
//fixed error coursel npm run lint
</script>

<style lang="scss" scoped>
.carousel {
position: relative;
  max-height: 50vh;
  height: 50vh;
  width: 100%;
   .slide-info{
   position: absolute;
   top:-120px;
     width: 100%;
     img{
     width: 100%;
      height: 100%;
      object-fit: cover;

}  
}
}
</style>