<template>
  <div class="grid-content grid-content-part3 part5">
    <div class="boxlt"></div>
    <div class="boxlb"></div>
    <div class="boxrt"></div>
    <div class="boxrb"></div>
    <div class="dp_line_common"></div>
    <div class="dp_part_title_common marbotm5">
      产线生产进度统计({{ total }})
    </div>
    <!-- <div class="dp_part3_echartitle">{{project}}项目计划进度甘特图</div> -->
    <div style="height: 1.66rem;overflow-y: scroll;overflow-x: hidden;">
      <div
        id="partfive"
        class="partfive"
        ref="partfive"
        :style="[{ height: 0.3 + Math.round((total + 1) / 2) * 0.8 + 'rem' }]"
      ></div>
    </div>
    <div class="dp_arrow">
      <img
        src="../../static/arrow.png"
        class="arrow"
        alt=""
        v-show="total > 4"
      />
    </div>
    <div class="dp_line_common"></div>
  </div>
</template>

<script>
import { getLine } from "@/api/api";
export default {
  data() {
    return {
      site: "",
      name: "",
      project: "",
      lines: [],
      names: ["product"],
      alreay: ["已完成数量"],
      will: ["已接收数量"],
      total: 0
    };
  },
  methods: {
    toLine() {
      if (!this.site) {
        this.names = [];
        this.alreay = [];
        this.will = [];
        this.total = 0;
        this.partFive();
        this.$emit("toPartThree");
        return;
      }
      var all = this.$store.state.app.all;
      var customer = this.$store.state.app.customer;
      let params = {
        site: all ? "" : this.site,
        customer: customer
      };
      getLine(params)
        .then(res => {
          console.log("产线生产进度", res);
          const { records, total } = res.data;
          this.names = ["product"];
          this.alreay = ["已完成数量"];
          this.will = ["已接收数量"];
          this.lines = records;
          //   保留一个模拟例子，防止数据错乱
          //   this.lines = [
          //     {
          //       CODE: "SX-YL-L2",
          //       receiveNum: 142,
          //       finishNum: 67,
          //       NAME: "陕西总装厂叶轮生产线"
          //     },
          //   ];
          let list = this.lines;
          this.total = total;
          this.$set(this.$data, "total", list.length);
          for (var i = 0; i < list.length; i++) {
            var al = Math.round((list[i].finishNum / list[i].receiveNum) * 100);
            this.names.push(list[i].NAME);
            this.alreay.push(al);
            this.will.push(100 - al);
          }

          if (list.length > 0) {
            this.$emit("toPartThree", list[0].CODE, list[0].NAME);
          } else {
            this.$emit("toPartThree");
          }
          this.partFive();
        })
        .catch(err => {
          console.log(err);
        });
    },
    partFive() {
      let _this = this;
      let myChart5 = this.$echarts.init(this.$refs.partfive);
      myChart5.clear();
      const { random, PI, cos, sin } = Math;
      // 随机生成占比数据
      const val = random() * 100;
      // 圆心角的一半
      const angle = (PI * val) / 50 / 2;
      // 渐变起点
      const pointStart = [
        0.5 - 0.5 * cos(angle) * sin(angle),
        0.5 + 0.5 * cos(angle) * cos(angle)
      ];
      // 渐变终点
      const pointEnd = [0.5 - 0.5 * sin(angle), 0.5 + 0.5 * cos(angle)];

      var option5 = {
        tooltip: {
          show: false
        },
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00BEFF"
              },
              {
                offset: 1,
                color: "#7D16FF"
              }
            ]
          },
          "#374960"
        ],
        legend: {
          top: "1%",
          bottom: 0,
          left: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: ".06rem"
          },
          itemWidth: 10,
          itemHeight: 10
        },
        grid: {
          top: 0,
          bottom: 0
        },
        dataset: {
          source: [this.names, this.alreay, this.will]
        },
        series: []
      };
      for (var i = 0; i < this.total; i++) {
        var se = {
          type: "pie",
          // radius: ['30'*(4/this.pe.length)+'%', '40'*(4/this.pe.length)+'%'],
          radius: ["50px", "60px"],
          center: [],
          encode: {},
          label: {
            normal: {
              show: true,
              position: "center",
              textStyle: {
                fontSize: ".07rem",
                color: "#ffffff"
              },
              formatter: function(o) {
                //o.seriesIndex+1
                return (
                  _this.alreay[o.seriesIndex + 1] +
                  "%\n" +
                  _this.names[o.seriesIndex + 1]
                );
              }
            },
            emphasis: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          avoidLabelOverlap: false,
          hoverAnimation: false
        };
        // se.center = i%2==0 ? ['30%', (26+Math.floor(i/2)*29)*1.4*(4/this.pe.length)+'%'] : ['75%', (26+Math.floor(i/2)*29)*1.4*(4/this.pe.length)+'%'];
        var size = 105 + Math.floor(i / 2) * 138 + "px";
        se.center = i % 2 == 0 ? ["30%", size] : ["75%", size];
        se.encode = {
          itemName: "product",
          value: this.names[i + 1]
        };
        option5.series.push(se);
      }
      myChart5.setOption(option5);

      myChart5.off("click");
      myChart5.on("click", params => {
        var code = this.lines[params.seriesIndex].CODE;
        var name = this.lines[params.seriesIndex].NAME;
        this.$store.commit("setAll", false);
        this.$emit("toPartThree", code, name);
      });

      window.addEventListener("resize", function() {
        myChart5.resize();
      });
    }
  }
};
</script>

<style>
.partfive {
  width: 100%;
}
.part5 {
  height: 409px;
}
</style>
