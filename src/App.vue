<template>
  <div id="app">

    <div class="container">
      <pageHeader label="App Header" />
      
      <div>
        <h3>Let us test your arithmetic.</h3>
        <p>What is the sum of the two numbers?</p>
        <div class="inline">
          <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess"> <button v-on:click="check">Check Answer</button>
        </div>
        <button v-on:click="refresh">Refresh</button>
        <p>{{message}}</p>
      </div>

      <div style="width:960px; margin:auto;">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-6 text-start">
            My name
          </div>

          <div class="col-sm-12 col-md-6 text-end">
            The date
          </div>
        </div>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pageHeader from './components/pageHeader.vue'

export default {
  name: 'App',
  data(){
    return {
      x1: Math.ceil(Math.random() * 10),
      x2: Math.ceil(Math.random() * 10),
      guess: "",
      message: ""
    }
  },
  methods: {
    check(){
      if (this.x1 + this.x2 === parseInt(this.guess)) {
        this.message = "SUCCESS!"
      } else {
        this.message = "TRY AGAIN"
      }
    },
    refresh(){
      this.x1 = Math.ceil(Math.random() * 10);
      this.x2 = Math.ceil(Math.random() * 10);

      this.guess = ""
      this.message = ""
    },

  },
  components: {
    HelloWorld,
    pageHeader
  }
}
</script>
