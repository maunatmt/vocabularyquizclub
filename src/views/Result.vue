<template >
  <div id="result-container">
    <div class="service-feature">
      <h3 class="features-title">Quiz Result</h3>
    </div>
    <div id="quiz-result">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Meaning</th>
            <th>Pronounciation</th>
            <th>Part of Speech</th>
            <th>Datetime</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody v-show="items">
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.question }}</td>
            <td>{{ item.meaning }}</td>
            <td>{{ item.pronounciation }}</td>
            <td>{{ item.part_of_speech }}</td>
            <td>{{ item.datetime }}</td>
            <td>{{ item.language }}</td>
          </tr>
        </tbody>
      </table>
      <div id="result-message" v-show="!items">You will check words you failed after a game.</div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,0 q50,125 100,0 Z" fill="rgb(242, 240, 236)" />
  </svg>
</template>

<script>
export default {
    data() {
      return {
        items:[]
      };
    },
    mounted: function(){
      this.items = JSON.parse(localStorage.getItem('results'));
    }
  }
</script>

<style scoped>
  #result-container {
    background: rgb(242, 240, 236);
  }
  .service-feature p {
    text-align: center;
    color: gray;
  }
  #result-message {
    text-align: center;
    color: gray;
    margin-top: 2rem;
  }
  #quiz-result {
    overflow-x: scroll;
    overflow-y: scroll;
    min-height: calc(100vh - 16rem);
    /* min-height: 30rem; */
    width: 80%;
    max-width: 1050px;
    margin: auto;
  }
  @media (max-width: 850px) {
    #quiz-result {
      width: auto;
      margin: 0 0.5rem;
    }
  }
</style>