<template>
  <div>
   <!-- v-for 的优先级比 v-if 更高-->
  <h1> This is first Page </h1>
    <ul>
      <template v-for="item in list">
        <li is="todo-item">{{ item }}</li>
      </template>
    </ul>
    <button class="app-button" v-on:click="qqqq">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button class="app-button" @click.once="warn('Form cannot be submitted yet',$event)">warn</button>
    <input v-on:keyup.enter="submit">
    <input v-on:keypress="submit" v-model="picked" type="number">
    <textarea v-model="message" placeholder="add multiple lines">155422</textarea>
    <div>
      <input type="checkbox" id="checkbox" v-model="check">
      <label for="checkbox">{{ check }}</label>
    </div>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <div id="example-6">
      <select v-model="selected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </div>
    <div v-for="n in 9">
      <b v-for="m in n">
        {{m}}*{{n}}={{m*n}}
      </b>
    </div>
  </div>
</template>
<script>
  export default {
    name:'firstPage',
    data(){
      return{
        list:[1,2,3,4,5,6,7,8,9,10],
        counter:0,
        message:'',
        check:false,
        checkedNames:[],
        picked:'',
        selected:''
      }
    },
    methods:{
      qqqq:function(){
        this.counter += 1;
      },
      warn:function(msg,event){
        if (event) event.preventDefault()
        alert(msg)
      },
      submit:function(){
        alert(this.counter)
      }
    }
  }
</script>
<style>
  .app-button{
    height: 40px;
    width:50px;
    border: 1px solid blue;
  }
</style>
