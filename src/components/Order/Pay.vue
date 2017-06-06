<template>
	<div class="gopay">
		<x-header>收银支付</x-header>
		<group>
			<cell title="订单金额">
				<div slot="value">
					<span style="color: red">{{data.newPrice}}元</span>
				</div>
			</cell>

		</group>
		<group title='付款方式'>
			<cell-box>
				<img :src="require('./images/alipay.svg')" />
				<span class="ewm">支付宝支付</span>
			</cell-box>
			<cell-box>
				<img :src="require('./images/zfbpay.svg')" />
				<span class="ewm">支付宝二维码支付</span>
			</cell-box>
			<cell-box>
				<img :src="require('./images/wepay.svg')" />
				<span class="ewm">微信支付</span>
			</cell-box>
			<cell-box>
				<img :src="require('./images/wxpay.svg')" />
				<span class="ewm">微信二维码支付</span>
			</cell-box>
		</group>
	</div>
</template>

<script>
	import { XHeader, Group, Cell, CellBox } from 'vux'
	var data = ''
	export default {
		components: {
			XHeader,
			Group,
			Cell,
			CellBox
		},
		data() {
			return {
				data: data
			}
		},
		mounted() {
			this.params = this.$store.getters.getParams
			var _this = this
			_this.data = this.params
			console.log(_this.data.newPrice)

		},

	}
</script>

<style>
	.ewm {
		color: #666;
		display: inline-block;
		margin-top: -28px;
		position: absolute;
		margin-left: 35px;
		font-size: 16px;
	}
</style>