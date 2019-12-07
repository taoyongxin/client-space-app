<template>
	<div>
		<div class="header bl-df-between bl-header-background">
			<div class="left">
				<router-link to="/personal"><p class="bl-title al-right">xxx的个人空间</p></router-link>
			</div>
			<div class="right bl-row ">
				<router-link to="/index">
					<div class="bl-row al-left">
						<img src="../assets/image/首页.png" class="icon" />
						<h2>首页</h2>
					</div>
				</router-link>
				<router-link to="/notes">
					<div class="bl-row al-left">
						<img src="../assets/image/日志.png" class="icon" />
						<h2>日志</h2>
					</div>
				</router-link>
				<router-link to="/index">
					<div class="bl-row al-left">
						<img src="../assets/image/说说.png" class="icon" />
						<h2>说说</h2>
					</div>
				</router-link>
				<div @mouseleave="Socialcontactleave" @mouseenter="SocialcontactEnter">
						<div class="bl-row al-left">
							<img src="../assets/image/社交.png" class="icon" />
							<h2>社交</h2>
						</div>
					<div class="SocialContact-container bl-shadow bl-col" v-if="socialcontactistrue">
						<div class="SocialContact-card bl-col">
							<div class="bl-header-background SocialContact-card-header bl-col">
								<div class="bl-row">
									<div class="SocialContact-card-header-left"><img src="../assets/image/测试1.png" class="user-avatar" /></div>
									<div class="SocialContact-card-header-center bl-col">
										<div class="bl-row">
											<p>asdfghjkl</p>
											<i class="iconfont vip">&#xe65e;</i>
										</div>
										<div><p class="motto-font">树欲静而风不止</p></div>
									</div>
									<div class="SocialContact-card-header-right"><i class="iconfont weather">&#xe643;</i></div>
								</div>
						     <input type="text" class="socialcontact-search" placeholder="      搜索"/>
							</div>
							<div class="bl-df-between socialcontact-search-function"> 
							<i class="iconfont vip">&#xe64d;</i>
							<i class="iconfont vip">&#xe626;</i>
							</div>
						</div>
					</div>
				</div>

				<div @mouseleave="Setupleave" @mouseenter="SetupEnter">
						<div class="bl-row al-left">
							<img src="../assets/image/设置.png" class="icon" />
							<h2>设置</h2>
						</div>
					<div class="SetUp-container bl-col" v-if="setupistrue">
						<div class="Setup-label" :class="{ 'Setup-label-click': personalistrue === true }" @mouseleave="PersonalLeave" @mouseenter="PersonalEnter">个人资料</div>
						<div class="Setup-label" :class="{ 'Setup-label-click': switchistrue === true }" @mouseleave="SwitchLeave" @mouseenter="SwitchEnter">切换账号</div>
						<div class="Setup-label" :class="{ 'Setup-label-click': opinionistrue === true }" @mouseleave="OpinionLeave" @mouseenter="OpinionEnter">意见反馈</div>
					</div>
				</div>
			</div>
		</div>
		<router-view class="bl-container" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			personalistrue: false,
			switchistrue: false,
			opinionistrue: false,
			setupistrue: false,
			socialcontactistrue: false
		};
	},

	created: function() {},
	methods: {
		Setupleave() {
			this.setupistrue = false;
		},
		SetupEnter() {
			this.setupistrue = true;
		},
		PersonalLeave() {
			this.personalistrue = false;
		},
		PersonalEnter() {
			this.personalistrue = true;
		},
		SwitchLeave() {
			this.switchistrue = false;
		},
		SwitchEnter() {
			this.switchistrue = true;
		},
		OpinionLeave() {
			this.opinionistrue = false;
		},
		OpinionEnter() {
			this.opinionistrue = true;
		},
		Socialcontactleave() {
			this.socialcontactistrue = false;
		},
		SocialcontactEnter() {
			this.socialcontactistrue = true;
		}
	}
};
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
.vip {
	margin-left: 2px;
	margin-top: 8px;
}
.weather {
	font-size: 50px;
}
.header {
	position: fixed;
	width: 100%;
	height: 50px;
	z-index: 99999;
}
.SocialContact-card-header {
	width: 100%;
	opacity: 1;
}
.user-avatar {
	margin-top: 15px;
	margin-left: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.icon {
	margin-top: 7px;
	width: 20px;
	height: 20px;
}
.al-left {
	margin-top: 7px;
	margin-right: 30px;
}
.al-right {
	margin-top: 7px;
	margin-left: 30px;
}
.SetUp-container {
	margin-top: 12px;
	background: rgba(242, 242, 242, 0.5);
	width: 75%;
}
.Setup-label {
	margin-bottom: 10px;
}
.Setup-label-click {
	background: black;
	color: white;
}
.SocialContact-container {
	position: absolute;
	right: 2px;
	top: 50px;
	width: 17%;
	height: 1200%;
	background: white;
}
.SocialContact-card-header-center {
	margin-top: 15px;
	margin-left: 10px;
}
.motto-font {
	font-size: 10px;
}
.SocialContact-card-header-right {
	margin-top: 10px;
	margin-left: 10px;
}
.socialcontact-search {
	/* margin-top: -20px; */
	margin-top: 10px;
	width: 100%;
	height: 25px;
	opacity: 0.3;
	border-bottom: 1px solid #000000;
}
.socialcontact-search-function{
	margin-top: -30px;
	padding-left: 5px;
	padding-right: 5px;
}
</style>
