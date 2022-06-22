<template>
	<div class="dp_part1" style="display: flex;justify-content: space-between;">
		<div v-for="(item,index) in list" :key="index" class="dp_part1_cell">
			<font class="font12">{{item.name}}</font>
			<font class="font25 mar15">{{obj[item.key]}}</font>
		</div>
	</div>
</template>

<script>
	import { workOrderNum } from '@/api/api';
	export default{
		data(){
			return{
				obj:{},
				list:[
					{
						name:'已接收数量',
						key:'receiveNum'
					},{
						name:'在制工单数量',
						key:'workOrderNum'
					},{
						name:'工厂数量',
						key:'siteNum'
					},{
						name:'项目数量',
						key:'projectNum'
					}
				]
			}
		},
		mounted() {
			this.partHeader();
		},
		methods:{
			partHeader() {
				workOrderNum({}).then(res => {
					this.obj = res.data
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>

<style >
	.dp_part1_cell {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 23%;
		padding: .10rem 0px;
		border-radius: 6px;
		border: 1px solid #215484;
		background: linear-gradient(to left, #002B6B, #001937);
	}
</style>
