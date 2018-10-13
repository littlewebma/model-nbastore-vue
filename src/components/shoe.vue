<template>
<div id="shoe">
  <div v-for="(item,index) in shoes" class="shoe" @click="tz(index)">
    <img :src="item.url" alt="2">
    <div>{{item.price}}</div>
    <div>{{item.title}}</div>
    <div>{{item.detail}}</div>
  </div>
</div>
</template>

<script>
import vsj from "../../static/base/sj.js"
export default {
  name: 'shoe',
  data(){
    return{
      shoe:''
    }
  },
  created(){
    var shoe=vsj['shoe'];
    this.shoe=shoe
  },
  methods:{
    tz:function(index){
      var indexs=index
      this.$router.push({path:"/detail",name:"detail",query:{name:'shoe',xb:indexs}})
    }
  },
  computed:{
    shoes:function(){
      let val=this.$store.state.obj.message;
      var shoe =this.shoe;
      return shoe.filter(function(q){
        return q.detail.indexOf(val)!=-1 || q.price.indexOf(val)!=-1
      })
    }
  },
}
</script>

<style scoped>
  .shoe{
      height:250px;
      width:250px;
      border:1px solid red;
      float:left;
      text-align:center
  }
  img{
      height:150px;
      width:150px;
  }
</style>