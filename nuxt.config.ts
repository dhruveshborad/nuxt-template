export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["bootstrap/dist/css/bootstrap.css"],
  modules: ["@nuxt/image"],
  image: {
    dir: 'assets/images',
  }
});
