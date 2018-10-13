<template>
    <div id="cart">
        <table border="1">
            <thead>
                <tr>
                    <th>全选<input id="all" @click="selAll" type="checkbox" checked></th>
                    <th>商品图片</th>
                    <th>商品名称</th>
                    <th>商品单价</th>
                    <th>购买数量</th>
                    <th>移除</th>
                </tr>
            </thead>
            <tbody v-for='(item,index) in details'>
                <tr>
                    <td>
                        <input type="checkbox" :checked="item.check"  @click="sel(index) " class="isinput">
                    </td>
                    <td>
                        <img :src="item.url" alt="123">
                    </td>
                    <td>
                        {{item.title}}
                    </td>
                    <td>
                        {{item.price}}
                    </td>
                    <td>
                        <button type="button"  @click="subtract(index)">-</button>
                        <input type="text" v-model="item.count">
                        <button type="button" @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="remove(index)">移除</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>
                        总价: ￥ {{ totalPrices }}
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/nba"><button>回到首页</button></router-link>
    </div>
</template>

<script>
import vsj from "../../static/base/sj.js"
export default {
  name: 'cart',
  data(){
    return{
        name:'',
        cart:'',
        details:''
    }
  },
  created(){
      var name =this.$route.query.name;
      var details = this.$store.state.details;
      this.name=name;
      this.details=details;
  },
  methods:{
      add:function(index){
         this.details[index].count++
      },
      subtract:function(index){
          if(this.details[index].count>0){this.details[index].count--}
      },
      remove: function (index) {
            this.details.splice(index, 1);
      },
      selAll: function () {   //商品全选            
        let isAll = document.querySelector('#all');        
        if (isAll.checked == true) {                
            this.details.forEach(function(item, index) {                    
                item.check = true;                
            })              
         } else {                
                this.details.forEach(function(item, index) {                    
                    item.check = false;                
                })              
            };
    },
    sel:function(index){
        let isAll = document.querySelector('#all');
        let isinput = document.getElementsByClassName('isinput');
        let ischeck = isinput[index];
        this.details[index].check = !this.details[index].check;
        if(isinput[index].checked==true){
            isAll.checked=true
        }else{
            isAll.checked=false
        }
    }
  },
  computed: {
     totalPrices: function () {  //计算总价            
        let totalPrices = 0;             
        this.details.forEach(function (val, index) {
            if (val.check == true)
            totalPrices += parseFloat(val.price * val.count);
        })             
        return totalPrices.toString().replace(/\B(?=(\d{3})+$)/g, ','); //每三位数中间加一个‘，’ 
     }
  }
}
</script>

<style scoped>
    img{
        width:100px;
        height:100px
    }
</style>