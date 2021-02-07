<template>
  <div>
     <TabBar>
      <TabBarItem path="/home" activeColor="blue">
        <i slot="itemIcon" class="iconfont icon-shouye"></i>
        <p slot="itemTxt">首页</p>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="blue">
        <i slot="itemIcon" class="iconfont icon-fenlei"></i>
        <p slot="itemTxt">分类</p>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="blue">
        <i slot="itemIcon" class="iconfont icon-gouwuchekong"></i>
        <p slot="itemTxt">购物车</p>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="blue">
        <i slot="itemIcon" class="iconfont icon-wode"></i>
        <p slot="itemTxt">我的</p>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from './tabbar/TabBar.vue';
  import TabBarItem from './tabbar/TabBarItem.vue';

  export default {
    name:'maintabbar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import '../assets/img/iconfont/iconfont.css';
  ul{list-style: none;}
	*{margin: 0;padding: 0;}
</style>