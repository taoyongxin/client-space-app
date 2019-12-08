<template>
	<div class="background-color bl-col">
		<div class="carousel-wrap">
			<transition-group tag="ul" class="slide-ul" name="slide">
				<li v-for="(item, index) in sliders" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
					<a :href="item.url"><img :src="item.image" alt="item.description" /></a>
				</li>
			</transition-group>
			<div class="carousel-items"><span v-for="(item, index) in sliders" :key="index" :class="{ active: index === currentIndex }" @mouseover="change(index)"></span></div>
		</div>
		<div class="bl-container bl-row container bl-shadow"></div>
	</div>
</template>
<script>
<<<<<<< HEAD
export default {
	name: 'Index',
	data() {
		return {};
	},
	created() {
		
=======
	export default {
	  name: 'Index',
	  data () {
	    return {
	
	    }
	  },
	  created () {
	    
	  }
>>>>>>> c2b68e2d8d6eef50d48f173c741f8353d8b39118
	}
};
</script>
<script>
/*轮播的效果*/
export default {
	data() {
		return {
			sliders: [
				{
					url: '#',
					description: 'one',
					image: 'http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191532_f2975b.jpg'
				},
				{
					url: '#',
					description: 'two',
					image: 'http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191630_ff8fef.jpg'
				},
				{
					url: '#',
					description: 'three',
					image: 'https://cdn.dribbble.com/users/1018201/screenshots/7816965/media/2ed92a6a7ee0017e28f3bbcaf88b8138.png'
				}
			],
			currentIndex: 0,
			timer: null
		};
	},
	created: function() {
		this.$nextTick(() => {
			this.timer = setInterval(() => {
				this.autoPlay();
			}, 3000);
		});
	},
	methods: {
		go() {
			this.timer = setInterval(() => {
				this.autoPlay();
			}, 3000);
		},
		stop() {
			clearInterval(this.timer);
			this.timer = null;
		},
		change(index) {
			this.currentIndex = index;
		},
		autoPlay() {
			this.currentIndex++;
			if (this.currentIndex > this.sliders.length - 1) {
				this.currentIndex = 0;
			}
		}
	}
};
</script>
<style scoped="scoped">
hr {
	width: 100%;
	margin: 0 auto;
	border: 0.5px solid #cccccc;
}
.background-color {
	width: 100%;
	height: 100%;
	background-color: rgb(234, 234, 234);
}
.container {
	border-radius: 2%;
	background: white;
	margin-top: 690px;
	z-index: 8000;
	padding: 30px 10px 10px 10px;
}
.left-middle {
	height: 300px;
}
.left-bottom {
	height: 350px;
}
.left-top-images {
	width: 100%;
	height: 70%;
}
.avatar-images {
	position: relative;
	top: -50px;
	margin: 0 auto;
}
.bl-card-body1 {
	position: relative;
	top: -40px;
}
.bl-card-bottom1 {
	position: relative;
	top: -15px;
}
.box {
	width: 100%;
	height: 600px;
	margin-bottom: 20px;
	background-color: aliceblue;
}
.content {
	border-radius: 2%;
	width: 80%;
	height: 75%;
	margin: 0 auto;
	border: 1px solid #cccccc;
	margin-top: 5%;
	margin-left: 10%;
	padding: 10px 10px 10px 10px;
}
.left {
	margin-right: 15px;
}
.main {
	margin-top: 10px;
	margin-right: 15px;
}
.right-top {
	height: 300px;
}
.right-middle {
	height: 250px;
}
table.one {
	border-collapse: separate;
	border-spacing: 20px 10px;
}
.bl-card-comment {
	width: 100%;
	height: 80px;
	border: 1px solid lightgrey;
	margin-bottom: 10px;
	background-color: aliceblue;
}
.comment {
	width: 100%;
	height: 100%;
	border: 0px;
}
.comment-right {
	align-items: center;
	margin-right: 15px;
}
.dynamic {
	width: 100%;
	height: 50px;
	margin-bottom: 10px;
	text-align: center;
	background-color: aliceblue;
}
.al-right {
	width: 30%;
	margin-top: 25px;
	align-items: center;
}
.icon {
	margin-left: 30px;
	width: 30px;
	height: 30px;
}
.box1 {
	width: 100%;
	height: 70px;
}
.box2 {
	float: left;
	width: 60%;
	margin-left: 20px;
	text-align: center;
	box-lines: multiple;
	margin-top: 20px;
	margin-bottom: 15px;
}
.box3 {
	width: 100%;
	display: grid;
	grid-template-columns: 160px 160px 160px;
	grid-template-rows: 170px 170px 170px;
}
.box3-card {
	padding: 5px 5px 5px 5px;
	border: 1px solid #eeeeee;
}
.box4 {
	margin-left: 65%;
	margin-top: 10px;
	width: 30%;
	height: 40px;
}
.comment1 {
	margin: 10px 10px 10px 10px;
	width: 90%;
	height: 40px;
}
.camera {
	margin-top: 15px;
}
/*轮播的效果*/
.carousel-wrap {
	width: 100%;
	height: 720px;
	position: absolute;
	top: 0px;
}
.slide-ul {
	width: 100%;
	height: 100%;
}
.slide-ul li {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.slide-ul li img {
	width: 100%;
	height: 100%;
}
.carousel-items {
	z-index: 100;
	position: relative;
	top: -80px;
	text-align: center;
	font-size: 0;
}
.carousel-items span {
	display: inline-block;
	width: 50px;
	height: 6px;
	margin: 0 5px;
	background-color: #eee;
	cursor: pointer;
}
.carousel-items .active {
	background-color: #ffa500;
}
/* 动画 */
.slide-enter-to {
	transition: all 1s ease;
	transform: translateX(0);
}
.slide-leave-active {
	transition: all 1s ease;
	transform: translateX(-100%);
}
.slide-enter {
	transform: translateX(100%);
}
.slide-leave {
	transform: translateX(0);
}
</style>
