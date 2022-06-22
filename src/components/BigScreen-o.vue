<template>
	<div>
	<div class="dp_title">
		全国项目数据总览
	</div>
	<div class="container">
		<el-row class="dp_part1">
			<el-col :span="4">
				<div class="dp_part1_cell">
					<font class="font12">在制工单数量</font>
					<font class="font25 mar15">32</font>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="4">
				<div class="dp_part1_cell">
					<font class="font12">周累计工单计划数</font>
					<font class="font25 mar15">12</font>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="4">
				<div class="dp_part1_cell">
					<font class="font12">周累计工单完成数量</font>
					<font class="font25 mar15">12</font>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="4">
				<div class="dp_part1_cell">
					<font class="font12">车间数量</font>
					<font class="font25 mar15">12</font>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="4">
				<div class="dp_part1_cell">
					<font class="font12">项目数量</font>
					<font class="font25 mar15">12</font>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-row>
					<el-col :span="24">
						<div class="grid-content grid-content-part3">
							<div class="boxlt"></div>
							<div class="boxlb"></div>
							<div class="boxrt"></div>
							<div class="boxrb"></div>
							<div class="dp_line_common"></div>
							<div class="dp_part_title_common">公司服务客户统计</div>
								
							
							<vue-seamless-scroll :data="data" :class-option="optionHover" class="seamless-warp">
							<ul class="ul">
								<li v-for="(item,i) in data" :key="i">
									<div class="ul_index_common ul_index1">
										{{i+1}}
									</div>
									<div class="ul-title">{{item.name}}</div>
								</li>
							</ul>
							</vue-seamless-scroll>
							<div class="dp_line_common"></div>
						</div>
					</el-col>
				</el-row>
				<el-row>
					
					<el-col :span="24" style="margin-top: 35px;">
						<div class="grid-content grid-content-part3" style="background-color: #091944;position: relative;">
							<div class="boxlt"></div>
							<div class="boxlb"></div>
							<div class="boxrt"></div>
							<div class="boxrb"></div>
							<div class="dp_part_title_common">公司项目情况统计</div>
							<div class="dp_part2_cnt">
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
								<div class="dp_part2_cnt_cell">
									<font>B000123</font><br />
									<font class="dp_part2_cnt_cell_font2">01</font>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="12">
				<div class="grid-content grid-content-part3">
					<div class="boxlt"></div>
					<div class="boxlb"></div>
					<div class="boxrt"></div>
					<div class="boxrb"></div>
					<div class="dp_line_common"></div>
					<div class="dp_part_title_common marbotm5">产品1项目计划统计</div>
					<div class="dp_part3_echartitle">B00423项目计划甘特图</div>
					<div id="paththree" ref="paththree" style="width:100%;height: 4rem;">
					</div>
					<div class="dp_line_common"></div>
				</div>
			</el-col>
			<el-col :span="6">
				<el-row>
					<el-col :span="24">
						<div class="grid-content grid-content-part3">
							<div class="boxlt"></div>
							<div class="boxlb"></div>
							<div class="boxrt"></div>
							<div class="boxrb"></div>
							<div class="dp_line_common"></div>
							<div class="dp_part_title_common marbotm5">项目计划进度统计</div>
							<div class="dp_part3_echartitle">B00423项目计划甘特图</div>
							<div id="partfour" ref="partfour" style="width: 100%;height: 1.71rem;"></div>
							<div class="dp_line_common" style="margin-top: 10px;"></div>
						</div>
					</el-col>
				</el-row>
				<el-row style="margin-top: .1rem;">
					<el-col :span="24">
						<div class="grid-content grid-content-part3">
							<div class="boxlt"></div>
							<div class="boxlb"></div>
							<div class="boxrt"></div>
							<div class="boxrb"></div>
							<div class="dp_line_common"></div>
							<div class="dp_part_title_common marbotm5">工厂1项目计划金豆统计</div>
							<div class="dp_part3_echartitle">B00423项目计划甘特图</div>
							<div id="partfive" ref="partfive" style="width: 100%;height: 1.71rem;"></div>
							<div class="dp_line_common"></div>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
	</div>
</template>

<script>
	import chinaJson from "../../static/china.json";
	import vueSeamlessScroll from 'vue-seamless-scroll';
	import {
		getTest
	} from '@/api/api';
	export default {
		name: 'BigScreen',
		components: {
		        vueSeamlessScroll
		},
		data() {
			return {
				data:[]
			}
		},
		created() {
			let arr = []
			for (var i = 0; i < 10; i++) {
				arr.push({
					name:'乌兰察布外协工厂'+(i+1)
				})
			}
			this.data = arr;
		},
		computed: {
		 optionHover() {
			 return {
			   step: 0.5, // 数值越大速度滚动越快
			   limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
			   hoverStop: true, // 是否开启鼠标悬停stop
			   direction: 1, // 0向下 1向上 2向左 3向右
			   openWatch: true, // 开启数据实时监控刷新dom
			   singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
			   singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
			   waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
			 };
		  },
	   },
		mounted() {
			console.log(window.innerWidth+'..');
			console.log(window.outerWidth+'..');
			// this.getAxios()
			this.partThree();
			this.partFour();
			this.partFive();
		},
		methods: {
			getAxios() {
				getTest({}).then(res => {
					console.log(res);
				}).catch(err => {
					console.log(err);
				});
			},
			partThree() {
				let myChart3 = this.$echarts.init(this.$refs.paththree);
				let option3 = {
					color:['#133752','#3051D5','#18D1AC','#EC00DE'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						show: true,
						top: '2%',
						textStyle: {
							color: '#ffffff'
						},
						itemWidth: 10,
						itemHeight: 10
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: true
					},
					xAxis: [{
						type: 'value',
						splitLine:{
							show:true,
							lineStyle:{
								color:'#194160',
								width:1,
								type:'solid'
							}
						},
						axisTick: {
						   show: false
						},
						min: 0,
						max: 200,
						interval: 20,
						axisLabel: {
							formatter: '{value} 工序'
						}
					},{
						type: 'category',
						// axisLine:{
						// 	lineStyle:{
						// 		color:'#194160',
						// 		width:1,
						// 		type:'solid'
						// 	}
						// },
						axisTick: {
						   show: false
						},
						data: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07', '05-08', '05-09', '05-10']
					}],
					yAxis: [{
						type: 'category',
						axisTick: {
						   show: false
						},
						// axisLine:{
						// 	lineStyle:{
						// 		color:'#194160',
						// 		width:1,
						// 		type:'solid'
						// 	}
						// },
						data: ['工单1', '工单2', '工单3', '工单4', '工单5', '工单6', '工单7']
						
					},{
						type: 'category',
						axisTick: {
						   show: false
						},
						// axisLine:{
						// 	lineStyle:{
						// 		color:'#194160',
						// 		width:1,
						// 		type:'solid'
						// 	}
						// },
						data: ['20%', '30%', '40%', '10%', '7%', '29%', '25%']
						
					}],
					series: [{
							name: '未开始',
							type: 'bar',
							stack: 'total',
							barWidth: '21px',
							// itemStyle:{
							// 	borderRadius:[0,5,5,0]
							// },
							label: {
								show: false
							},
							emphasis: {
								focus: 'series'
							},
							data: [20, 10, 31, 34, 39, 33, 20]
						},
						{
							name: '执行中',
							type: 'bar',
							stack: 'total',
							barWidth: '21px',
							// itemStyle:{
							// 	borderRadius:[0,5,5,0]
							// },
							label: {
								show: false
							},
							emphasis: {
								focus: 'series'
							},
							data: [30, 13, 11, 34, 20, 30, 10]
						},
						{
							name: '已完成',
							type: 'bar',
							stack: 'total',
							barWidth: '21px',
							// itemStyle:{
							// 	borderRadius:[0,5,5,0]
							// },
							label: {
								show: false
							},
							emphasis: {
								focus: 'series'
							},
							data: [40, 12, 19, 23, 20, 30, 10]
						},
						{
							name: '已暂停',
							type: 'bar',
							stack: 'total',
							barWidth: '21px',
							itemStyle:{
								borderRadius:[0,5,5,0]
							},
							label: {
								show: false
							},
							emphasis: {
								focus: 'series'
							},
							data: [20, 12, 21, 14, 19, 33, 40]
						}
					]
				};
				myChart3.setOption(option3);
				window.addEventListener("resize", function() {
					myChart3.resize();
				});
			},
			partFour() {
				let myChart4 = this.$echarts.init(this.$refs.partfour);
				let option4 = {
					// title:{
					//   text:'B00423项目计划甘特图',
					//   left:'center',
					// textStyle:{
					// 	color:'#ffffff',
					// 	fontWeight:'normal',
					// 	fontSize:14
					// }
					// },
					color: ['#1669E9', '#28E2DA'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						top: 'bottom',
						textStyle: {
							color: '#ffffff'
						},
						itemWidth: 10,
						itemHeight: 10
					},
					grid: {
						top:'10%',
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: true
					},
					yAxis: {
						type: 'value',
						splitLine:{
							show:true,
							lineStyle:{
								color:'#194160',
								width:1,
								type:'solid'
							}
						}
					},
					xAxis: {
						type: 'category',
						data: ['产线1', '产线2', '产线3', '产线4']
					},
					series: [{
							name: '已投产数量',
							type: 'bar',
							itemStyle:{
								normal:{
									label: {
										show: true,
										fontSize:10,
										position: 'top',
										formatter: function (params) {
											return '50%';
										}　
									}
								}
							},
							label: {
								show: false
							},
							barWidth: '16px',
							emphasis: {
								focus: 'series'
							},
							data: [6, 5, 6, 6, 8, 8, 5]
						},
						{
							name: '已计划数量',
							type: 'bar',
							barGap: '-100%',
							z: '-1',
							barWidth: '16px',
							label: {
								show: false
							},
							itemStyle:{
								borderRadius:[5,5,0,0]
							},
							emphasis: {
								focus: 'series'
							},
							data: [10, 7, 8, 9, 10, 12, 8]
						}
					]
				};
				myChart4.setOption(option4);
				window.addEventListener("resize", function() {
					myChart4.resize();
				});
			},
			partFive() {
				let myChart5 = this.$echarts.init(this.$refs.partfive);
				let option5 = {
					color: ['#1669E9', '#28E2DA'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						top: 'bottom',
						textStyle: {
							color: '#ffffff'
						},
						itemWidth: 10,
						itemHeight: 10
					},
					grid: {
						top:'10%',
						left: '3%',
						right: '4%',
						bottom: '10%',
						containLabel: true
					},
					yAxis: {
						type: 'value',
						splitLine:{
							show:true,
							lineStyle:{
								color:'#194160',
								width:1,
								type:'solid'
							}
						}
					},
					xAxis: {
						type: 'category',
						data: ['产线1', '产线2', '产线3', '产线4']
					},
					series: [{
							name: '已投产数量',
							type: 'bar',
							label: {
								show: false
							},
							barWidth: '16px',
							emphasis: {
								focus: 'series'
							},
							data: [6, 5, 6, 6, 8, 8, 5]
						},
						{
							name: '已计划数量',
							type: 'bar',
							barGap: '-100%',
							z: '-1',
							barWidth: '16px',
							itemStyle:{
								borderRadius:[5,5,0,0]
							},
							label: {
								show: false
							},
							emphasis: {
								focus: 'series'
							},
							data: [10, 7, 8, 9, 10, 12, 8]
						}
					]
				};
				myChart5.setOption(option5);
				window.addEventListener("resize", function() {
					myChart5.resize();
				});
			}
		}
	}
</script>

<style>
	
	.seamless-warp{
	  margin-top: 10px;
	  width: 100%;
	  height: 300px;
	  overflow-y: scroll;
	}
	
	::-webkit-scrollbar {
	  width: 15px;
	}
	/* ::-webkit-scrollbar-track {
	  background-color: #002A68;
	} 
	::-webkit-scrollbar-thumb {
	  background-color: #01182F; 
	} 
	::-webkit-scrollbar-button {
	  background-color: #03223F;
	} 
	::-webkit-scrollbar-corner {
	  background-color: #03223F;
	} */
	/* 滚动条的滑轨背景颜色 滑块颜色 滑轨两头的监听按钮颜色 横向滚动条和纵向滚动条相交处尖角的颜色 */
	html{
		
	}
	body {
		color: #ffffff;
		text-align: center;
		/* background-image: url(../../static/dpbg.png); */
		background-color: #01182F;
		background-size: 100% 100%;
		height: 100%;
		margin: 0px;
	}
	.dp_title{
		width: 100%;
		height: 70px;
		background-image: url(../../static/header.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		line-height: 70px;
		font-weight: bold;
		font-size: 24px;
		color: #ffffff;
		text-align: center;
	}
	.container {
		margin: 0px 20px ;
	}
	.dp_part1{
		padding-bottom: 15px;
		margin-top: 25px;
	}
	.dp_part1_cell{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px 0px;
		border-radius: 6px;
		border: 1px solid #215484;
		background: linear-gradient(to left,#002B6B,#001937);
	}
	.dp_line_common{
		display: none;
		height: 2px;
		width: 100%;
		background: linear-gradient(to left,#001831,#416E78,#001831);
	}

	.ul {
		list-style: none;
		padding-left: 0px;
		height: auto;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.ul li {
		display: flex;
		padding: 8px 0px;
		font-size: 17px;
		font-weight: 100;
		padding-left: 20px;
	}

	.ul li:hover {
		background-color: #132F46;
	}

	.ul_index_common {
		width: 21px;
		height: 21px;
		line-height: 21px;
		border-radius: 21px;
		text-align: center;
		border-width: 2px;
		border-style: solid;
		font-size: 13px;
		font-weight: bold;
	}

	.ul_index1 {
		border-color: #F67783;
		color: #F67783;
	}

	.ul-title {
		margin-left: 8px;
	}

	.grid-content {
		position: relative;
		padding: 6px 0px;
	}

	.grid-content-part3 {
		background-color: #03223F
	}

	.dp_part_title_common {
		margin: .1rem 0px;
		font-size: 18px;
	}
	.marbotm5{
		margin-bottom: 5px;
	}

	.dp_part2_cnt {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: .17rem;
		padding: 0px 20px;
	}

	.dp_part2_cnt_cell {
		width: 30%;
		margin-top: .1rem;
		padding: .1rem 0px;
		background-color: #002541;
		border-radius: 5px;
		color: #ffffff
	}

	.dp_part2_cnt_cell font:nth-child(1) {
		font-weight: bold;
		font-size: 18px;
	}

	.dp_part2_cnt_cell_font2 {
		font-size: 10px;
	}

	.dp_part3_echartitle {
		font-size: 12px;
	}
	.font12{
		font-size: 12px;
	}
	.font25{
		font-size: 25px;
	}
	.mar15{
		margin: 0px 15px;
	}
	.boxlt{
		width: 7px;
		height: 7px;
		border: 1px solid #68B6A3;
		border-right: 0px; 
		border-bottom: 0px; 
		left: 0px;
		top: 0px;
		position: absolute;
	}
	.boxlb{
		width: 7px;
		height: 7px;
		border: 1px solid #68B6A3;
		border-right: 0px; 
		border-top: 0px; 
		bottom: 0px;
		left: 0px;
		position: absolute;
	}
	.boxrt{
		width: 7px;
		height: 7px;
		border: 1px solid #68B6A3;
		border-left: 0px; 
		border-bottom: 0px; 
		right: 0px;
		top: 0px;
		position: absolute;
	}
	.boxrb{
		width: 7px;
		height: 7px;
		border: 1px solid #68B6A3;
		border-left: 0px; 
		border-top: 0px; 
		bottom: 0px;
		right: 0px;
		position: absolute;
	}
</style>
