<template>
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
</template>
<script>
  export default{
    name:'t-ble',
    data() {
      return {
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
      move:function(){

      },
      total:function(){
        var total = 0;
        for (var i =0;i<this.json.length;i++){
          total+= this.json[i].count * this.json[i].price;
        }
        return total;
      }
    }
  }
</script>
