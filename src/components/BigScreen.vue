<template>
  <div>
    <div class="dp_title">
      全国项目数据总览
    </div>
    <div class="container">
      <!-- 头部 -->
      <partHeader ref="partheader" />
      <!-- 图表 -->
      <el-row :gutter="20" type="flex">
        <!-- 左 -->
        <el-col :span="6">
          <el-row>
            <el-col :span="24">
              <partOne ref="partone" @toPartTwo="getPartTwoParams" />
            </el-col>
          </el-row>
          <el-row style="margin-top: .001rem;">
            <el-col :span="24">
              <partTwo ref="parttwo" @toPartThree="getPartFourParams" />
            </el-col>
          </el-row>
        </el-col>
        <!-- 中 -->
        <el-col :span="12">
          <!-- <el-row>
            <el-col :span="24"> -->
              <partThree ref="partthree" />
            <!-- </el-col>
          </el-row> -->
        </el-col>
        <!-- 右 -->
        <el-col :span="6">
          <el-row>
            <el-col :span="24">
              <partFour ref="partfour" @toPartFive="getPartFiveParams" />
            </el-col>
          </el-row>
          <el-row style="margin-top: .18rem;">
            <el-col :span="24">
              <partFive ref="partfive" @toPartThree="getPartThreeParams" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import chinaJson from "../../static/china.json";
import partHeader from "./partHeader.vue";
import partOne from "./partOne.vue";
import partTwo from "./partTwo.vue";
import partThree from "./partThree.vue";
import partFour from "./partFour.vue";
import partFive from "./partFive.vue";
export default {
  name: "BigScreen",
  components: {
    partHeader,
    partOne,
    partTwo,
    partThree,
    partFour,
    partFive
  },
  data() {
    return {
      projectname: ""
    };
  },
  mounted() {
    // setInterval(()=>{
    //   var header = this.$refs.partheader;
    //   var partone = this.$refs.partone;
    //   header.partHeader();
    //   partone.partOne();
    // },1000*60*15)
  },
  methods: {
    getPartTwoParams(param) {
      this.$store.commit("setCustomer", param);
      this.$store.commit("setAll", true);
      let _this = this.$refs.parttwo;
      _this.customer = param;
      _this.curindex = -1;
      _this.partTwo();
    },
    getPartFourParams(param) {
      this.projectname = param;
      let _this = this.$refs.partfour;
      _this.project = param;
      _this.toSite();
    },
    getPartFiveParams(param, param1) {
      let _this = this.$refs.partfive;
      _this.site = param;
      _this.name = param1;
      _this.project = this.projectname;
      _this.toLine();
    },
    getPartThreeParams(param, param1) {
      let _this = this.$refs.partthree;
      _this.project = this.projectname;
      _this.name = param1;
      _this.line = param;
      _this.toOrder();
    }
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background-color: #122842;
}

::-webkit-scrollbar-thumb {
  background-color: #4fd1ad;
}

::-webkit-scrollbar-button {
  background-color: #03223f;
}

::-webkit-scrollbar-corner {
  background-color: #03223f;
}

/* 滚动条的滑轨背景颜色 滑块颜色 滑轨两头的监听按钮颜色 横向滚动条和纵向滚动条相交处尖角的颜色*/

body {
  color: #ffffff;
  /* background-image: url(../../static/dpbg.png); */
  background-color: #01182f;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  margin: 0px;
}

.dp_title {
  width: 100%;
  height: 0.41rem;
  background-image: url(../../static/header.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  line-height: 0.41rem;
  font-weight: bold;
  font-size: 0.17rem;
  color: #ffffff;
  text-align: center;
}

.container {
  margin: 0px 20px;
}

.dp_part1 {
  padding-bottom: 15px;
  margin-top: 25px;
}

.dp_line_common {
  display: none;
  height: 2px;
  width: 100%;
  background: linear-gradient(to left, #001831, #416e78, #001831);
}

.dp_arrow {
  padding: 0.1rem 0px 0rem;
}
.arrow {
  width: 0.12rem;
  height: 0.08rem;
}

.grid-content {
  position: relative;
  padding: 6px 0px;
}

.grid-content-part3 {
  background-color: #03223f;
}

.dp_part_title_common {
  margin: 0.1rem 0px;
  font-size: 0.11rem;
  font-weight: bold;
}

.marbotm5 {
  margin-bottom: 5px;
}

.dp_part3_echartitle {
  font-size: 0.08rem;
}

.font12 {
  font-size: 0.07rem;
}

.font25 {
  font-size: 0.16rem;
}

.mar15 {
  margin: 0px 15px;
}

.boxlt {
  width: 7px;
  height: 7px;
  border: 1px solid #68b6a3;
  border-right: 0px;
  border-bottom: 0px;
  left: 0px;
  top: 0px;
  position: absolute;
}

.boxlb {
  width: 5px;
  height: 5px;
  border: 1px solid #68b6a3;
  border-right: 0px;
  border-top: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}

.boxrt {
  width: 5px;
  height: 5px;
  border: 1px solid #68b6a3;
  border-left: 0px;
  border-bottom: 0px;
  right: 0px;
  top: 0px;
  position: absolute;
}

.boxrb {
  width: 5px;
  height: 5px;
  border: 1px solid #68b6a3;
  border-left: 0px;
  border-top: 0px;
  bottom: 0px;
  right: 0px;
  position: absolute;
}
</style>
