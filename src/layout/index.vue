<template>
  <el-container :class="classObj" class="app-wrapper">
    <el-header>
      <top-navbar></top-navbar>
    </el-header>
    <el-container>
      <el-aside width="200px">{{
        $t('navbar.profile') + '-' + $t('el.datepicker.today')
      }}</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import ResizeMixin from './mixin/ResizeHandler';
import { DeviceType } from '../store/modules/app';
import { TopNavbar } from './components';

@Component({
  name: 'Layout',
  components: { TopNavbar }
})
export default class extends mixins(ResizeMixin) {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile
    };
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
