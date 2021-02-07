<template>
  <div>
    <maintabbar></maintabbar>
		<router-view></router-view>
  </div>
</template>

<script>

import maintabbar from './components/maintabbar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
	@import './assets/css/base.css';
</style>
