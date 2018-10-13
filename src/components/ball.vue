<template>
<div id="ball">
  <div v-for="(item,index) in ballf" class="ball" @click="tz(index)">
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
  name: 'ball',
  data(){
    return{
      ball:''
    }
  },
  created(){
    var ball=vsj['ball'];
    this.ball=ball
  },
  methods:{
    tz:function(index){
      var indexs=index
      this.$router.push({path:"/detail",name:"detail",query:{name:'ball',xb:indexs}})
    }
  },
  computed:{
    ballf:function(){
      let val=this.$store.state.obj.message;
      var ball =this.ball;
      return ball.filter(function(q){
        return q.detail.indexOf(val)!=-1 || q.price.indexOf(val)!=-1
      })
    }
  },
}
</script>

<style scoped>
  .ball{
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