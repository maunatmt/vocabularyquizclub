<template>
  <quiz :language-name="languageName"/>
  <div class="service-feature bg-w">
    <h3 class="features-title">Service Features</h3>
    <div class="features-items basis-4">
      <div>
        <h4><font-awesome-icon icon="fa-solid fa-check" />Completely Free</h4>
        <p>This vocabulary quiz is designed to be free learning experience for {{ languageName }} learners. Even beginners can play the game safely to learn the meanings and pronunciations of basic {{ languageName }} words.</p>
      </div>
      <div>
        <h4><font-awesome-icon icon="fa-solid fa-check" />Simple and Fun</h4>
        <p>It is a simple four-choice quiz game so that even new users can quickly learn how to use it. It is a fun way to continue learning while aiming for a high score.</p>
      </div>
      <div>
        <h4><font-awesome-icon icon="fa-solid fa-check" />Selected Words</h4>
        <p>The words displayed in the game are selected mainly from common words used in real life and business situations. Let's memorize efficiently from important words.</p>
      </div>
      <div>
        <h4><font-awesome-icon icon="fa-solid fa-check" />Effectiveness Measurement</h4>
        <p>If you make a mistake, the game stops and you can measure your ability by how far you have progressed. You can also check the words you made mistakes on the Result page, allowing you to review them efficiently.</p>
      </div>
    </div>
  </div>
  <div class="service-feature">
    <h3 class="features-title">Service Steps</h3>
    <div class="features-items basis-3">
      <div>
        <h4><span class="number-tag">1</span>Choose from 4 options</h4>
        <p>Users read the word displayed on the screen and clicks on the option for its meaning.</p>
      </div>
      <div>
        <h4><span class="number-tag">2</span>Continue until you fail</h4>
        <p>Users choose the correct answer and can proceed to the next question. If the user fails, the game ends.</p>
      </div>
      <div>
        <h4><span class="number-tag">3</span>Try again</h4>
        <p>Users can try the game as many times as they wish.</p>
      </div>
    </div>
  </div>
  <div class="service-feature bg-w">
    <h3 class="features-title">Service Effects</h3>
    <div class="features-items reverse">
      <div>
        <font-awesome-icon icon="fa-solid fa-bolt" />
        <span>
          <h4>Stay Motivated</h4>
          <p>Simple and fun quizzes will keep you motivated. First of all, build a foundation for learning {{ languageName }} by touching a lot of vocabularies in a fun and easy way.</p>
        </span>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-handshake" />
        <span>
          <h4>Opportunities for New Challenges</h4>
          <p>Vocabulary Quiz Club is available in many foreign languages. It gives you a chance to easily try languages you have never studied before.</p>
        </span>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-hand-point-up" />
        <span>
          <h4>Practical Learning</h4>
          <p>In Vocabulary Quiz Club, you can learn words that are commonly used in real life and business situations. You can use the vocabulary you learn immediately.</p>
        </span>
      </div>
    </div>
  </div>
  <language-list/>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,0 q50,125 100,0 Z" fill="rgb(242, 240, 236)" />
  </svg>
</template>

<script>
import LanguageList from '../components/LanguageList.vue'
import Quiz from '../components/Quiz.vue'

export default {
  name: 'ServiceFeature',
  components: {
    LanguageList,
    Quiz
  },
  data() {
    return {
      languageName: this.$route.params.language + ' language',
      imageUrl: String
    }
  },
  mounted: function(){
    if (this.$route.path === '/') {
      this.imageUrl = `url(${require('../assets/background.avif')})`;
      this.languageName = 'foreign languages';
    } else {
      this.$route.params.language + ' language',
      this.imageUrl = `url(${require(`../assets/${this.$route.params.language}.avif`)})`;
    }
  }
};
</script>

<style>
.startQuiz {
  color: var(--main-brand-color);
  text-shadow: none;
  font-size: 1.2rem;
  display: block;
  width: 100%;
  line-height: 3rem;
  border: solid 1px var(--main-brand-color);
  background: white;
  width: 200px;
  max-width: 100%;
  margin: 1rem auto;
  padding: 0;
  box-shadow: var(--main-boxshadow-set);
  position: relative;
  display: flex;
}

.startQuiz span {
  width: 100%;
  height: 100%;
  color: var(--main-brand-color);
  z-index: 10;
  font-weight: bold;
}

.startQuiz span:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  display: block;
  background: var(--main-brand-color);
  z-index: -1;
  transition: .2s;
}

.startQuiz span:hover {
  color: #fff;
  cursor: pointer;
}

.startQuiz span:hover:before {
  width: 100%;
}

.startQuiz span svg {
  font-size: 1.5rem;
  vertical-align: middle;
  margin-left: 0.5rem;
}

.service-feature {
  padding: 1rem 0;
  background: var(--main-background-color);
}

.bg-w {
  background: #fff;
}

.features-title {
  text-align: center;
}

#service-message {
  color: #fff;
  text-align: center;
  text-shadow: black 0.1em 0.1em 0.2em;
  padding: 6rem;
  position: relative;
  z-index: 0;
}

#service-message::before {
  content: '';
  background-image: v-bind(imageUrl);
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(4px);
  z-index: -1;
}

#service-message div {
  font-size: 2em;
  z-index: 100;
}

#service-message div span {
  display: block;
  flex-basis: 100%;
}

.features-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  padding: 1rem;
}

.features-items div h4 {
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
}

.features-items div h4 svg {
  margin-right: 0.5rem;
  color: var(--main-brand-color);
  border: solid 2px var(--main-brand-color);
  border-radius: 50%;
  padding: 5px;
}

.features-items div p {
  color: var(--sub-font-color);
  text-align: justify;
}

.basis-4 div {
  flex-basis: 40%;
}

.basis-3 div {
  flex-basis: 25%;
  background: #fff;
  border: solid 2px var(--sub-brand-color);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
}

.reverse div {
  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  width: 80%;
  margin: 1rem auto;
}

.reverse div svg {
  color: var(--main-svg-color);
  border: solid 2px var(--main-svg-color);
  border-radius: 50%;
  padding: 2rem;
  box-shadow: var(--main-boxshadow-set);
  width: 4rem;
  height: 4rem;
}

.reverse div span {
  flex-basis: 60%;
  flex-grow: 1;
}

.reverse div:nth-child(even) {
  flex-direction: row-reverse;
}

.number-tag {
  width: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background: var(--sub-brand-color);
  margin-right: 0.5rem;
  padding: 0.5rem;
}

@media (max-width: 550px) {
  .features-items div {
    flex-basis: 90%;
  }

  #service-message p {
    text-align: justify;
  }

  .reverse div span {
    flex-basis: 100%;
  }

  .reverse div span h4 {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
}

@media (max-width: 850px) {
  .basis-3 div {
    flex-basis: 90%;
  }
  #features-items div span {
    display: block;
    flex-basis: 100%;
    font-size: 1.5rem;
  }
  #service-message div span {
    font-size: 1.5rem;
  }
  #service-message {
    padding: 3rem 1rem;
  }
}
</style>