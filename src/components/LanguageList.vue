<template>
  <div id="language-list">
    <div id=language-message>
      <h3>Quiz List</h3>
      <p>The Vocabulary Quiz Club provides you a variety of foreign language courses. Select a language from the list below to start the quiz. Languages and vocabulary will be added from time to time.</p>
    </div>
    <div id="languages">
      <div v-for="item in items" :key="item.language" class="card">
        <a :href="'/'+item.language">
        <div class="title">{{ item.language }}</div>
        <img :src="require(`@/assets/${item.language}.avif`)" :alt=item.language />
        <div class="info">{{ item.count }} words</div>
        </a>
      </div>
    </div>
  </div>  
</template>
<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Languages',
  setup() {
    const items = ref([]);

    const fetchData = async () => {
      const languages = [ "Chinese", "Dutch", "Estonian", "French", "German", "Greek", "Italian", "Japanese", "Korean", "Latvian", "Lithuanian", "Norwegian", "Polish", "Portuguese", "Russian", "Spanish", "Swedish", "Turkish" ];
      const responses = await Promise.all(languages.map(language => axios.get(`${language}.json`)));
      const data = responses.map(response => ({ language: response.config.url.replace('.json', ''), count: response.data.length }));
      items.value = data;
    };

    fetchData();

    return {
      items
    }
  }
});
</script>

<style scoped>
#language-list {
  margin-top: -4rem;
  padding-top: 4rem;
}

#language-message {
  text-align:center;
  background: var(--main-background-color);
  padding: 1rem 0;
}

#language-message p {
  color: var(--sub-font-color);
  text-align: justify;
  width: 80%;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
}

#languages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--main-background-color);
}

.card {
  background-size: cover;
  width: 300px;
  max-width: 90%;
  margin: 1rem;
  box-shadow: var(--main-boxshadow-set);
  font-size: 1.6rem;
  text-align: center;
  position: relative;  
  border-radius: 10px;
}

.card:hover {
  opacity: 90%;
}

.card:active {
  opacity: 100%;
}

.card div {
  background-color: #fff;
  line-height: 40px;
  color: orange;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.card .title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.card .info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.8em;
  border-radius: 0 0 10px 10px;
}

@media (max-width: 550px) {
  #language-message p {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
