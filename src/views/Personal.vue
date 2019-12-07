<template>
	<div class="container bl-col">
		<div class="header-background">
			<img src="../assets/image/1.jpg" class="header-avatar" />
			<div class="header-background-color bl-col">
				<div class="bl-row head-sign">
					<h1 class="head-font">XXX的个人空间</h1>
					<i class="iconfont vip">&#xe65e;</i>
				</div>
				<div class="introduction-position">
					<p class="introduction-font">了却君王天下事，赢得生前身后名，可怜白发生。</p>
				</div>
				<div class="bl-row avatar-position">
					<img src="../assets/image/测试1.png" class="avatar bl-shadow">
					<div class="bl-col">
						<p class="introduction-font">流浪汉</p>
					</div>
					
				</div>
			</div>
		</div>

		<div class="container-body bl-shadow bl-col">
			<img src="../assets/image/花边.png" class="purl">	
			<div class="bl-row ">
				<div class="bl-coll-3 left">
				<div class="left-first bl-row bl-shadow">
					<div class="bl-coll-4 first bl-col bl-center"><router-link to="/"><h2>50</h2><p>相册</p></router-link></div>	
					<div class="bl-coll-4 first bl-col bl-center"><router-link to="/"><h2>67</h2><p>说说</p></router-link></div>
					<div class="bl-coll-4 first-nob bl-col bl-center"><router-link to="/"><h2>97</h2><p>日志</p></router-link></div>
				</div>
				<div class="left-second bl-coll-4 bl-col">
					<div class="second bl-shadow"><h3>个人档案</h3></div>
					<div class="second-information bl-shadow"><h4 class="second-word">19岁，现居南京，蛇夫座青年</h4></div>
				</div>
				<div class="left-third bl-coll-4">
					<div class="third bl-shadow"><h3>最近访客</h3></div>
					<div class="third-photo bl-row">
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
						<div class="photo"><img src="../assets/image/1.jpg" class="photo-size"><p class="photo-word">123</p></div>
					</div>					
				</div>
				</div>
				<div class="right">
					<div class="tab">
						<span class="tab-item" :class="{active:introductionisActive}" @click="introductionclick">自我介绍</span>
						<span class="tab-item" :class="{active:loveisActive}" @click="loveclick">我的爱好</span>
					</div>
					<div class="" v-show="introductionistrue==true">2333
					</div>
					<div class="" v-show="loveistrue==true">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				introductionisActive: true,
				loveisActive: false,
				loveistrue: true,
				introductionistrue: false
				

			}
		},
		
		methods: {
			introductionclick() {
				this.loveistrue = true;
				this.introductionistrue = false;
				this.introductionisActive = true;
				this.loveisActive = false;
			},
			
			loveclick() {
				this.loveistrue = false;
				this.introductionistrue = true;
				this.introductionisActive = false;
				this.loveisActive = true;
			},
			
			
			
		}

	}
</script>

<style scoped>
	@font-face {
	  font-family: 'iconfont';  /* project id 1432485 */
	  src: url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.eot');
	  src: url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1432485_66zjv4u0u1.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: 'iconfont' !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.tab {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 40px;
		width: 200px;
		
	}
	
	.tab-item {
		cursor: pointer;
		margin-right: 10px;
		flex: 0 0 80px;
		text-align: center;
		line-height: 38px;
	}
	.active {
		color: rgb(116, 75, 196);
		font-weight: 600;
		border-bottom: 2px solid rgb(116, 75, 196);
	}
	.font{
		margin-top: 13px;
	}
	.vip {
		margin-left: 2px;
		margin-top: 28px;
	}
	.container {
		width: 100%;
		background-color: rgb(234, 234, 234);
	}
	.header-background {
		width: 100%;
		height: 400px;
	}
	.header-background-color {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 400px;
		background-color: rgba(116, 75, 196, 0.5);
	}
	.header-avatar {
		width: 100%;
		height: 400px;
	}
	.container-body{
		margin: 0 auto;
		width: 70%;
		height: 1000px;
		border-radius: 20px;
		background: #EEEEEE;
		margin-top: -10px;
		z-index: 0;
	}
	.head-sign{
		position: absolute;
		top: 17%;
		left: 20%;
	}
	.introduction-position{
		position: absolute;
		top: 35%;
		left: 30%;
	}
	.introduction-font{
		color: #FFFFFF;
		font-size: 20px;
	}
	.head-font{
		color: #FFFFFF;
	}
	.avatar{
		height: 120px;
		width: 120px;
		padding-left: 5px;
		padding-top: 5px;
		padding-right: 5px;
		padding-bottom: 5px;
		background: white;
		border-radius: 5px;
		border: 1px double #000000;
		margin-right: 15px;
	}
	.avatar-position{
		position: absolute;
		top: 75%;
		left: 19.5%;
		z-index: 999999;
	}
	.purl{
		margin-left: -3%;
		margin-top: -4%;
		width: 105%;
	}
	.left{
		height: 500px;
		margin-left: 2%;
	}
	.left-first{
       margin-top: 10px;
	   padding-right: 5px;
	   background: gainsboro;
	   padding-left: 5px;
	   height: 80px;
	}
	.left-second{
		margin-top: 30px;
	    height: 250px;
	}
	.left-third{
		
	}
	.first{
		border-right: 1px solid black;
		padding-right: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.first-nob{
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.second{
		border-bottom: 1px solid white;
		font-weight: 500;
		/* flex:  0 0 60%; */
		height: 30px;
		background-color: white;
		padding: 0 15px;
	}
	.second-information{
		
		font-weight: 100;
		/* flex:  0 0 60%; */
		height: 30px;
		background-color: white;
		padding: 0 15px;
		
	}
	.second-word{
		margin-top: 5px;
	}
	.third{
		border-bottom: 1px solid white;
		font-weight: 100;
		/* flex:  0 0 60%; */
		height: 30px;
		background-color: white;
		padding: 0 15px;
		margin-top: -150px;
	}
	.third-photo{
		flex-flow:row wrap;
	}
	.photo-size{
		height: 75px;
		width: 75px;
		margin-left: 4px;
		/* margin-right: 5px; */
		align-items: center;
	}
	.photo-word{
	    position: absolute;
		z-index: 100;
		margin-top: -25px;
		margin-left: 10px;
		color: white;
	}
	.right{
		height: 500px;
		margin-left: 20%;
	}
</style>
