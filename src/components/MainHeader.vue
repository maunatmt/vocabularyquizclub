<template>
  <header>
    <div id="header-title"><a href="/">{{ title }}</a></div>
    <div id="header-items"><a href="/#language-list">Quiz List</a><a href="/result">Quiz Result</a><a href="/policy">Privacy Policy</a></div>
  </header>
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
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@800&display=swap');

header {
	position: sticky;
  top: 0;
  z-index: 100;
	left: 0;
	margin: 0;
  background-color: white;
	line-height: 4rem;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

header a {
  color: #00b5ad;
}

#header-title {
  font-family: 'Sofia Sans Condensed', sans-serif;
  font-size: 1.4em;
}

#header-items {
  position: absolute;
  right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  overflow-x: scroll;
}

#header-items a {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: rgb(98, 101, 106);
	position: relative;
  height: 100%;
  flex-shrink: 0;
}

#header-items a::after {
	position: absolute;
	bottom: 0;
	left: 0;
	content: '';
	width: 100%;
	height: 3px;
	background: var(--main-brand-color);
	transform: scale(0, 1);
	transform-origin: left top;
	transition: transform .3s;
}
#header-items a:hover::after {
	transform: scale(1, 1);
}

@media (max-width: 850px) {
  header {
    line-height: 3rem;
  }
  header div {
    width: 100%;
  }
  #header-items {
    position: relative;
    text-align: left;
    font-size: 0.8rem;
    line-height: 2rem;
    background: var(--main-brand-color);
    margin: auto 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  #header-items a {
    color: #fff;
  }
}
</style>
