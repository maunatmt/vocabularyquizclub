<template>
  <Transition name="fade">
  <button class="startQuiz" v-if="isFinished" v-on:click="start"><span>Try Again<font-awesome-icon icon="fa-solid fa-rotate-right" /></span></button>
  </Transition>
  <Transition name="fade">
    <div id="main" v-if="count > -1">
      <div id="question-board">
        <div id="question-card">
          <div class="partOfSpeech" v-show="isClicked">
            {{ items[count].part_of_speech }}
          </div>
          <div class="question" >{{ items[count].question }}</div>
          <div class="pronounciation" v-if="isClicked">
            {{ items[count].pronunciation }}
          </div>
        </div>
        <div id="button-container">
          <button v-bind:class="colorSetA" v-on:click="counter(count, items[count].question, items[count].answer, 'A', items[count].answer_value, items[count].A, items[count].pronunciation, items[count].part_of_speech)">
            <span>A</span>
            <span>{{ items[count].A }}</span>
            <div v-if="isCorrectA"><font-awesome-icon icon="fa-solid fa-check" /></div>
            <div v-else-if="isResponsedA&&!isCorrectA"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
          </button>
          <button v-bind:class="colorSetB" v-on:click="counter(count, items[count].question, items[count].answer, 'B', items[count].answer_value, items[count].B, items[count].pronunciation, items[count].part_of_speech)">
            <span>B</span>
            <span>{{ items[count].B }}</span>
            <div v-if="isCorrectB"><font-awesome-icon icon="fa-solid fa-check" /></div>
            <div v-else-if="isResponsedB&&!isCorrectB"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
          </button>
          <button v-bind:class="colorSetC" v-on:click="counter(count, items[count].question, items[count].answer, 'C', items[count].answer_value, items[count].C, items[count].pronunciation, items[count].part_of_speech)">
            <span class="option">C</span>
            <span>{{ items[count].C }}</span>
            <div v-if="isCorrectC"><font-awesome-icon icon="fa-solid fa-check" /></div>
            <div v-else-if="isResponsedC&&!isCorrectC"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
          </button>
          <button v-bind:class="colorSetD" v-on:click="counter(count, items[count].question, items[count].answer, 'D', items[count].answer_value, items[count].D, items[count].pronunciation, items[count].part_of_speech)">
            <span class="option">D</span>
            <span>{{ items[count].D }}</span>
            <div v-if="isCorrectD"><font-awesome-icon icon="fa-solid fa-check" /></div>
            <div v-else-if="isResponsedD&&!isCorrectD"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
          </button>
        </div>
      </div>
      <div id="score">
        <table>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Meaning</th>
            <th>Pronounciation</th>
            <th>Part of Speech</th>
          </tr>
          <tr v-for="result in results" :class="{ table_correct: result.answer==result.response }">
            <td>{{ result.index+1 }}</td>
            <td>{{ result.question }}</td>
            <td>{{ result.answer }}</td>
            <td>{{ result.pronounciation }}</td>
            <td>{{ result.part_of_speech }}</td>
          </tr>
        </table>
      </div>
    </div>
  </Transition>
  <div id="service-message" >
    <div><span>Learn {{ languageName }} </span><span>with free vocabulary quizzes</span></div>
    <p>Simple four-choice quizzes help you increase your vocabulary of {{ languageName }}</p>
    <!-- <button class="startQuiz" v-if="count < 0 && !($route.path === '/')" v-on:click="start"><span>Start Quiz</span></button> -->
  </div>
  <service-feature :language-name="$route.params.language" />
</template>

<script>
  import { ref } from 'vue'
  import axios from 'axios'
  import ServiceFeature from '../components/ServiceFeature.vue'

  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  export default {
    components: {
      ServiceFeature
    },
    props: [
      'languageName'
    ],
    data() {
      return {
        count: -1,
        items: [],
        results: [],
        pronunciation: "",
        isFinished:   false,
        isResponsedA: false,
        isCorrectA:   false,
        isResponsedB: false,
        isCorrectB:   false,
        isResponsedC: false,
        isCorrectC:   false,
        isResponsedD: false,
        isCorrectD:   false,
        isClicked:    false
      };
    },
    computed:{
      colorSetA: function() {
        return {
          before_answer:!this.isClicked,
          correct:   this.isCorrectA,
          incorrect: this.isResponsedA&&!this.isCorrectA
        }
      },
      colorSetB: function() {
        return {
          before_answer:!this.isClicked,
          correct:   this.isCorrectB,
          incorrect: this.isResponsedB&&!this.isCorrectB
        }
      },
      colorSetC: function() {
        return {
          before_answer:!this.isClicked,
          correct:   this.isCorrectC,
          incorrect: this.isResponsedC&&!this.isCorrectC
        }
      },
      colorSetD: function() {
        return {
          before_answer:!this.isClicked,
          correct:   this.isCorrectD,
          incorrect: this.isResponsedD&&!this.isCorrectD
        }
      },
      classColorReSet: function() {
        return {
          before_answer
        }
      }
    },
    methods: {
      start() {
        window.scrollTo({
          top: 0,
          behavior:'smooth'
        })
        if (this.isFinished) {
          this.count = 0;
          this.isFinished = !this.isFinished;
          this.results = [];
          this.reset();
          this.setQuiz();
        } else {
          this.count++;
        }
      },
      reset() {
        this.isResponsedA = false;
        this.isResponsedB = false;
        this.isResponsedC = false;
        this.isResponsedD = false;
        this.isCorrectA   = false;
        this.isCorrectB   = false;
        this.isCorrectC   = false;
        this.isCorrectD   = false;
        this.isClicked    = false;
      },
      counter(index, question, answer, response, answer_word, response_word, pronounciation, part_of_speech) {
        if (!this.isClicked && !this.isFinished) {
          this.results.unshift({"index": index, "question":question, "answer":answer_word, "response":response_word, "pronounciation":pronounciation, "part_of_speech":part_of_speech});
          if (answer == response) {
            switch (response) {
              case "A":
                this.isResponsedA = true;
                this.isCorrectA = true;
                break;
              case "B":
                this.isResponsedB = true;
                this.isCorrectB = true;
                break;
              case "C":
                this.isResponsedC = true;
                this.isCorrectC = true;
                break;
              case "D":
                this.isResponsedD = true;
                this.isCorrectD = true;
                break;
            }
          } else {
            switch (answer) {
              case "A":
                this.isCorrectA = true;
                break;
              case "B":
                this.isCorrectB = true;
                break;
              case "C":
                this.isCorrectC = true;
                break;
              case "D":
                this.isCorrectD = true;
                break;
            }
            switch (response) {
              case "A":
                this.isResponsedA = true;
                break;
              case "B":
                this.isResponsedB = true;
                break;
              case "C":
                this.isResponsedC = true;
                break;
              case "D":
                this.isResponsedD = true;
                break;
            }
            const date = new Date();
            const now = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
            const json_data = { "question":question, "meaning":answer_word, "pronounciation":pronounciation, "part_of_speech":part_of_speech, "datetime":now, "language":this.$route.params.language };
            let storageArray = JSON.parse(localStorage.getItem('results'));
            if (storageArray) {
              storageArray.unshift(json_data);
              localStorage.setItem('results', JSON.stringify(storageArray));
            } else {
              localStorage.setItem('results', JSON.stringify([json_data]));
            }
          }
          setTimeout(() => {
            if (answer == response) {
              this.count++;
              this.reset();
            } else {
              this.isFinished = true;
            }
          }, 2000)
          this.isClicked = true;
        }
      },
      setQuiz() {
        axios.get(`${this.$route.params.language}.json`)
        .then(function(response){
            this.items = response.data
            const questionTotalNumber = response.data.length;
        const baseArray = Array.from({ length: this.items.length }, (_, i) => i);
        const randomArray = shuffle(baseArray);
        const mirrorArray = randomArray.slice();
        const quizTable = [];
        let isQuestion = true;

        for (let i = 0; i < questionTotalNumber; i++) {
          const targetIndex = randomArray[i];
          let answer = "";
          let options = [];
          let targetQuestion = "";
          let optionIndexes = shuffle(mirrorArray).slice(0, 3);
          if (isQuestion) {
            targetQuestion = this.items[targetIndex].question;
            answer = this.items[targetIndex].answer;
            options = [...optionIndexes, targetIndex].map(index => this.items[index].answer);
            while (!(options[0]!=options[1]&&options[0]!=options[2]&&options[0]!=options[3]&&options[1]!=options[2]&&options[1]!=options[3]&&options[2]!=options[3])){
              optionIndexes = shuffle(mirrorArray).slice(0, 3);
              options = [...optionIndexes, targetIndex].map(index => this.items[index].answer);
            }
          } else {
            targetQuestion = this.items[targetIndex].answer;
            answer = this.items[targetIndex].question;
            options = [...optionIndexes, targetIndex].map(index => this.items[index].question);
            while (!(options[0]!=options[1]&&options[0]!=options[2]&&options[0]!=options[3]&&options[1]!=options[2]&&options[1]!=options[3]&&options[2]!=options[3])){
              optionIndexes = shuffle(mirrorArray).slice(0, 3);
              options = [...optionIndexes, targetIndex].map(index => this.items[index].question);
            }
          }
          const targetPronunciation = this.items[targetIndex].pronunciation;
          const targetPartOfSpeech = this.items[targetIndex].part_of_speech;
          const orderedOptions = shuffle(options);
          const answerOption = orderedOptions.indexOf(answer);
          const answerPlace = ['A', 'B', 'C', 'D'][answerOption];

          let answerValue = null;
          switch (answerPlace) {
            case "A":
              answerValue = orderedOptions[0];
              break;
            case "B":
              answerValue = orderedOptions[1];
              break;
            case "C":
              answerValue = orderedOptions[2];
              break;
            case "D":
              answerValue = orderedOptions[3];
              break;
          }

          quizTable.push({
            question: targetQuestion,
            A: orderedOptions[0],
            B: orderedOptions[1],
            C: orderedOptions[2],
            D: orderedOptions[3],
            answer: answerPlace,
            answer_value: answerValue,
            pronunciation: targetPronunciation,
            part_of_speech: targetPartOfSpeech,
          });
          
          isQuestion = !isQuestion;
        }
        this.items = ref(quizTable);
        }.bind(this))
        .catch(function(error){
            console.log(error)
        })
      }
    },
    mounted: function(){
      if (this.$route.path !== '/') {
        this.setQuiz();
        this.start();
      }
    }
  };
</script>

<style scoped>
#button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#button-container button {
  display: inline-block;
  font-size: 1.0rem;
  color: var(--main-brand-color);
  text-decoration: none;
  user-select: none;
  border: 1px var(--main-brand-color) solid;
  border-radius: 20px;
  transition: 0.4s ease;
  background: var(--main-button-color);
  margin: 1.0em 0.5em;
  width: 45%;
  height: 3.5rem;
  box-shadow: var(--main-boxshadow-set);
  text-align: center;
  display: flex;
}

#button-container button:hover {
  opacity: 0.8;
  cursor: pointer;
}

#button-container button:active {
  opacity: 1.0;
}

#button-container button span:nth-child(1) {
  font-size: 1.2em;
  text-decoration: none;
  user-select: none;
  background: var(--sub-brand-color);
  color: #fff;
  box-shadow: var(--main-boxshadow-set);
  font-weight: bold;
  margin: auto 0;
  display: inline-block;
  width: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  text-align: center;
}

#button-container button span:nth-child(2) {
  text-align: left;
  padding-left: 0.5rem;
  line-height: 100%;
  margin: auto 0;
  flex-grow: 1;
}

#main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items:center;
}

#question-board {
  flex-basis: 45%;
}

#question-card {
  width: 300px;
  max-width: 100%;
  height: 200px;
  margin: 0 auto;
  box-shadow: var(--main-boxshadow-set);
  font-size: 1.6rem;
  color: var(--main-brand-color);
  background: #fff;
  text-align: center;
  position: relative;
}

#score {
  display: block;
  flex-basis: 50%;
  min-height: 30rem;
  overflow-y: scroll;
  border: solid 1px lightGray;
  box-shadow: var(--main-boxshadow-set);
  margin: auto 0.5rem;
}

.fade-enter-active {
  transition: opacity 2.0s ease;
}

.fade-enter-from {
  opacity: 0;
}

.partOfSpeech {
  color: var(--sub-font-color);
  text-align: center;
  position: absolute;
  font-size: 0.7em;
  width: 100%;
  top: 20%;
}

.question {
  text-align: center;
  position: absolute;
  width: 100%;
  line-height: 40px;
  top: 35%;
}

.pronounciation {
  color: var(--sub-font-color);
  text-align: center;
  width: 100%;
  position: absolute;
  top: 60%;
  height: 40px;
}

#button-container button div {
  margin-left: auto;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  box-shadow: var(--main-boxshadow-set);
  margin: auto;
  padding: 5px;
}

#button-container button div svg {
  width: 25px;
  height: 25px;
}

#button-container button.correct {
  color: #fff;
  background: var(--main-brand-color);
}

#button-container button.incorrect {
  color: #fff;
  background: var(--incorrect-color);
  border-color: var(--incorrect-color);
}

.correct div {
  color: var(--main-brand-color);
  background: #fff;
}

.incorrect div {
  color: var(--incorrect-color);
  background: #fff;
}

.table_correct {
  color: var(--main-brand-color);
}

#score table {
  color: var(--incorrect-color);
}

@media (max-width: 550px) {
  #question-board {
    width: 90%;
  }
  #question-card {
    height: 150px;
  }
  #button-container button {
    width: 100%;
  }
}

@media (max-width: 850px) {
  #score {
    margin-top: 1rem;
    height: 200px;
    flex-basis: 90%;
  }
  #button-container {
    margin-top: 1rem;
  }
}

@media (max-width: 1020px) {
  #button-container button {
    width: 100%;
    margin: 0.5em 0;
  }
}
</style>