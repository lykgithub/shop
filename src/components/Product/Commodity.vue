<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="commodity">
		<div class="menue-mask" v-show="isshowMenue" @click="selectedMenue"></div>
		<div class="pic">
			<img :src=datalist.cover_url alt="">
		</div>
		<div class="basc-infor">
			<div class="prod-title">
				<span class="title-text">【{{datalist.brand}}】{{datalist.abstract}}</span>
			</div>
			<div class="price-wrap">
				<span class="prod-price">￥{{datalist.price}}</span>
				<a class="depreciate-arrival-inform" href="#">降价通知</a>
			</div>
			<div class="prod-act">
				{{datalist.brand}}
				<a href="#">【{{datalist.title}}】</a>
			</div>
		</div>
		<div class="prod-promotion">
			<div class="promo">
				<span>促销</span>
			</div>
			<div class="promotion-content" :class="{down:isshowMore}" @click="showMore()">
				<div class="promotion-item">
					<span class="chep-list" :class="{down:isshowMore}">可享受以下优惠</span>
				</div>
				<div class="promotion-item decress-less more" :class="{hiddeNarrow:isshowMore}">
					<span :class="{open:isshowMore}">
              满100.00元即赠热销商品，赠完即止，请在购物车点击领取
            </span>
				</div>
				<div class="promotion-item decress-more">
					<span :class="{open:isshowMore}">
              满100.00另加15.00元，或满200.00另加25.00元，或满300.00另加45.00元，即可在购物车换购热销商品
            </span>
				</div>
				<div class="promotion-item decress-less">
					<span>
              手机六个月碎屏保（赠完即止）
            </span>
				</div>
			</div>
		</div>
		<div class="select-infor">
			<div class="selected">
				<span>已选</span>
			</div>
			<div class="select-desc" @click="selectedMenue">
				<span>{{guige}}&nbsp;&nbsp;数量：&nbsp; {{goodsNumeber}}件</span>
				<span class="select-open"></span>
			</div>
		</div>
		<div class="gotodo" @click="selectInfor($event)">
			<ul>
				<li>客服</li>
				<li>收藏</li>
				<li>加入购物车</li>
				<li>立即购买</li>
			</ul>
		</div>
		<div class="selected-menue" :class="{open:isshowMenue}">
			<div class="menue-container">
				<div class="header">
					<div class="header_img">
						<img :src=datalist.cover_url alt="">
					</div>
					<div class="header_info">
						<span class="price">￥{{newPrice.toFixed(2)}}</span>
						<p>{{datalist.title}}</p>
					</div>

				</div>
				<div class="menue-content">
					<div class="select-infor">
						<div class="selected">
							<span>已选</span>
						</div>
						<div class="select-desc" @click="selectedMenue">
							<span>{{picked[0]}}&nbsp;&nbsp;数量：&nbsp; {{goodsNumeber}}件</span>
						</div>
					</div>
					<div v-for="(item,index) in specs" class="spec">
						<div class="spec-title">{{item.name}}</div>
						<div class="spec-content">
							<ul>
								<li v-for="value in item.spec">
									<label v-bind:for=value.id :class="{pick:picked[index]==value.name}">{{value.name}}</label>
									<input type="radio" v-bind:value=value.name :name=item.type class="radios" v-bind:id=value.id v-model=picked[index]>
								</li>
							</ul>
						</div>
					</div>
					<div class="count">
						<div class="count-number">数量</div>
						<div class="quantity-wrapper">
							<span class="quantity-reduce" @click="changeCounts(-1)">-</span>
							<input type="text" class="quantity-value" v-model="goodsNumeber">
							<span class="quantity-add" @click="changeCounts(1)">+</span>
						</div>
					</div>
					<div class="shopping" @click="gobuy()">确定</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var datalist = ''
	var params = {}
	export default {
		name: "",
		data() {
			return {
				pic: '',
				isshowMore: false,
				isshowMenue: false,
				goodsNumeber: 1,
				picked: [],
				datalist: datalist,
				specs: [],
				id: Number
			}
		},
		mounted() {
//			this.id = this.$route.query.plan //获取路由传过来的参数id
			this.id = this.$store.getters.getId //使用vuex里的id
			this.uid = sessionStorage.uid //获取session里面的uid
			var _this = this;
			this.$http.get("http://www.zhongrenjituan.cn/shop/index/goods_app", {
				params: {
					id: _this.id
				}
			}).then(function(data) {
				_this.datalist = data.data
				console.log(data.data)
				var color = data.data.spec_data[0].value.split(',')
				var object = {
					name: data.data.spec_data[0].name,
					type: "color",
					spec: []
				}
				for(var i = 0; i < color.length; i++) {
					object.spec.push({
						name: color[i],
						id: color[i]
					})
				}
				_this.specs.push(object)
			}, function() {})
		},
		computed: {
			newPrice() {
				var newPrice = this.datalist.price * this.goodsNumeber
				return newPrice
			},
			guige() {
				this.$store.dispatch('gotoCart', this.picked)
				return this.$store.getters.getPicked[0]
			}
		},
		methods: {
			showMore() {
				this.isshowMore = !this.isshowMore;
			},
			selectedMenue() {
				this.isshowMenue = !this.isshowMenue;
			},
			changeCounts(flag) {
				if(flag < 0 && this.goodsNumeber < 2) {
					this.goodsNumeber = 1
				} else if(flag < 0) {
					this.goodsNumeber--
				} else if(flag > 0) {
					this.goodsNumeber++
				}
			},
			selectInfor(e) {
				if(e.target.innerHTML == "加入购物车" || e.target.innerHTML == "立即购买") {
					this.isshowMenue = true
				}
			},
			gobuy() {
				var _this = this
				params.ids = _this.id
				params.amount = _this.goodsNumeber
				params.specs = _this.guige
				params.uid = _this.uid
				params.img = _this.datalist.cover_url
				params.title = _this.datalist.title
				params.newPrice = _this.newPrice
				params.Price = _this.datalist.price
				if(params.uid === undefined || params.uid == '') {
					_this.$router.push('/Login')
				} else {
					_this.$store.commit('toOrder', params)
					_this.$router.push('/FirmOrder')
				}
			}
		}
	}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
	@import "Commodity";
</style>