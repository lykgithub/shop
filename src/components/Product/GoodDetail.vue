<template>
	<div class="googd-detail" style="margin-top: 44px;">
		<div class="detail-wrapper">
			<ul>
				<li v-for="src in datalist.images_url">
					<img :src="src" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var datalist = ''
	export default {
		name: "",
		data() {
			return {
				datalist:datalist
			}
		},
		mounted() {
		/*	this.id = this.$route.query.plan //获取路由传过来的参数id*/
		this.id = this.$store.getters.getId
			console.log(this.id)
			var _this = this;
			this.$http.get("http://www.zhongrenjituan.cn/shop/index/goods_app", {
				params: {
					id: this.id
				}
			}).then(function(data) {
				_this.datalist = data.data

			})
		}
	}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
	img {
		width: 100%;
	}
</style>
