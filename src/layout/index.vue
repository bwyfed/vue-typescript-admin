<template>
  <el-container :class="classObj" class="app-wrapper">
    <header class="topnav-container">
      <top-navbar></top-navbar>
    </header>
    <div class="main-wrapper">
      <sidebar class="sidebar-container" v-if="update" />
      <main class="main-container">
        <router-view />
      </main>
    </div>
  </el-container>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import ResizeMixin from './mixin/ResizeHandler';
import { DeviceType } from '../store/modules/app';
import { TopNavbar, Sidebar } from './components';
import variables from '@/styles/_variables.less';

@Component({
  name: 'Layout',
  components: { TopNavbar, Sidebar },
})
export default class extends mixins(ResizeMixin) {
  private update = true;
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile,
    };
  }
  @Watch('$route')
  private needRefresh() {
    this.update = false;
    this.$nextTick(() => {
      this.update = true;
    });
  }
}
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  // line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.app-wrapper {
  .clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .topnav-container {
    height: @topBarHeight;
    // overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .main-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: @topBarHeight;
    border-top: 1px solid #eee;
    .sidebar-container {
      transition: width 0.5s;
      width: @sideBarWidth !important;
      height: 100%;
      position: fixed;
      top: calc(@topBarHeight + 1px);
      left: 0;
      bottom: 0;
      z-index: 1001;
      font-size: 0;
      overflow: hidden;
      border-right: 1px solid #eee;
    }
    .main-container {
      min-height: 100%;
      transition: margin-left 0.5s;
      margin-left: @sideBarWidth;
      position: relative;
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}
</style>
