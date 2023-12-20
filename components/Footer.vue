<script>
import "~/assets/style/Footer.css";
</script>
<template>
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="info_logo">
        <h2>Digitf</h2>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="info_contact">
            <h5>About Shop</h5>
            <div>
              <div class="img-box">
                <NuxtImg src="/location-white.png" width="18px" alt="" />
              </div>
              <p>Address</p>
            </div>
            <div>
              <div class="img-box">
                <NuxtImg src="/telephone-white.png" width="12px" alt="" />
              </div>
              <p>+91 7698342723</p>
            </div>
            <div>
              <div class="img-box">
                <NuxtImg src="/envelope-white.png" width="18px" alt="" />
              </div>
              <p>dhruveshborad007@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_info">
            <h5>Informations</h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info_insta">
            <h5>Instagram</h5>
            <div class="insta_container">
              <div>
                <a href="">
                  <div class="insta-box b-1">
                    <NuxtImg src="/i-1.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-2">
                    <NuxtImg src="/i-2.jpg" alt="" />
                  </div>
                </a>
              </div>

              <div>
                <a href="">
                  <div class="insta-box b-3">
                    <NuxtImg src="/i-3.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-4">
                    <NuxtImg src="/i-4.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div class="insta-box b-3">
                    <NuxtImg src="/i-5.jpg" alt="" />
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-4">
                    <NuxtImg src="/i-6.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_form">
            <h5>Newsletter</h5>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
            <div class="social_box">
              <a href="">
                <NuxtImg src="/fb.png" alt="" />
              </a>
              <a href="">
                <NuxtImg src="/twitter.png" alt="" />
              </a>
              <a href="">
                <NuxtImg src="/linkedin.png" alt="" />
              </a>
              <a href="">
                <NuxtImg src="/youtube.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer section -->
  <section class="container-fluid footer_section">
    <div class="container">
      <p>
        &copy; 2019 All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
  <!-- end  footer section -->
</template>
