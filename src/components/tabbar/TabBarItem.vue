<template>
  <div>
    <li @click="itemClick" :style="isActive?{color:activeColor}:{}">
      <slot name="itemIcon"></slot>
      <slot name="itemTxt"></slot>
    </li>
    <!-- <li>
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </li> -->
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
       return  this.$route.path == this.path
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path).catch(err=>err)
      }
    }
  }
</script>

<style>
  
</style>