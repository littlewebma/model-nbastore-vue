<template>
<div id="sz">
  <div v-for="(item,index) in szf" class="sz" @click="tz(index)">
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
  name: 'sz',
  data(){
    return{
      sz:''
    }
  },
  created(){
    var sz=vsj['sz'];
    this.sz=sz
  },
  methods:{
    tz:function(index){
      var indexs=index
      this.$router.push({path:"/detail",name:"detail",query:{name:'sz',xb:indexs}})
    }
  },
  computed:{
    szf:function(){
      let val=this.$store.state.obj.message;
      var sz =this.sz;
      return sz.filter(function(q){
        return q.detail.indexOf(val)!=-1 || q.price.indexOf(val)!=-1
      })
    }
  },
}
</script>

<style scoped>
  .sz{
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