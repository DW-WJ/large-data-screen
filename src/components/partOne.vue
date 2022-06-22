<template>
	<div class="grid-content grid-content-part3 part2">
		<div class="boxlt"></div>
		<div class="boxlb"></div>
		<div class="boxrt"></div>
		<div class="boxrb"></div>
		<div class="dp_line_common"></div>
		<div class="dp_part_title_common">客户统计({{total}})</div>
		<div class="ul">
			<div  v-for="(item,index) in list" :key="index" :class="'li '+ (index==curindex?'liclick':'')" @click="chooseCustomer(index,item.CUSTOMER)">
				<div class="boxlt"></div>
				<div class="boxlb"></div>
				<div class="boxrt"></div>
				<div class="boxrb"></div>
				{{item.CUSTOMER}}
			</div>
		</div>
		<div class="dp_arrow" >
			<img src="../../static/arrow.png" class="arrow" alt="" v-show="list.length > 8">
		</div>
		<div class="dp_line_common"></div>
	</div>
</template>

<script>
	import { getCustomer } from '@/api/api';
	export default{
		data(){
			return{
				curindex:0,
				list:[],
        total:0
			}
		},
		mounted() {
			this.partOne();
		},
		methods:{
			chooseCustomer(index,custome){
				this.curindex = index;
				this.$emit('toPartTwo',custome)
			},
			partOne() {
				getCustomer({}).then(res => {
					this.list = res.data.records;
          this.total = this.list.length;
					if(this.list.length > 0){
						this.$emit('toPartTwo',this.list[0].CUSTOMER)
					}
				}).catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>

<style>
  .part3{
    height: 468px;
  }
	.ul {
		height: 1.9rem;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		align-content:flex-start;
		overflow-y: scroll;
	}

	.li {
		font-size: .11rem;
		font-weight: 100;
		position: relative;
		width: 40%;
		padding: .07rem .06rem;
		background-color: #092B43;
		color: #4FD1AD;
		margin:.05rem 0px;
		margin-left: 3%;
		text-align: center;
		font-size: .09rem;
		border: 1px solid #1B5367;
	}
	.liclick{
		background-color: #4FD1AD;
		color: #ffffff;
	}
</style>
