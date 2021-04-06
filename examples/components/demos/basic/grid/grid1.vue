/**
 *  author: eric
 *  create at: 2019-12-21 12:21:40
 */
<template>
	<div class="demo">
		<yo-row>
			<yo-col span="24">yo-col-24</yo-col>
		</yo-row>

		<yo-row>
			<yo-col span="12">yo-col-12</yo-col>
			<yo-col span="12">yo-col-12</yo-col>
		</yo-row>
		<yo-row>
			<yo-col span="8">1</yo-col>
			<yo-col span="8">2</yo-col>
			<yo-col span="8">3</yo-col>
		</yo-row>
		<yo-row>
			<yo-col span="6">1</yo-col>
			<yo-col span="6">2</yo-col>
			<yo-col span="6">3</yo-col>
			<yo-col span="6">4</yo-col>
		</yo-row>

		<yo-row>
			<yo-col span="4">1</yo-col>
			<yo-col span="4">2</yo-col>
			<yo-col span="4">3</yo-col>
			<yo-col span="4">4</yo-col>
			<yo-col span="4">5</yo-col>
			<yo-col span="4">6</yo-col>
		</yo-row>

		<yo-row class="gutter" :gutter="20">
			<yo-col span="8">
				<span>yo-col-8</span>
			</yo-col>
			<yo-col span="8">
				<span>yo-col-8</span>
			</yo-col>
			<yo-col span="8">
				<span>yo-col-8</span>
			</yo-col>
		</yo-row>
		<yo-row class="gutter" :gutterY="20" :gutter="16">
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
		</yo-row>

		<yo-row class="gutter" :gutterY="5" :gutter="16">
			<yo-col span="24">
				<span>yo-col-24</span>
			</yo-col>
			<yo-col span="12">
				<span>yo-col-12</span>
			</yo-col>
			<yo-col span="12">
				<span>yo-col-12</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
		</yo-row>

		<p>offset</p>

		<yo-row class="gutter" :gutter="10">
			<yo-col span="4" offset="2">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="4">
				<span>yo-col-4</span>
			</yo-col>
			<yo-col span="14">
				<span>yo-col-14</span>
			</yo-col>
		</yo-row>

		<p>flex</p>

		<yo-row type="flex" direction="column">
			<yo-col span="4">yo-col-4</yo-col>
			<yo-col span="4">yo-col-4</yo-col>
			<yo-col span="4">yo-col-4</yo-col>
		</yo-row>

		<yo-row type="flex" justify="center">
			<yo-col span="4" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>
		<yo-row type="flex" justify="flex-start">
			<yo-col span="4" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>
		<yo-row type="flex" justify="flex-end">
			<yo-col span="4" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>
		<yo-row type="flex" justify="space-between">
			<yo-col span="4" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>
		<yo-row type="flex" justify="space-between">
			<yo-col span="4" flex="1" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" flex="2" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" flex="1" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>

		<yo-row type="flex" justify="center" align="center">
			<yo-col span="4" :style="[{height:'80px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'50px'}]">yo-col-4</yo-col>
			<yo-col span="4" :style="[{height:'30px'}]">yo-col-4</yo-col>
		</yo-row>
		<p>排序</p>
		<yo-row type="flex" justify="center" align="center">
			<yo-col span="4" order="2" :style="[{height:'80px'}]">yo-col-4 2</yo-col>
			<yo-col span="4" order="3" :style="[{height:'50px'}]">yo-col-4 3</yo-col>
			<yo-col span="4" order="1" :style="[{height:'30px'}]">yo-col-4 1</yo-col>
		</yo-row>
		
		<yo-row type="flex">
			<yo-col span="20" push="4" :style="[{height:'80px'}]">yo-col-4 2</yo-col>
			<yo-col span="4" pull="20" :style="[{height:'50px'}]">yo-col-4 1</yo-col>
		</yo-row>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less">
	.demo{
		.yo-row{
			&.gutter{
				// color: #f00;
				.yo-col{
					background-color:transparent;
				}
				span{
					display: block;
					background-color: aquamarine;
				}
			}
		}
	}
</style>
