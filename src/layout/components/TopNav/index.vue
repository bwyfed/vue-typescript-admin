<template>
  <div class="top-navbar">
    <div v-if="!isMobile" class="top-nav">
      <div class="top-nav-content">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content">
              <router-link class="logo-link" to="/">
                <!-- <img
                class="logo"
                src="../../../assets/logo.jpg"
                alt="company logo"
              /> -->
                <h3>智规智优仿真</h3>
              </router-link>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content">
              <el-menu
                :router="true"
                :default-active="activeMenu"
                :background-color="variables.topBarMenuBg"
                :text-color="variables.topBarMenuText"
                :active-text-color="variables.topBarMenuActiveText"
                mode="horizontal"
              >
                <el-menu-item
                  v-for="route of routes"
                  :key="route.name"
                  :index="route.path"
                  :route="route.path"
                >
                  <template v-if="!route.hidden && route.meta">
                    <svg-icon
                      v-if="route.meta.icon"
                      :name="route.meta.icon"
                    ></svg-icon>
                    <span v-if="route.meta.title" slot="title">{{
                      $t('route.' + route.meta.title)
                    }}</span>
                  </template>
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content nav-right">
              <el-button size="small" type="primary">登录</el-button>
              <el-button size="small" type="danger">注册</el-button>
            </div>
          </el-col>
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { AppModule, DeviceType } from '@/store/modules/app';
import { constantRoutes } from '@/router/index';
import variables from '@/styles/_variables.less';
@Component({
  name: 'TopNav',
})
export default class extends Vue {
  get isMobile() {
    return AppModule.device === DeviceType.Mobile;
  }
  get routes() {
    return constantRoutes;
  }

  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the top nav bar will highlight the path you set
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }

  get variables() {
    return variables;
  }
}
</script>
<style lang="less" scoped>
.top-nav {
  width: 100%;
  // border-bottom: 1px solid #eeeeee;
  // background-color: aqua;
  .top-nav-content {
    // width: 1200px; // 前台页面设置内容宽度为1200px
    width: 100%;
    margin: 0 auto;
    .grid-content {
      height: @topBarHeight;
      &.nav-right {
        display: flex;
        align-items: center;
      }
    }
    .logo-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      h3 {
        margin: 0;
      }
      .logo {
        height: @topBarHeight;
        margin: 0;
        border-radius: 50%;
        padding-top: 0;
      }
    }

    .el-menu--horizontal > .el-menu-item {
      height: @topBarHeight;
      line-height: @topBarHeight;
    }
    .el-menu--horizontal {
      border-bottom: none;
    }
  }
}
</style>
