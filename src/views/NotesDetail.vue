<template>
	<div>
		<div id="notes">
			<div class="al-container">
			<p class="bl-title">{{notes.title}}</p>
			<div class="card bl-row">
				<div class="bl-col2">
				<router-link to="/profile">
				<img :src="notes.avatar" class="avatar">
				</router-link>
				</div>
				<div class="">
					<p class="bl-sub-title">{{notes.nickname}}</p>
					<p class="bl-sub-title">
					{{notes.createTime}}
					</p>
				</div>
			</div>
			<div v-html="notes.content"></div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				notes:{}
			};
		},
		created() {
			var id = this.$route.params.id;
			this.axios.get(this.GLOBAL.baseUrl + '/notes/' + id).then(res => {
				console.log(res.data.data);
				this.notes = res.data.data;
			});
		},
		computed: {},
		methods: {}
	};
</script>

<style scoped>
	#article{
		width: 100%;
		background: #EEEEEE;
	}
	.al-container{
		width: 60%;
		margin: 0 auto;
		background: white;
		padding-top: 50px;
		padding-left: 20px;
		padding-right: 20px;
	}
	.box{
		height: 50px;
		line-height: 50px;
	}
	.avatar{
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
	.card{
		margin-top: 10px;
	}
</style>
