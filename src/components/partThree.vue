<template>
  <div class="grid-content grid-content-part3 diyheight">
    <div class="boxlt"></div>
    <div class="boxlb"></div>
    <div class="boxrt"></div>
    <div class="boxrb"></div>
    <div class="dp_line_common"></div>
    <div class="dp_part_title_common marbotm5">在制工单统计({{ total }})</div>
    <!-- <div class="dp_part_title_common marbotm5">{{name}}项目计划统计</div> -->
    <!-- <div class="dp_part3_echartitle">{{project}}项目计划甘特图</div> -->
    <div id="paththree" ref="paththree" style="width:100%;height: 4rem;"></div>
    <div class="dp_line_common"></div>
  </div>
</template>

<script>
import { getOrder } from "@/api/api";
export default {
  data() {
    return {
      name: "",
      project: "",
      line: "",
      pause: [], //暂停
      newcount: [], //新建
      count: [], //已完成
      execute: [], //执行
      pause1: [], //暂停
      newcount1: [], //新建
      count1: [], //已完成
      execute1: [], //执行
      precents: [], //百分比
      names: [],
      total: 0
    };
  },
  // mounted() {
  // 	this.partThree();
  // },
  methods: {
    toOrder() {
      if (!this.line) {
        this.pause = [];
        this.newcount = [];
        this.count = [];
        this.execute = [];
        this.names = [];
        this.precents = [];
        this.total = 0;
        this.partThree();
        return;
      }
      var all = this.$store.state.app.all;
      var customer = this.$store.state.app.customer;
      let params = {
        line: all ? "" : this.line,
        customer: customer
      };
      getOrder(params)
        .then(res => {
          this.pause = [];
          this.newcount = [];
          this.count = [];
          this.execute = [];
          this.pause1 = [];
          this.newcount1 = [];
          this.count1 = [];
          this.execute1 = [];
          this.names = [];
          this.precents = [];
          let list = res.data.records;
          this.total = list.length;
          for (var i = 0; i < list.length; i++) {
            this.pause.push(
              Math.round((list[i].PAUSECOUNT / list[i].SIZE) * 100)
            );
            this.newcount.push(
              Math.round((list[i].NEWCOUNT / list[i].SIZE) * 100)
            );
            this.count.push(Math.round((list[i].COUNT / list[i].SIZE) * 100));
            this.execute.push(
              Math.round((list[i].EXECUTECOUNT / list[i].SIZE) * 100)
            );

            this.pause1.push(list[i].PAUSECOUNT);
            this.newcount1.push(list[i].NEWCOUNT);
            this.count1.push(list[i].COUNT);
            this.execute1.push(list[i].EXECUTECOUNT);
            this.names.push(list[i].ORDER_CODE);
            this.precents.push(
              list[i].COUNT
                ? Math.round((list[i].COUNT / list[i].SIZE) * 100) + "%"
                : "0%"
            );
          }
          //准备好数据
          this.partThree();
        })
        .catch(err => {
          console.log(err);
        });
    },
    partThree() {
      var _this = this;
      let myChart3 = this.$echarts.init(this.$refs.paththree);
      myChart3.clear();
      let option3 = {
        textStyle: {
          color: "#ffffff",
          fontSize: ".06rem"
        },

        color: ["#18D1AC", "#3051D5", "#FFB90F", "#133752"],
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: function(params) {
            var result = "";
            var dotHtml =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#18D1AC"></span>';
            var dotHtml2 =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3051D5"></span>';
            var dotHtml3 =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#EC00DE"></span>';
            var dotHtml4 =
              '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#133752"></span>';
            result +=
              "2022-12-11</br>" +
              dotHtml +
              ' <span style="margin:0px 20px 10px 0px">已完成</span> ' +
              _this.count1[params[0].dataIndex] +
              "</br>" +
              dotHtml2 +
              ' <span style="margin:0px 20px 10px 0px">执行中</span> ' +
              _this.execute1[params[0].dataIndex] +
              "</br>" +
              dotHtml3 +
              ' <span style="margin:0px 20px 10px 0px">已暂停</span> ' +
              _this.pause1[params[0].dataIndex] +
              "</br>" +
              dotHtml4 +
              ' <span style="margin:0px 20px 10px 0px">未开始</span> ' +
              _this.newcount1[params[0].dataIndex];
            result = '<div style="margin:0px 6px">' + result + "</div>";
            return result;
          }
        },
        legend: {
          show: true,
          top: "2%",
          textStyle: {
            color: "#ffffff",
            fontSize: ".06rem"
          },
          itemWidth: 10,
          itemHeight: 10
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
              lineStyle: {
                color: "#194160",
                width: 1,
                type: "solid"
              }
            },
            axisLabel: {
              show: false,
              inside: false,
              textStyle: {
                fontSize: ".06rem"
              }
            },
            axisTick: {
              show: false
            },
            scale: false,
            silent: false
            // interval: 1,
            // min: 0
          }
          // {
          // 	type: 'value',
          // 	splitLine:{
          // 		show:false,
          // 		lineStyle:{
          // 			color:'#194160',
          // 			width:1,
          // 			type:'solid'
          // 		}
          // 	},
          // 	axisTick: {
          // 	   show: false
          // 	},
          // 	min: 1,
          // 	max: 10,
          // 	interval: 1,
          // 	axisLabel: {
          // 		formatter: function(params){
          // 			console.log(params);
          // 			return '05-01'
          // 		}
          // 	}
          // }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            max: this.total - 1,
            min: 0,
            data: this.names
          },
          {
            type: "category",
            axisTick: {
              show: false
            },
            max: this.total - 1,
            min: 0,
            data: this.precents
          }
        ],
        dataZoom: [
          {
            type: "slider",
            show: this.total > 7 ? true : false,
            yAxisIndex: [0, 1],
            filterMode: "empty",
            zoomLock: true,
            width: 0,
            height: "80%",
            start: 0,
            // handleColor:'#ff0000',
            // handleStyle: {
            //      borderColor: "#ff0000",
            //      borderWidth: "1",
            //      shadowBlur: 2,
            //      background: "#ff0000",
            //      shadowColor: "#ff0000",
            //  },
            // orient:'vertical',
            // boderColor:'transparent',
            // backgroundColor:'#ff0000',
            // filterColor:'#000000',
            end: Math.round((7 / this.total) * 100), //Math.round(7/21*100)
            handleSize: 0,
            showDataShadow: false,
            showDetail: false,
            left: "97%"
          }
        ],
        series: [
          {
            name: "已完成",
            type: "bar",
            silent: true,
            stack: "total",
            barWidth: "21px",
            label: {
              show: false
            },
            emphasis: {
              focus: "series"
            },
            data: this.count
          },
          {
            name: "执行中",
            type: "bar",
            stack: "total",
            barWidth: "21px",
            silent: true,
            label: {
              show: false
            },
            emphasis: {
              focus: "series"
            },
            data: this.execute
          },
          {
            name: "已暂停",
            type: "bar",
            legendHoverLink: false,
            silent: true,
            stack: "total",
            barWidth: "21px",
            label: {
              show: false
            },
            emphasis: {
              focus: "series"
            },
            data: this.pause
          },
          {
            name: "未开始",
            type: "bar",
            stack: "total",
            barWidth: "21px",
            silent: true,
            label: {
              show: false
            },
            emphasis: {
              focus: "series"
            },
            data: this.newcount
          }
        ]
      };
      myChart3.setOption(option3);
      window.addEventListener("resize", function() {
        myChart3.resize();
      });
    }
  }
};
</script>

<style>
.diyheight {
  height: 98.6%;
}
</style>
