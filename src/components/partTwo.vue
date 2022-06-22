<template>
	<div class="grid-content grid-content-part3 part3self" >
		<div class="boxlt"></div>
		<div class="boxlb"></div>
		<div class="boxrt"></div>
		<div class="boxrb"></div>
		<div class="dp_part_title_common">项目情况统计({{total}})</div>
		<div class="dp_part2_cnt">
			<div v-for="(item,index) in list" :key="index" :class="'dp_part2_cnt_cell '+ (index==curindex?'fdclick':'')" @click="getProjects(index,item.PROJECT)">
				<font>{{item.PROJECT}}</font><br />
				<img src="../../static/temp.png" class="dp_fd" alt="">
			</div>
		</div>
		<div class="dp_arrow">
			<img src="../../static/arrow.png" class="arrow" alt="" v-show="list.length > 6">
		</div>
	</div>
</template>

<script>
	import { getProject } from '@/api/api';
	export default{
		data(){
			return{
				curindex:-1,
				customer:'',
        total:0,
				list:[]
			}
		},
		methods:{
			getProjects(index,project){
        this.$store.commit("setAll", false);
				this.curindex = index;
				this.$emit('toPartThree',project)
			},
			partTwo() {
				let params = {
					customer:this.customer
				}
				getProject(params).then(res => {
					this.list = res.data.records;
          this.total = this.list.length;
					if(this.list.length > 0){
						this.$emit('toPartThree',this.list[0].PROJECT)
					}
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>

<style>
	.dp_part2_cnt {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 10px;
		height: 1.15rem;
		overflow-y: scroll;
	}

	.dp_part2_cnt_cell {
		width: 30%;
    height: 80px;
		margin-bottom: .05rem;
		padding: .05rem 0px;
		background-color: #012F50;
		border-radius: 3px;
		color: #ffffff;
    margin-left: 3%;
	}

	.dp_part2_cnt_cell font:nth-child(1) {
		font-weight: bold;
		font-size: .105rem;
	}

	.dp_part2_cnt_cell_font2 {
		font-size: 10px;
	}
	.dp_fd{
		width: .18rem;
		height: .23rem;
	}
	.fdclick{
		background-color: #4FD1AD;
	}
	.part3self{
    height: 337px;
		background-color: #031D37;
		position: relative;
		margin-top: .1rem;
	}
</style>
