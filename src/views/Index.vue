<template>
	<div id="Index"><h2>222</h2></div>
</template>

<script>
	export default {
	  name: 'Index',
	  data () {
	    return {
	
	    }
	  },
	  created () {
	    setTimeout(() => {
	      window.L2Dwidget.init({
	        pluginRootPath: 'live2dw/',
	        pluginJsPath: 'lib/',
	        pluginModelPath: 'live2d-widget-model-chitose/assets/',
	        tagMode: false,
	        debug: false,
	        model: { jsonPath: '/live2dw/live2d-widget-model-chitose/assets/chitose.model.json' },
	        display: { position: 'right', width: 150, height: 300 },
	        mobile: { show: true },
	        log: false
	      })
	    }, 3000)
	  }
	}
</script>

<style>
</style>
