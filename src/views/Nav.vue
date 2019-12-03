<template>
	<div>
	<div class="header bl-df-between bl-header-background">
		<div class="left">
			<router-link to="/">
				 <p class="bl-title al-right">xxx的个人空间</p>
			 </router-link>
		</div>
		<div class="right bl-row ">
	    <router-link to="/">
			 <div class="bl-row al-left">
				 <img src="../assets/image/首页.png" class="icon"> 
				 <h2>首页</h2>
			 </div>
	     </router-link>
	     <router-link to="/notes">
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
		 <div>
			 <router-link to="/">
			 			 <div class="bl-row al-left">
			 				 <img src="../assets/image/社交.png" class="icon">
			 				 <h2>社交</h2>
			 			 </div>
			 </router-link>
			  <div class="SocialContact-container bl-col">
			  
			  </div>  
		 </div>
		
			 <div @mouseleave="Setupleave" @mouseenter="SetupEnter" >
				  <router-link to="/notes">
				 <div class="bl-row al-left" >
				 				 <img src="../assets/image/设置.png" class="icon">
				 				 <h2>设置</h2>
				 </div>
				 </router-link>
				 <div class="SetUp-container bl-col" v-if="setupistrue">
				 <div class="Setup-label"
				 :class="{'Setup-label-click':personalistrue === true}"
				 @mouseleave="PersonalLeave" 
				 @mouseenter="PersonalEnter"
				 >个人资料</div>
				 <div class="Setup-label"
				 :class="{'Setup-label-click':switchistrue === true}"
				 @mouseleave="SwitchLeave" 
				 @mouseenter="SwitchEnter"
				 >切换账号</div>
				 <div class="Setup-label"
				 :class="{'Setup-label-click':opinionistrue === true}"
				 @mouseleave="OpinionLeave" 
				 @mouseenter="OpinionEnter"
				 >意见反馈</div>
				 </div>
			 </div>
		</div>
	
	</div>
	<router-view class="bl-container"/>
	</div>
	
	
</template>

<script>
	export default {
		data() {
			return {	
			personalistrue:false,
			switchistrue:false,
			opinionistrue:false,
			setupistrue:false
			}
		},
		
		created: function() {},
		methods:{
			Setupleave(){
				this.setupistrue=false
			},
			SetupEnter(){
				this.setupistrue=true
			},
			PersonalLeave(){
				this.personalistrue=false
			},
			PersonalEnter(){
				this.personalistrue=true
			},
			SwitchLeave(){
				this.switchistrue=false
			},
			SwitchEnter(){
				this.switchistrue=true
			},
			OpinionLeave(){
				this.opinionistrue=false
			},
			OpinionEnter(){
				this.opinionistrue=true
			}
		}
	}
</script>

<style scoped>
	.header{
		position: fixed;
		width: 100%;
		height: 50px;
		z-index: 99999;
	}
	.icon{
	    margin-top:7px;
		width: 20px;
		height: 20px;
	}
    .al-left{
		margin-top:7px;
		margin-right: 30px;
	}
	.al-right{
		margin-top:7px;
		margin-left: 30px;
	}
	.SetUp-container{
		margin-top:12px;
		background:rgba(242, 242, 242,0.5);
		width: 75%;
	}
	.Setup-label{
		margin-bottom: 10px;
	}
	.Setup-label-click{
		background:black;
		color: white;
	}
</style>
