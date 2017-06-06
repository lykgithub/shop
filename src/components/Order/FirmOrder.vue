<template>

	<div class="nologin">
		<x-header>订单确认</x-header>
		<group gutter="0">
			<cell-box is-link>
				<div class="adress">
					<p>
						<span class="peroinfo">陈鹏 188****7190 </span>
						<span class="defuat">默认</span>
					</p>
					<p> <img :src="require('./images/gps.svg')" />
						<span>广东省深圳市龙岗区平湖街道阿斯顿</span>
					</p>
				</div>
			</cell-box>
		</group>
		<group>
			<cell-box is-link>
				<div class="goodss">
				<div class="goodslist">
					<img :src=datalist.img alt="">
				</div>
				<div class="goodslist_info">	
					<p>{{datalist.title}}</p>
					<p class="guiges">规格：{{datalist.specs}}</p>
					<span class="prices">￥{{datalist.Price}}</span>
				</div>
				</div>
			</cell-box>
		</group>
		<group>
			<cell title="购买数量" v-model="datalist.amount"></cell>
			<cell title="送货方式" value="快递平邮" is-link></cell>
			<cell title="积分券" value="20" is-link></cell>
			<x-input title="买家留言" placeholder="有什么要说的吗"></x-input>
		</group>
		<div class="total">
			<div class="hjcharge">
				<span>合计：</span>
				<span class="moneys">￥{{datalist.newPrice}}</span>
			</div>
			<span class="docount" @click="goPay()">提交下单</span>
		</div>
	</div>

</template>

<script>
	import { XHeader, Group, Cell, CellBox, XInput } from 'vux'
	var datalist =''
	export default {
		components: {
			XHeader,
			Group,
			Cell,
			CellBox,
			XInput
			
		},
		data() {
			return {
				datalist:datalist
			}
		},
		mounted() {
			this.params = this.$store.getters.getParams
			var _this =this
			_this.datalist =this.params

		},

		methods: {
			goPay(){
				var _this = this
				var ids = _this.datalist.ids
				var specs =_this.datalist.specs
				var amount =_this.datalist.amount
				var uid = _this.datalist.uid
				this.$http.post("http://www.zhongrenjituan.cn/Shop/Order/app_add", this.$qs.stringify({
							id: ids,
							spec:specs,
							amount: amount,
							uid:uid
						}))
						.then(function(data) {
							_this.$router.push('/Pay')
						})

			}
		}
	}
</script>

<style scoped>
	.nologin {
		font-size: 15px;
		font-family: "微软雅黑";
	}
	
	.vux-header {
		background-color: #E6171E;
	}
	
	.adressinfo {
		margin-top: 0px;
	}
	
	.adress {
		font-size: 15px;
	}
	
	.adress p {
		margin: 3px 0;
		padding: 3px 0;
	}
	
	.peroinfo {
		font-weight: bold;
	}
	
	.adress p:nth-child(1) {
		padding-left: 24px;
	}
	
	.weui-cells {
		font-size: 14px !important;
	}
	
	.adress .defuat {
		display: inline-block;
		background-color: #E6171E;
		width: 40px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		color: #fff;
		font-size: 14px
	}
	.goodss{
		width: 100%;
		display: flex;
	}
	.goodslist {
		flex: 1;		
	}
	
	.goodslist img {
		width: 85px;
		height: 85px;
	}
	.goodslist_info{
		flex: 2;
		font-size: 13px
	}
	.goodslist_info .guiges{
		color: #8A8A8A;
	}
	.goodslist_info .prices{
		display: inline-block;
		margin-top: 5px;
		font-weight: bold;
		color: red;
		font-size: 18px
	}
	.total {
		height: 3.4em;
		width: 100%;
		line-height: 3.4em;
		background: #fff;
		bottom: 0;
		position: fixed;
	}
	
	.hjcharge {
		font-size: 16px;
		font-family: "微软雅黑";
		width: 40%;
		float: left;
		height: 100%;
		text-align: center;
	}
	
	.hjcharge .moneys {
		font-weight: bold;
		color: red;
	}
	
	.docount {
		color: #fff;
		float: right;
		display: inline-block;
		background: #E6171E;
		height: 100%;
		width: 150px;
		text-align: center;
	}
</style>