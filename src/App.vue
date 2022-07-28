<template>
  <div id="app">

    <div class="container">
      <pageHeader label="App Header" />
      
      <div class="row no-gutters dr-shadow" style="background-color:rgba(255,255,255,1); margin:15px;">
        <div class="col-sm-12" style="padding:15px;">
          <h3 style="font-weight:bold; font-size:18px; ">Let's test your math together!</h3>
          <p>What is the sum of the two numbers?</p>
          <div class="inline">
            <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess"> <button v-on:click="check">Check Answer</button>
          </div>
          <button v-on:click="refresh">Refresh</button>
          <p>{{message}}</p>
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
