<template>
  <footer>
    <div id="footer-title"><a href="/">{{ title }}</a></div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      title: "Vocabulary Quiz Club"
    }
  }
});
</script>

<style scoped>
footer {
  background-color: var(--dark-brand-color);
  width: 100%;
	line-height: 4rem;
	text-align: center;
}

footer a {
  color: var(--main-brand-color);
  font-family: 'Sofia Sans Condensed', sans-serif;
  font-size: 1.4em;
}
</style>
