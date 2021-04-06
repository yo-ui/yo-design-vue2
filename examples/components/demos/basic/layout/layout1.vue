/**
 *  author: eric
 *  create at: 2019-12-25 03:07:41
 */
<template>	
	<div class="demo">
		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-main>yo-main</yo-main>
			<yo-footer>yo-footer</yo-footer>
		</yo-container>

		<yo-container horizontal>
			<yo-side>yo-side</yo-side>
			<yo-container>
				<yo-header>yo-header</yo-header>
				<yo-main>yo-main</yo-main>
				<yo-footer>yo-footer</yo-footer>
			</yo-container>
		</yo-container>

		<yo-container horizontal>
			<yo-container>
				<yo-header>yo-header</yo-header>
				<yo-main>yo-main</yo-main>
				<yo-footer>yo-footer</yo-footer>
			</yo-container>
			<yo-side>yo-side</yo-side>
		</yo-container>

		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-container horizontal>
				<yo-side>yo-side</yo-side>
				<yo-container>
					<yo-main>yo-main</yo-main>
					<yo-footer>yo-footer</yo-footer>
				</yo-container>
			</yo-container>
		</yo-container>

		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-container horizontal>
				<yo-container>
					<yo-main>yo-main</yo-main>
					<yo-footer>yo-footer</yo-footer>
				</yo-container>
				<yo-side>yo-side</yo-side>
			</yo-container>
		</yo-container>

		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-container>
				<yo-side>yo-side</yo-side>
				<yo-main>yo-main</yo-main>
			</yo-container>
			<yo-footer>yo-footer</yo-footer>
		</yo-container>

		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-container>
				<yo-main>yo-main</yo-main>
				<yo-side>yo-side</yo-side>
			</yo-container>
			<yo-footer>yo-footer</yo-footer>
		</yo-container>

		<yo-container>
			<yo-header>yo-header</yo-header>
			<yo-main>yo-main</yo-main>
		</yo-container>

		<yo-container>
			<yo-side>yo-side</yo-side>
			<yo-main>yo-main</yo-main>
		</yo-container>
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
<style lang="less" scoped>
	.demo{
		&>.yo-container{
			margin-bottom:20px;
			.yo-header{
				background-color:#2470ff;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
			}
			.yo-main{
				background-color:#538df8;
				min-height: 300px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
			}
			.yo-side{
				background-color:#2452a7;	
				display: flex;
				color: #fff;
				align-items: center;	
				justify-content: center;		
				color: #fff;
			}
			.yo-footer{
				background-color:#3a6cca;
				display: flex;
				color: #fff;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
