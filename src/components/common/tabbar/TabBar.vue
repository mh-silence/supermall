<template>
  <div id="tabbar">
    <ul>
      <slot></slot>
    </ul> 
  </div>
</template>

<script>
  export default {
    name:'TabBar'
  }
</script>

<style>
  

  #tabbar{
    height:49px;
    background:#f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 5px 1px rgba(0,0,0,.5);
    }
  #tabbar ul{
    width:100%;
    height: 100%;
    padding-top:5px;
    box-sizing: border-box;
    display:flex;
    justify-content:space-around;
    text-align:center;
    font-size:14px
  }
  #tabbar ul li i{
    font-size:20px;
  }
  
</style>