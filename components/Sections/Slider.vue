<script setup lang="ts">
import "~/assets/style/Slider.css";
</script>
<template>
  <!-- slider section -->

  <section class="slider_section">
    <div class="play_btn">
      <a href="">
        <img src="~public/images/play.png" alt="play" />
      </a>
    </div>
    <!-- <div class="number_box">
      <div>
        <ol class="carousel-indicators indicator-2">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          >
            01
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3">04</li>
        </ol>
      </div>
    </div> -->
    <div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        The Latest
                        <span> Furniture </span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn-1"> Read More </a>
                        <a href="" class="btn-2"> Contact us </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 img-container">
                    <div class="img-box">
                      <img
                        src="~public/images/slider-img.png"
                        alt="slider-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
