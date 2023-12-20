<script setup lang="ts">
import "~/assets/style/Header.css";
const props = defineProps({
  custom: Boolean,
});
const { custom } = props;
const route = useRoute();
let className = "custom_menu-btn";
function showNav() {
  console.log("first", className);
  if (className === "custom_menu-btn") {
    className = "custom_menu-btn menu_btn-style";
  } else {
    className = "custom_menu-btn";
  }
}
</script>
<template>
  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="/">
            <img src="~public/images/Logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse lg_nav-toggle"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li
                class="nav-item"
                :class="route.fullPath === '/' ? 'active' : ''"
              >
                <a class="nav-link" href="/">Home </a>
              </li>
              <li
                class="nav-item"
                :class="route.fullPath === '/about' ? 'active' : ''"
              >
                <a class="nav-link" href="/about"> About</a>
              </li>
              <li
                class="nav-item"
                :class="route.fullPath === '/shop' ? 'active' : ''"
              >
                <a class="nav-link" href="/shop">Shop </a>
              </li>
              <li
                class="nav-item"
                :class="route.fullPath === '/furniture' ? 'active' : ''"
              >
                <a class="nav-link" href="/furniture"> Furniture </a>
              </li>
              <li
                class="nav-item"
                :class="route.fullPath === '/contact' ? 'active' : ''"
              >
                <a class="nav-link" href="/contact">Contact us</a>
              </li>
            </ul>
            <div class="user_option">
              <a href="/logIn">
                <img src="~public/images/user.png" alt="user" />
                <span> Login </span>
              </a>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button
                  class="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                ></button>
              </form>
            </div>
          </div>
          <div>
            <div @click="showNav" :class="className">
              <button>
                <span class="s-1"> </span>
                <span class="s-2"> </span>
                <span class="s-3"> </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- slider section -->
    <Slider v-if="!custom" />
  </div>
</template>
