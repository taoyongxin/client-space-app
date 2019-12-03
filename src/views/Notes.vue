<template>
	<div class="container bl-col">
		<div class="header-background">
		<img src="../assets/image/测试1.png" class="header-avatar">
		<div  class="header-background-color bl-col">
			<p class="title-front">日志</p>
			<p class="meta-front">念武陵春晚，云锁重楼。</p>
		</div>
		</div>
		<div class="calendar-background bl-shadow">
			
		</div>
			<div class="card bl-col" v-for="(item,index) in articles" :key="index">
				<div class="bl-row" >
				<div class="card-left bl-shadow">
					{{item.title}}
				</div>
				<div style="width: 5px;height:500px; background: #000000;"></div>
				<div class="card-right bl-shadow">
					{{item.title}}
				</div>
				</div>	
			</div>
		<footer class="bl-row bl-footer-background">
				<div class="coll">
					<img src="../assets/image/上一页.png"  class="icon ">
				</div>
				<div class="coll"> 第页 </div>
				<div class="coll">
					<img src="../assets/image/下一页.png"class="icon">
				</div>
		</footer>
	</div>
</template>

<script >
		export default {
				data() {
					return {
					articles:[]
					}
				},
				created () {
				    this.axios({
						method: 'post',
						url:this.GLOBAL.baseUrl + '/notes/user',
						data:{
							userId:2,
							currentPage:1,
							pageSize:4
						}
					}).then(res=>{
						alert(res.data.data.length);
						this.articles = res.data.data;
						console.log(res.data.data);
					})
				},
				methods:{
					
				}
			}
</script>

<style scoped>
	.container{
		width: 100%;
		background-color: rgb(234, 234, 234);
	}
	.header-background{
		width: 100%;
		height:400px;
	}
	.header-background-color{
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height:400px;
			background-color:rgba(255, 87, 34,0.5) ;
		}
	.header-avatar{
		width: 100%;
		height:400px;
	}
	.title-front{
		color: white;
		font-size: 50px;
		position: absolute;
		top: 45%;
		left:45%;
		font-weight: 700;
	}
	.meta-front{
		position: absolute;
		top: 70%;
		left:42%;
		color: white;
		font-size: 20px;
		font-weight:100;
	}
	.calendar-background{
		margin: 0 auto;
		width: 50%;
		height: 180px;
		margin-top: -50px;
		background: rgb(255, 255, 255);
		border-radius:20px;
		z-index: 9999;
	}
	.card{
		margin: 0 auto;
	}
	.card-left{
		margin-top: 200px;
		margin-right:100px;
		width: 300px;
		height: 300px;
	}
	.card-right{
		margin-top: 400px;
		margin-left: 100px;
		width: 300px;
		height: 300px;
	}
	.icon{
		width: 50px;
		height: 50px;
	}
	.coll{
		flex: 0 0 48%;
	}
	footer{
		position:fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
	}
</style>
