<template>
	<div>
	<div class="header bl-df-between">
		<div class="left">
		 <p class="bl-title al-right">xxx的个人空间</p>
		</div>
		<div class="right bl-row ">
	     <router-link to="/">
			 <div class="bl-row al-left">
				 <img src="../assets/image/首页.png" class="icon"> 
				 <h2>首页</h2>
			 </div>
	     </router-link>
	     <router-link to="/file">
			 <div class="bl-row al-left">
				 <img src="../assets/image/日志.png" class="icon">
				  <h2>日志</h2>
			 </div>
	    
	     </router-link>
		 <router-link to="/">
			 <div class="bl-row al-left">
				 <img src="../assets/image/说说.png" class="icon">
				 <h2>说说</h2>
			 </div>
		
		 </router-link>
		 <router-link to="/file">
			 <div class="bl-row al-left">
				 <img src="../assets/image/归档.png" class="icon">
				 <h2>归档</h2>
			 </div>
		 
		 </router-link>
		 <router-link to="/">
			 <div class="bl-row al-left">
				 <img src="../assets/image/社交.png" class="icon">
				 <h2>社交</h2>
			 </div>
		
		 </router-link>
		 <router-link to="/file">
			 <div class="bl-row al-left">
				 <img src="../assets/image/设置.png" class="icon">
				 <h2>设置</h2>
			 </div>
		 </router-link>
		</div>
	
	</div>
	<router-view class="bl-container"/>
	</div>
	
	
</template>

<script>
</script>

<style scoped>
	.icon{
	    margin-top: 7px;
		width: 20px;
		height: 20px;
	}
    .al-left{
		margin-right: 20px;
	}
	.al-right{
		margin-left: 20px;
	}
</style>
