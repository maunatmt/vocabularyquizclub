<template>
  <main-header/>
  <router-view/>
  <main-footer/>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    components: {
      MainHeader,
      MainFooter
    },
    methods : {
      setMeta(route){
        if(route.meta.title){
          let pageTitle = route.meta.title;
          pageTitle = pageTitle.replace(/:language/, this.$route.params.language);
          document.title = pageTitle;
        }
        if(route.meta.desc){
          let pageDesc = route.meta.desc;
          pageDesc = pageDesc.replace(/:language/, this.$route.params.language);
          document.querySelector("meta[name='description']").setAttribute('content', pageDesc)
        }
      }
    },
    mounted(){
      let route = this.$route;
      this.setMeta(route);

      let externalScript = document.createElement('script')
      externalScript.setAttribute('src', 'https://consent.cookiebot.com/uc.js?cbid=2788f7e2-e0f0-48bc-a6b4-18571ed6bbf8')
      document.head.appendChild(externalScript)
    },
    watch: { 
      '$route' (route, from) {
        this.setMeta(route);
      }
    }
  }
</script>