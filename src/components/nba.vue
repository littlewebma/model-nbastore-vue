<template>
<div id="nba">
  <sy />
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="球衣" name="first"> <qys /> </el-tab-pane>
    <el-tab-pane label="上装" name="second"> <sz /> </el-tab-pane>
    <el-tab-pane label="下装" name="third"> <xz /> </el-tab-pane>
    <el-tab-pane label="鞋类" name="fourth"> <shoe /> </el-tab-pane>
    <el-tab-pane label="篮球" name="five"> <ball /> </el-tab-pane>
  </el-tabs>
  </div>
  
</div>
</template>

<script>
import vsj from "../../static/base/sj.js"
import qys from './qys.vue'
import sz from './sz.vue'
import xz from './xz.vue'
import shoe from './shoe.vue'
import ball from './ball.vue'
import sy from './sy.vue'
export default {
  name: 'nba',
  data(){
    return{
      activeName: 'first'
    }
  },
  methods: {
      handleClick(tab, event) {
      }
  },
  components:{
    qys,
    sz,
    xz,
    shoe,
    ball,
    sy
  },
  created(){
  }
  
}
</script>

<style scoped>
 
  img{
    width:200px;
    height:200px
  }
  .content{
    width:1500px;
    margin-left:25px
  }
</style>
