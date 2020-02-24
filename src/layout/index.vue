<template>
  <el-container :class="classObj" class="app-wrapper">
    <el-header>
      <top-navbar></top-navbar>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar v-if="update" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import ResizeMixin from './mixin/ResizeHandler';
import { DeviceType } from '../store/modules/app';
import { TopNavbar, Sidebar } from './components';

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
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
