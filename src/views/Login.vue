<template>
	<div class="container">
			<div class="login-box bl-shadow ">
				<div class="tab">
					<span class="tab-item" :class="{active:signInisActive}" @click="signInclick">登录</span>
					<span class="tab-item" :class="{active:signUpisActive}" @click="signUpclick">注册</span>
				</div>
				<div class="tab-signIn-box" v-show="signInistrue==true">
					<input type="text" name="account" class="input-box bl-shadow" placeholder="手机号/邮箱/自定义账号" v-model="userDto.mobile">
					<p style="color: red; margin-left: 50px;" v-if="mobileistrue==true">!手机号不正确</p>
					<input type="password" name="password" class="input-box bl-shadow" placeholder="密码" v-model="userDto.password">
					<p style="color: red; margin-left: 50px;" v-if="passwordistrue==true">!密码不正确</p>
					
						<input type="text" class="input-box-small bl-shadow" placeholder="验证码" @keyup="getcode()" v-model="userDto.code" />
						<img class="verify" @click.prevent="refresh" ref="codeImg" />
					
					<div class="tab-bottom">
						<button class="bl-btn bl-btn-round bl-btn-nomal btn-login "  @click="signIn(userDto)" v-if="iscode">登录</button>
					</div>
				</div>
				<div class="tab-signUp-box" v-show="signUpistrue==true">
					<input type="text" name="account" class="input-box bl-shadow" placeholder="手机号" v-model="mobile" @keyup="getsignInmobile()">
					
					<input type="code" class="input-box-small bl-shadow" placeholder="验证码" @keyup="getsignUpcode()" v-model="code">
					
					<button @click="getCode" :disabled="codeDisabled" v-if="iscode1" class="bl-btn bl-btn-round bl-btn-nomal bl-btn-getcode" :class="{ 
						btn:btnDisabled,
						btnDisabled: btnDisabled}">
						{{msg}}
					</button>
					<button  v-if="!iscode1" class="bl-btn bl-btn-round bl-btn-nomal bl-btn-none1 btnDisabled" >
						获取验证码
					</button>
					<input type="password" v-model="password" class="input-box bl-shadow" placeholder="密码">
					
					<input type="e-mail" v-model="email" class="input-box bl-shadow" placeholder="邮箱">

					<div class="tab-bottom">
						<button class="bl-btn bl-btn-round bl-btn-nomal bl-btn-login " @click="signUp()" v-if="iscode2">注册</button>
						<!-- <button class="bl-btn bl-btn-round bl-btn-nomal bl-btn-none " v-if="!iscode2">注册</button> -->
					</div>
				</div>

			</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				iscode: false,
				iscode1: false,
				iscode2: false,
				timer: null,
				timer1: null,
				codeDisabled: false,
				btnDisabled: false,
				msg: '获取验证码',
				countdown:10,
				token: '',
				code:'',
				signUpcode:'',
				signInisActive: true,
				signUpisActive: false,
				signInistrue: true,
				signUpistrue: false,
				mobile:'',
				password: '',
				email:'',
				vertify: '',
				userDto: {
					password: '',
					mobile: '',
					code : ''
				},
				mobileistrue:false,
				passwordistrue:false

			}
		},
		created() {
			this.axios.get(this.GLOBAL.baseUrl + '/code/getImage', {
				responseType: 'blob'
			}).then(res => {
				// console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
				console.log(res.headers);
				//取得后台通过响应头返回的sessionId的值
				this.token = res.headers['access-Token'];
				alert(this.token)
			});
			setTimeout(() => {
			  window.L2Dwidget.init({
			    pluginRootPath: 'live2dw/',
			    pluginJsPath: 'lib/',
			    pluginModelPath: 'live2d-widget-model-z16/assets/',
			    tagMode: false,
			    debug: false,
			    model: { jsonPath: '/live2dw/live2d-widget-model-z16/assets/z16.model.json' },
			    display: { position: 'right', width: 150, height: 300 },
			    mobile: { show: true },
			    log: false
			  })
			}, 3000)
		},
		methods: {
			signInclick() {
				this.signInistrue = true;
				this.signUpistrue = false;
				this.signInisActive = true;
				this.signUpisActive = false;
			},
			refresh() {
				this.axios.get(this.GLOBAL.baseUrl + '/code/getImage', {
					responseType: 'blob'
				}).then(res => {
					console.log(res);
					var img = this.$refs.codeImg;
					let url = window.URL.createObjectURL(res.data);
					img.src = url;
				});
			},
			signUpclick() {
				this.signInistrue = false;
				this.signUpistrue = true;
				this.signInisActive = false;
				this.signUpisActive = true;
			},
			signIn(userDto) {
				let that=this;
				      this.axios({
				        method: 'post',
				        url: this.GLOBAL.baseUrl + '/user/login', //后端api
				        data: {
				          mobile: this.userDto.mobile,
						  password: this.userDto.password,
						  code: this.userDto.code
				        },
						/* headers: {
							'Access-Token': this.token //将token放在请求头带到后端
						} */
				      }).then(res=>{
				        console.log(res);
						if(res.data.msg=="成功"){
							localStorage.setItem('user', JSON.stringify(res.data.data));
							this.$router.push('/index');
						}
						if(res.data.msg=="账号错误"){
							this.mobileistrue=true;
						}else{
							this.mobileistrue=false;
						}
						if(res.data.msg=="密码错误"){
							this.passwordistrue=true;
						}else{
							this.passwordistrue=false;
						}
						
				      }).catch(function (error) {
				        console.log(error)
				      });

				/* this.$router.push('/nav'); */
				/* this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/user/login',
					data: JSON.stringify(this.userDto) */
					/* headers: {
						'Access-Token': this.token //将token放在请求头带到后端
					} */
			/* 	}).then(res => {
					alert("ss");
					if (res.data.msg === '成功') {
						alert('登录成功');
						localStorage.setItem('user', JSON.stringify(res.data.data));
						this.$router.push('/');
					} else {
						alert(res.data.msg);
						if(res.data.msg==""){
							this.mobileistrue=true
						}
						if(res.data.msg==""){
							this.passwordistrue=true
						}
						this.userDto.code = '';
					}
				}); */
			},
			signUp() {
				this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/api/album/code', //后端api
					data: {
						keywords: this.keywords
					},
				}).then(function(res) {
					console.log(res);
				}).catch(function(error) {
					console.log(error)
				});
			},
			getcode() {
				this.userDto.code.length == 6 ? this.iscode = true : this.iscode = false;
			},
			getsignUpcode() {
				this.signUpcode.length == 6 ? this.iscode2 = true : this.iscode2 = false;
			},
			getsignInmobile() {
				this.mobile.length == 11 ? this.iscode1 = true : this.iscode1 = false;
			},
			getCode() {
				if (this.mobile.length != 11) {
					this.msg = "验证失败";
					this.btnDisabled = true;
					this.codeDisabled = true;
					if (!this.timer1) {
						this.timer1 = setInterval(() => {
							clearInterval(this.timer1);
							this.msg = "获取验证码";
							this.timer1 = null;
							this.codeDisabled = false;
							this.btnDisabled = false;
						}, 1000)
					}
				} else {
					if (!this.timer) {
						this.timer = setInterval(() => {
							if (this.countdown > 0 && this.countdown <= 10) {
								this.countdown--;
								if (this.countdown !== 0) {
									this.btnDisabled = true;
									this.msg = "重新发送（" + this.countdown + ")";
								} else {
									clearInterval(this.timer);
									this.msg = "获取验证码";
									this.countdown = 10;
									this.timer = null;
									this.codeDisabled = false;
									this.btnDisabled = false;
								}
							}
						}, 1000)
					}
				}
			}
		}

	}
</script>

<style scoped>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(../assets/image/1.jpg);
		background-size: 120%;
	}

	.active {
		color: #00BBDD;
		font-weight: 600;
		border-bottom: 2px solid #00BBDD;
	}

	.login-box {
		width: 360px;
		height: 400px;
		border: 2px solid #FFFFFF;
		border-radius: 10px;
		background-color: #FFFFFF;
		position: absolute;
		top: 150px;
		left: 50%;
	}

	.tab {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 40px;
		background-color: #fff;
	}

	.tab-item {
		cursor: pointer;
		margin-right: 10px;
		flex: 0 0 80px;
		text-align: center;
		line-height: 38px;
	}

	.input-box {
		width: 70%;
		height: 30px;
		background-color: #fff;
		border: 1px solid #e4e6e5;
		border-radius: 3px;
		color: #333;
		font-size: 13px;
		padding-left: 30px;
		margin-top: 20px;
		margin-left: 50px;

	}

	.input-box-small {
		width: 30%;
		height: 30px;
		background-color: #fff;
		border: 1px solid #e4e6e5;
		border-radius: 3px;
		color: #333;
		font-size: 13px;
		padding-left: 30px;
		margin-top: 20px;
		margin-left: 50px;

	}

	.tab-signIn-box {
		height: 200px;
		background-color: #FFFFFF;
		color: #fff;
		margin-top: 0px;
		animation: myfirst 2s;
	}

	.tab-signUp-box {
		height: 220px;
		background-color: #FFFFFF;
		color: #fff;
		margin-top: 0px;
		animation: mysecond 2s;
	}

	@keyframes myfirst {
		from {
			margin-left: 20px;
			opacity: 0;
		}

		to {
			margin-left: 0px;
		}
	}

	@keyframes mysecond {
		from {
			opacity: 0;
		}

		to {}
	}
	@keyframes mythird {
		from {				
				opacity: 0;
			}
		
			to {}
		}

	.tab-bottom {
		height: 100px;
		background-color: #FFFFFF;
		color: #fff;
		margin-top: 0px;
	}

	.btn-login {
		color: #FFFFFF;
		background-color: rgb(26, 160, 52);
		margin-left: 50px;
		margin-top: 30px;
		cursor: pointer;
		animation: mythird 2s;
	}

	.bl-btn-none {
		color: #FFFFFF;
		background-color: rgb(128, 128, 128);
		margin-left: 50px;
		margin-top: 30px;
	}
	.bl-btn-none1 {
		color: #FFFFFF;
		background-color: rgb(128, 128, 128);
		margin-left: 35px;
	}

	.bl-btn-getcode {
		color: #FFFFFF;
		background-color: rgb(0, 121, 215);
		margin-left: 35px;
		cursor: pointer;
	}

	.code-box {
		display: flex;
		margin-top: 10px;
		margin-bottom: 20px;
		justify-content: space-between;
	}

	.verify {
		flex: 1 1 50%;
		height: 40px;	
		margin-left: 50px;
		margin-top: 10px;
	}

	.verify:hover {
		cursor: pointer;
	}

	.code {
		flex: 0 0 40%;
		height: 40px;
	}
	.btnDisabled {
		background-color: #ddd;
		color: #333;
	}
</style>
