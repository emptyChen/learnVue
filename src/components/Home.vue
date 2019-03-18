<template>
  <div class="app-container">
    <h1 v-once> {{ title }} </h1>
    <section v-model="applist">
      <option v-for="item in  applist"
              :value="item">{{item}}
      </option>
    </section>
      <ul class="app-ul">
        <li v-for="todo in 10">
          {{ todo }}
        </li>
      </ul>
    <router-link id="FirstPart" to="/home/firstHome">FirstPart</router-link>
    <router-link id="SecondPart" to="/home/secondHome">SecondPart</router-link>
    <hr>
    <div id="app-5">
      <p>{{ message }}</p>
      <button @click="reverseMessage">逆转消息</button>
      <button @click="reverseMessage">逆转消息2</button>
    </div>
    <div id="example">
      <p>Original message: "{{ message2 }}"</p>
      <p>Computed reversed message: "{{ reversedMessage2 }}"</p>
      <p>now: "{{ now }}"</p>
      <p>now22: "{{ dateNow }}"</p>
      <input v-model="dateNow2" @change="fetchss()"/>
      <li v-for="n in evenNumbers">{{ n }}</li>
    </div>
    <router-view></router-view>

   </div>
</template>
<script>
  export default {
    name:'home',
    data() {
      return{
        title:'This is Home Page',
        applist: [1,2,3,4],
        numbers: [ 1, 2, 3, 4, 5 ],
        message:"kjsdl154kkl",
        message2:"hello",
        dateNow:new Date().toLocaleString(),
        dateNow2:''
      }
    },
    watch:{
      dateNow:function(){
        return new Date().toLocaleString();
      }
    },
    computed:{
      evenNumbers:function(){
        return this.numbers.filter(function(number){
          return number % 2==0;
        })
      },
      reversedMessage2:function(){
        return this.message2.split('').reverse().join('')
      },
      now :function(){
        return this.dateNow;
      }
    },
    methods:{
      fetchss:function(val){
        console.log("index-"+val);
      },
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      reverseMessage2:function () {
        this.reverseMessage();
      }
    },
    created:function(){
      this.fetchss();
      console.log("啊啊啊"+this.message);
    }
  }
</script>
<style>
  #app .app-ul{
    list-style: none;
  }

</style>
