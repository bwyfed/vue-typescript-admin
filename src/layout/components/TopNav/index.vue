<template>
  <div class="top-navbar">
    <div v-if="!isMobile" class="top-nav">
      <div class="top-nav-content">
        <el-row :gutter="20">
          <el-col :span="3">
            <router-link class="logo-link" to="/about">
              <img
                class="logo"
                src="../../../assets/logo.jpg"
                alt="company logo"
              />
            </router-link>
          </el-col>
          <el-col :span="16">16</el-col>
          <el-col :span="5">5</el-col>
        </el-row>
      </div>
    </div>
    <div v-else class="top-nav">
      <div class="top-nav-mobile">
        <div class="mobile-logo">mobile logo</div>
        <div class="title">title</div>
        <div class="menu">menu</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppModule, DeviceType } from '@/store/modules/app';
import { constantRoutes } from '@/router/index';
@Component({
  name: 'TopNav'
})
export default class extends Vue {
  get isMobile() {
    return AppModule.device === DeviceType.Mobile;
  }
  get routes() {
    return constantRoutes;
  }
}
</script>
<style lang="less" scoped>
.top-nav {
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  background-color: aqua;
  .top-nav-content {
    // width: 1200px; // 前台页面设置内容宽度为1200px
    width: 100%;
    margin: 0 auto;
    .logo-link {
      display: block;
      line-height: 1;
      .logo {
        height: 60px;
        margin: 0;
        border-radius: 50%;
        padding-top: 0;
      }
    }
  }
}
</style>
