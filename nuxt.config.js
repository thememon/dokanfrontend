export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dokan_front_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/images/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'assets/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'assets/css/icons.css'
      },
      {
        rel: 'stylesheet',
        href: 'assets/css/style.css'
      },
    ],
    script: [
      { src: 'assets/js/jquery.min.js', type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/bootstrap.bundle.min.js', type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/modernizr.min.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/detect.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/fastclick.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/jquery.slimscroll.js',type: "text/javascript", async: true },
      { src: 'assets/js/waves.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/jquery.nicescroll.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/jquery.blockUI.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/jquery.scrollTo.min.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/pages/dashboard.int.js',type: "text/javascript", body: true, ssr: false },
      { src: 'assets/js/app.js',type: "text/javascript", body: true, ssr: false },


        // <script src="../plugins/morris/morris.min.js"></script>
        // <script src="../plugins/raphael/raphael.min.js"></script>

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  { src: '~/plugins/api.js', mode: 'client' },
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
