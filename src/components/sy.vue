<template>
<div id="sy">
  <div class="search">
    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="message"></el-input><el-button type="primary">搜索</el-button>
    <router-link to="/cart"><button>购物车</button></router-link>
  </div>
  <div class="block">
    <el-carousel height="500px"> 
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="item.url" alt="2">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
  name: 'sy',
  data(){
    return{
        banner:[
            {url: require('../../images/banner1.jpg')},
            {url: require('../../images/banner2.jpg')},
            {url: require('../../images/banner3.jpg')}
        ]
    }
  },
  computed: {
    message: {
      get () {
        return this.$store.state.obj.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
},
  created(){
  }
}
</script>

<style scoped>
    .block{
        height:500px;
        margin-left:25px
    }
    .el-carousel{
        width:1420px
    }
    .search{
        margin:10px 50px
    }
    .el-input{
        width:500px
    }
</style>