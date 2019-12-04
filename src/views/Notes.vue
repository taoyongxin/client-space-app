<template>
	<div class="container bl-col">
		<div class="header-background">
			<img src="../assets/image/测试1.png" class="header-avatar" />
			<div class="header-background-color bl-col">
				<p class="title-front">日志</p>
				<p class="meta-front">念武陵春晚，云锁重楼。</p>
			</div>
		</div>
		<div class="calendar-background bl-shadow"></div>
		<div class="card bl-col" v-for="(item, index) in articles" :key="index">
			<div style="width: 5px; height: 60%;margin-bottom: 100; margin-top: 50px; position: absolute;left: 50%;  background:rgb(117, 187, 244);"></div>
			<div class="bl-row">
				<div class="card-left bl-shadow" v-if="index % 2 === 0">
					<div class="little-card">
						<router-link :to="{ path: '/notes/' + item.id }">
							<div class="card-header bl-col">
							<img :src="item.avatar" />
							<p class="card-title">{{ item.title.substring(0, 15) }}……</p>
						    </div>
						</router-link>
						
						<div class="card-body">
							<router-link :to="{ path: '/notes/' + item.id }">
							<p class="card-meta">{{ item.content.substring(0, 60) }} ……</p>
							<div class="bl-df-between">
								<p></p>
								<div class="bl-row">
									<img src="../assets/image/时钟.png" class="icon-clock" />
									<p class="card-meta">{{ item.createTime }}</p>
								</div>
							</div>
							</router-link>
							<hr />
							<div class="card-bottom bl-df-between">
								<div class=" bl-btn bl-row">
									<i class="iconfont">&#xe60c;</i>
									<p class="card-meta" v-if="item.likes >= 10000 && item.likes % 10 != 2" 
									:key="(index1 = item.likes / 10000 - (item.likes % 10000) / 10000)">
										{{ index1 }}W人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes >= 10000 && item.likes % 10 == 2"
										:key="(index1 = (item.likes + 1) / 10000 - ((item.likes + 1) % 10000) / 10000)"
									>
										{{ index1 }}W人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes < 10000 && item.likes >= 1000 && item.likes % 10 != 2"
										:key="(index1 = item.likes / 1000 - (item.likes % 1000) / 1000)"
									>
										{{ index1 }}K人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes < 10000 && item.likes >= 1000 && item.likes % 10 == 2"
										:key="(index1 = (item.likes + 1) / 1000 - ((item.likes + 1) % 1000) / 1000)"
									>
										{{ index1 }}K人点赞
									</p>
									<p class="card-meta" v-if="item.likes < 1000">{{ item.likes }}人点赞</p>
								</div>

								<div class=" bl-btn bl-row">
									<i class="iconfont">&#xe642;</i>
									<p
										class="card-meta"
										v-if="item.forwards >= 10000 && item.forwards % 10 != 2"
										:key="(index1 = item.forwards / 10000 - (item.forwards % 10000) / 10000)"
									>
										{{ index1 }}W人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards >= 10000 && item.forwards % 10 == 2"
										:key="(index1 = (item.forwards + 1) / 10000 - ((item.forwards + 1) % 10000) / 10000)"
									>
										{{ index1 }}W人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards < 10000 && item.forwards >= 1000 && item.forwards % 10 != 2"
										:key="(index1 = item.forwards / 1000 - (item.forwards % 1000) / 1000)"
									>
										{{ index1 }}K人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards < 10000 && item.forwards >= 1000 && item.forwards % 10 == 2"
										:key="(index1 = (item.forwards + 1) / 1000 - ((item.forwards + 1) % 1000) / 1000)"
									>
										{{ index1 }}K人转发
									</p>
									<p class="card-meta" v-if="item.forwards < 1000">{{ item.forwards }}人转发</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-right bl-shadow" v-if="index % 2 === 1">
					<div class="little-card">
						<div class="card-header bl-col">
							<img :src="item.avatar" />
							<p class="card-title">{{ item.title.substring(0, 15) }}……</p>
						</div>
						<div class="card-body">
							<p class="card-meta">{{ item.content.substring(0, 60) }} ……</p>
							<div class="bl-df-between">
								<p></p>
								<div class="bl-row">
									<img src="../assets/image/时钟.png" class="icon-clock" />
									<p class="card-meta">{{ item.createTime }}</p>
								</div>
							</div>
							<hr />
							<div class="card-bottom bl-df-between">
								<div class=" bl-btn bl-row">
									<i class="iconfont">&#xe60c;</i>
									<p class="card-meta" v-if="item.likes >= 10000 && item.likes % 10 != 2" 
									:key="(index1 = item.likes / 10000 - (item.likes % 10000) / 10000)">
										{{ index1 }}W人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes >= 10000 && item.likes % 10 == 2"
										:key="(index1 = (item.likes + 1) / 10000 - ((item.likes + 1) % 10000) / 10000)"
									>
										{{ index1 }}W人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes < 10000 && item.likes >= 1000 && item.likes % 10 != 2"
										:key="(index1 = item.likes / 1000 - (item.likes % 1000) / 1000)"
									>
										{{ index1 }}K人点赞
									</p>
									<p
										class="card-meta"
										v-if="item.likes < 10000 && item.likes >= 1000 && item.likes % 10 == 2"
										:key="(index1 = (item.likes + 1) / 1000 - ((item.likes + 1) % 1000) / 1000)"
									>
										{{ index1 }}K人点赞
									</p>
									<p class="card-meta" v-if="item.likes < 1000">{{ item.likes }}人点赞</p>
								</div>

								<div class=" bl-btn bl-row">
									<i class="iconfont">&#xe642;</i>
									<p
										class="card-meta"
										v-if="item.forwards >= 10000 && item.forwards % 10 != 2"
										:key="(index1 = item.forwards / 10000 - (item.forwards % 10000) / 10000)"
									>
										{{ index1 }}W人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards >= 10000 && item.forwards % 10 == 2"
										:key="(index1 = (item.forwards + 1) / 10000 - ((item.forwards + 1) % 10000) / 10000)"
									>
										{{ index1 }}W人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards < 10000 && item.forwards >= 1000 && item.forwards % 10 != 2"
										:key="(index1 = item.forwards / 1000 - (item.forwards % 1000) / 1000)"
									>
										{{ index1 }}K人转发
									</p>
									<p
										class="card-meta"
										v-if="item.forwards < 10000 && item.forwards >= 1000 && item.forwards % 10 == 2"
										:key="(index1 = (item.forwards + 1) / 1000 - ((item.forwards + 1) % 1000) / 1000)"
									>
										{{ index1 }}K人转发
									</p>
									<p class="card-meta" v-if="item.forwards < 1000">{{ item.forwards }}人转发</p>
								</div>
							</div>
						</div>
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
			articles: [],
			page: 1,
			scroll: '',
			forward: 0
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: this.GLOBAL.baseUrl + '/notes/user',
			data: {
				userId: 2,
				currentPage: this.page,
				pageSize: 4
			}
		}).then(res => {
			this.articles = res.data.data;
			console.log(res.data.data);
		});
	},
	methods: {
		loadMore() {
			this.page = this.page + 1;
			this.axios({
				method: 'post',
				url: this.GLOBAL.baseUrl + '/notes/user',
				data: {
					userId: 2,
					currentPage: this.page,
					pageSize: 4
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				if (temp.length === 0) {
					return;
				}
				for (var i = 0; i < temp.length; i++) {
					this.articles.splice(this.page * 4, 0, temp[i]);
				}
				console.log(this.articles.length);
			});
		},
		scrollDs() {
			//变量scrollTop是滚动条滚动时，距离顶部的距离
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//变量windowHeight是可视区的高度
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			//变量scrollHeight是滚动条的总高度
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			//滚动条到底部的条件
			if (scrollTop + windowHeight >= scrollHeight) {
				//到了这个就可以进行业务逻辑加载后台数据了

				this.loadMore();
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollDs);
	}
};
</script>

<style scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1432485 */
	src: url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.eot');
	src: url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.woff') format('woff'), url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1432485_tbp0hy4nslh.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	width: 15px;
	height: 15px;
	color: lightslategrey;
	margin-top: 8px;
	margin-right: 3px;
	margin-left: 10px;
}
.icon-red {
	color: red;
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
	background-color: rgba(255, 87, 34, 0.5);
}
.header-avatar {
	width: 100%;
	height: 400px;
}
hr {
	width: 100%;
	color: #eeeeee;
	height: 2px;
}
.title-front {
	color: white;
	font-size: 50px;
	position: absolute;
	top: 45%;
	left: 45%;
	font-weight: 700;
}
.meta-front {
	position: absolute;
	top: 70%;
	left: 42%;
	color: white;
	font-size: 20px;
	font-weight: 100;
}
.calendar-background {
	margin: 0 auto;
	width: 50%;
	height: 180px;
	margin-top: -50px;
	background: rgb(255, 255, 255);
	border-radius: 20px;
	z-index: 9999;
}
.card {
	margin: 0 auto;
}
.little-card {
	width: 320px;
	transition: all 0.6s;
	background: rgb(255, 255, 255);
	animation:myfirst 2s;
}
@keyframes myfirst
{
	from {margin-top: 100px; opacity: 0;}
	to {margin-top: 0px; }
}
.little-card:hover {
	width: 340px;
}
.card-title {
	color: #eeeeee;
	font-size: 17px;
	margin-top: -44px;
	text-align: center;
}
.card-meta {
	font-size: 15px;
	margin-top: 5px;
	margin-bottom: 11px;
	color: lightslategrey;
}

.card-left {
	margin-top: 200px;
	margin-right: 500px;
}
.card-right {
	margin-top: 200px;
	margin-left: 500px;
	width: 320px;
}
.card-header {
	width: 100%;
	height: 56%;
}
.card-body {
	width: 320px;
	padding-left: 10px;
	padding-right: 10px;
	margin: auto;
	margin-top: 20px;
}
.card-header img {
	width: 100%;
	height: 100%;
}
.icon {
	width: 50px;
	height: 50px;
}
.icon-clock {
	width: 15px;
	height: 15px;
	margin-top: 8px;
}
.coll {
	flex: 0 0 48%;
}
footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
}
</style>
