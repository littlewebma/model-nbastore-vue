<template>
<div id="detail">
  <div class="dt">
      <img :src="url" alt="2">
  </div>
  <div class="xt-s">
    <div v-for="item in child" @click="change(item)" class="xt">
      <img :src="item.src" alt="1">
    </div>
  </div>
  
  <div class="js">
      <p>{{detail.price}}</p>
      <p>{{detail.detail}}</p>
      <p>{{detail.title}}</p>
      <div class="add" @click="add(detail)">
        <button>加入购物车</button>
      </div>
  </div>
  <router-link to="/nba"><button>回到首页</button></router-link>

  
</div>
</template>

<script>
import vsj from "../../static/base/sj.js"
export default {
  name: 'detail',
  data(){
    return{
      detail:'',
      child:'',
      url:'',
    }
  },
  methods:{
      change:function(item){
          this.url=item.src
      },
      add:function(detail){
        this.$store.state.details.push(detail)
        //this.$router.push({path:"/cart",name:"cart"})
        alert("添加成功")
       }
  },
  created(){
    var name =this.$route.query.name;
    var index=this.$route.query.xb;
    var detail=vsj[name][index];
    var child=detail.child;
    this.detail=detail;
    this.child=child;
    this.url=child[0].src
  }
  
}
</script>

<style scoped>
  .dt{
    width:500px;
    height:500px;
    margin:0 auto
  }
  .dt>img{
    width:500px;
    height:500px;
  }
  .xt{
    width:150px;
    height:150px;
    float:left;
    margin-left:70px
  }
  .xt>img{
    width:150px;
    height:150px;
  }
  .xt-s{
    width:900px;
    height:150px;
    border:2px solid blue;
    margin:10px auto
  }
  .xt-s:after{
    content:'';
    display:block;
    clear:both;
    height:0
  }
  .js{
    width:200px;
    height:300px;
    margin:0 auto
  }
</style>