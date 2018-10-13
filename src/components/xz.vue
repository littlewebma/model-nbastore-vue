<template>
<div id="xz">
  <div v-for="(item,index) in xzf" class="xz" @click="tz(index)">
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
  name: 'xz',
  data(){
    return{
      xz:''
    }
  },
  created(){
    var xz=vsj['xz'];
    this.xz=xz
  },
  methods:{
    tz:function(index){
      var indexs=index
      this.$router.push({path:"/detail",name:"detail",query:{name:'xz',xb:indexs}})
    }
  },
  computed:{
    xzf:function(){
      let val=this.$store.state.obj.message;
      var xz =this.xz;
      return xz.filter(function(q){
        return q.detail.indexOf(val)!=-1 || q.price.indexOf(val)!=-1
      })
    }
  },
}
</script>

<style scoped>
  .xz{
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