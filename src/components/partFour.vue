<template>
  <div class="grid-content grid-content-part3" style="height:100%">
    <div class="boxlt"></div>
    <div class="boxlb"></div>
    <div class="boxrt"></div>
    <div class="boxrb"></div>
    <div class="dp_line_common"></div>
    <div class="dp_part_title_common marbotm5">
      工厂生产进度统计({{ total }})
    </div>
    <!-- <div class="dp_part3_echartitle">{{project}}项目计划进度甘特图</div> -->
    <div
      id="partfour"
      ref="partfour"
      style="width: 100%;height: 1.71rem;"
    ></div>
    <div class="dp_line_common" style="margin-top: 10px;"></div>
  </div>
</template>

<script>
import { getSite } from "@/api/api";
export default {
  data() {
    return {
      project: "",
      pf_x_name: [
        "哈密生产工厂",
        "哈密生产工厂1",
        "哈密生产工厂2",
        "哈密生产工厂3"
      ],
      pf_already: [12, 5, 8, 11],
      pf_all: [22, 12, 15, 22],
      sites: [],
      total: 0
    };
  },
  // mounted() {
  //   this.partFour();
  // },
  methods: {
    toSite() {
      console.log("customer=", this.$store.state.app.customer);
      console.log("refresh=", this.$store.state.app.all);
      var all = this.$store.state.app.all;
      var customer = this.$store.state.app.customer;
      let params = {
        project: all ? "" : this.project,
        customer: customer
      };
      getSite(params)
        .then(res => {
          this.pf_x_name = [];
          this.pf_already = [];
          this.pf_all = [];
          this.sites = res.data.records;
          let list = this.sites;
          this.total = res.data.total;
          for (var i = 0; i < list.length; i++) {
            this.pf_x_name.push(list[i].NAME);
            this.pf_already.push(list[i].finishNum);
            this.pf_all.push(list[i].receiveNum);
          }
          if (list.length > 0) {
            this.$emit("toPartFive", list[0].CODE, list[0].NAME);
          } else {
            this.$emit("toPartFive");
          }
          //准备好数据
          this.partFour();
        })
        .catch(err => {
          console.log(err);
        });
    },
    partFour() {
      var _this = this;
      let myChart4 = this.$echarts.init(this.$refs.partfour);
      myChart4.clear();
      let option4 = {
		 textStyle: {
          color: "#ffffff",
          fontSize: ".06rem"
        },
        color: ["#1669E9", "#28E2DA"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          top: "1%",
          textStyle: {
            fontSize: ".06rem"
          },
          itemWidth: 10,
          itemHeight: 10
        },
        grid: {
          top: "18%",
          left: "3%",
          right: "4%",
          bottom: "2%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#194160",
              width: 1,
              type: "solid"
            }
          }
        },
        xAxis: {
          type: "category",
          data: this.pf_x_name,
          axisLabel: {
            inside: false,
            rotate: 28,
            textStyle: {
              fontSize: ".07rem",
              color: "#ffffff"
            }
          }
        },
        series: [
          {
            name: "已完成数量",
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "#ffffff",
                  position: "top",
                  formatter: function(params) {
                    var rent = params.value
                      ? Math.round(
                          (params.value / _this.pf_all[params.dataIndex]) * 100
                        ) + "%"
                      : "0%";
                    return rent;
                  }
                }
              }
            },
            label: {
              show: false
            },
            barWidth: "16px",
            emphasis: {
              focus: "series"
            },
            data: this.pf_already
          },
          {
            name: "已接收数量",
            type: "bar",
            barGap: "-100%",
            z: "0",
            barWidth: "16px",
            label: {
              show: false
            },
            emphasis: {
              focus: "series"
            },
            data: this.pf_all
          }
        ]
      };
      myChart4.setOption(option4);
      myChart4.off("click");
      myChart4.on("click", params => {
        var code = this.sites[params.seriesIndex].CODE;
        var name = this.sites[params.seriesIndex].NAME;
        this.$store.commit("setAll", false);
        this.$emit("toPartFive", code, name);
      });
      window.addEventListener("resize", function() {
        myChart4.resize();
      });
    }
  }
};
</script>

<style></style>
