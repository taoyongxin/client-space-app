<template>
	<div>
		
		<div class="container-head bl-row">
			
			<div class="container-avatar"> 
			<!-- <div v-for="(c, index) in users" :key="index" class="container-avatar"> -->
				<img src="../assets/image/1.jpg" alt="" class="container-avatar">
			<!-- {{c.avatar}}</div> -->
			</div>
			
			
			<div class="container-information">
				<h3>用户名：</h3>
				<h3>目前职业：javaweb程序猿</h3>
				<h3>年龄：50</h3>
				<h3>用户名言：看电视了发生了打开</h3>
			</div>
          </div>
		
		<div class="container-body">
			<!-- <div v-for="(c, index) in users" :key="index" class="container-avatar"></div> -->
			<h3>adsgasgd</h3>
			<h3>adsgasgd</h3>
			<h3>adsgasgd</h3>
		
			
		</div>
	
	</div>
</template>

<script>
	export default {	
		data(){
			return {			
				users: [],		
				}
			},		
		created() {		
			this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {				
				console.log(res.data.data);
				this.users = res.data.data;
			});		
		},	
		methods:{}
		}
	
</script>

<style>
	.container-avatar{
		height: 150px;
		width: 170px;
		border-radius: 20px;
		margin-left: -35px;
		margin-top: 10px;
    }
	.container-information{
		margin-top: 40px;
	}
	.container-body{
		height: 250px;
		margin-top: 40px;
		margin-left: -50px;
		
	}
</style>
