<template>
<div id="qys">
  <div v-for="(item,index) in qysf" class="qys" @click="tz(index)">
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
  name: 'qys',
  data(){
    return{
      qys:'',
    }
  },
  created(){
    var qys=vsj['qys']
    this.qys=qys
  },
  computed:{
    qysf:function(){
      let val=this.$store.state.obj.message;
      var qys =this.qys;
      return qys.filter(function(q){
        return q.price.indexOf(val)!=-1 || q.detail.indexOf(val)!=-1
      })
    }
  },
  methods:{
    tz:function(index){
      var indexs=index;
      this.$router.push({path:"/detail",name:"detail",query:{name:'qys',xb:indexs}})
    }
  }
}
</script>

<style scoped>
  .qys{
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