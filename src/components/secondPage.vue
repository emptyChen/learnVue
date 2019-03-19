<template>
  <div>
  <div>
    <h1> This is second Page </h1>
    <div>
      <table class="t-ble">
        <thead>
          <tr>
            <th>序号</th>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td><input type="number" v-model="item.count"/></td>
            <td><button v-on:click="item.count=0">移除</button></td>
          </tr>
        </tbody>
      </table>
      <span>总数：{{ total()}}</span>
    </div>
  </div>
  <div>
    <button v-on:click="fshow = !fshow">点我变色</button>
    <transition name="fade">
      <p v-show="fshow" v-bind:style="sty">变色啦</p>
    </transition>
  </div>
    <div>
      <button v-on:click="post()">Vue.ajax</button>
    </div>
    <div>
      <p style="font-size: 21px;color: chartreuse;">计数器：{{ count }}</p>
      <button v-on:click="countadd()" >点点</button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'t-ble',
    data() {
      return {
        count:0,
        fshow:false,
        sty:{
          fontSize:'20px',
          color:'red'
        },
        json: [{
          id: 1,
          name: 'iphone 8',
          price: 5099,
          count: 1
        },
          {
            id: 2,
            name: 'iphone xs',
            price: 8699,
            count: 1
          },
          {
            id: 3,
            name: 'iphone xr',
            price: 6499,
            count: 1
          }]
      }
    },
    methods:{
      countadd:function(){

        /*setTimeout(function(){
          this.count+=20;
        },2000)*/
        setTimeout(() => {
          this.count+=20;
        }, 2000);
      },
      get:function(){
        this.$http.get('/try/ajax/ajax_info.txt').then(function(res){
          document.write(res.body);
        },function(){
          console.log("shibai");
        })
      },
      post:function(){
        //发送 post 请求
        this.$http.post('/try/ajax/demo_test_post.php',{name:"菜鸟教程",url:"http://www.runoob.com"},{emulateJSON:true}).then(function(res){
          document.write(res.body);
        },function(res){
          console.log(res.status);
        });
      },
      move:function(){

      },
      total:function(){
        var total = 0;
        for (var i =0;i<this.json.length;i++){
          total+= this.json[i].count * this.json[i].price;
        }
        return total;
      }
    },
    watch:{
      count(nval,oval){
        alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
      }
    }
  }
  /*setTimeout(function(){
    count+=20;
  },2000)*/
  //document.write("123"+$root.total());
</script>
<style>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
  }
</style>
