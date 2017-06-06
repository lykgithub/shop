<template>
	<div class="login">
		<x-header>登录</x-header>
		<div class="input-container">
			<input class="username" type="text" placeholder="已验证手机号" v-model="username">
			<input class="password" type="password" placeholder="请输入密码" ref="input" v-model="password">
		</div>
		<div class="loginBtns">
			<div class="loginBtn" :class="{active:blurs}" ref="login" @click="tologin">登录</div>
			<!--<div class="loginOneStep">一键登录</div>-->
			<div class="quick-nav">
				<router-link to="/Forgetpw">
				<span class="fogort-pass">忘记密码</span>
				</router-link>
				<router-link to="/Register">
					<span class="quick-regis">快速注册</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		components: {
			XHeader
		},
		computed: {
			blurs() {
				return this.username.length > 0 && this.password.length > 0
			}
		},
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			tologin() {
				var param = {}
				param.mobile = this.username
				param.password = this.password
				var _this = this
				if(this.blurs) {
					this.$http.post("http://www.zhongrenjituan.cn/index.php?s=/user/user/login", this.$qs.stringify({
							account: param.mobile,
							password: param.password
						}))
						.then(function(response) {
							var status = response.data.status
							var uid = response.data.uid
							console.log(uid)
							if(status == 0) {
                               alert("输入错误")
							} else {
								sessionStorage.arrays = param.mobile
								sessionStorage.logined = true;
								sessionStorage.uid = uid;
								if(_this.$route.path == "/User" || _this.$route.path == "/ShopCar") {
									_this.$emit("logined")
								}else{
									_this.$router.back()
								}
							}
						})
				}
			}
		}
	}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
	.login {
		.input-container {
			padding: 0 10px;
		}
		.vux-header {
			background-color: #E6171E;
		}
		.username,
		.password {
			display: block;
			text-align: center;
			width: 100%;
			height: 40px;
			margin-top: 25px;
			border: 1px solid #ccc;
			border-radius: 2px;
		}
	}

	.loginBtns {
		padding: 0 10px;
	}

	.loginBtn,
	.loginOneStep {
		text-align: center;
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-top: 60px;
		border-radius: 2px;
		background-color: #eee;
		color: #848689;
		&.loginBtn.active {
			background-color: #f23030;
			color: white;
		}
	}

	.loginOneStep {
		margin-top: 30px;
		border: 1px solid #f23030;
		background-color: white;
		color: #f23030;
	}

	.quick-nav {
		margin-top: 30px;
		padding: 0 40px;
		span {
			display: inline-block;
			position: relative;
			color: #333;
			font-size: 14px;
			&:before {
				content: "";
				display: inline-block;
				width: 50px;
				height: 30px;
				margin-left: -50px;
				margin-top: -8px;
				position: absolute;
				transform: scale(0.8);
			}
			&.fogort-pass {
				float: left;
				&:before {
					background: url("./images/iconBg.png") 6px -52px;
				}
			}
			&.quick-regis {
				float: right;
				&:before {
					background: url("./images/iconBg.png") 6px -91px;
				}
			}
		}
	}
</style>
