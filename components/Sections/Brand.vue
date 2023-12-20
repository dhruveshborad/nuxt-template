<script setup lang="ts">
import "~/assets/style/Brand.css";
</script>
<template>
  <section class="brand_section">
    <div class="container">
      <div class="heading_container">
        <h2>Featured Brands</h2>
      </div>
      <div class="brand_container layout_padding2">
        <div class="box">
          <a href="">
            <div class="new">
              <h5>New</h5>
            </div>
            <div class="img-box">
              <NuxtImg src="/slider-img.png" alt="slider-img" />
            </div>
            <div class="detail-box">
              <h6 class="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div class="box">
          <a href="">
            <div class="img-box">
              <NuxtImg src="/slider-img.png" alt="slider-img" />
            </div>
            <div class="detail-box">
              <h6 class="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div class="box">
          <a href="">
            <div class="img-box">
              <NuxtImg src="/slider-img.png" alt="slider-img" />
            </div>
            <div class="detail-box">
              <h6 class="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
        <div class="box">
          <a href="">
            <div class="img-box">
              <NuxtImg src="/slider-img.png" alt="slider-img" />
            </div>
            <div class="detail-box">
              <h6 class="price">$100</h6>
              <h6>Chair</h6>
            </div>
          </a>
        </div>
      </div>
      <a href="" class="brand-btn"> See More </a>
    </div>
  </section>
</template>
