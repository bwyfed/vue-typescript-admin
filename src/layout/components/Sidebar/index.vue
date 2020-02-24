<template>
  <div class="sidebar-container">
    <div wrap-class="scrollbar-wrapper">
      <el-menu
        :router="true"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item
          v-for="route in routes"
          :key="route.path"
          :route="route.fullPath"
          :index="route.fullPath"
          :is-collapse="isCollapse"
        >
          <svg-icon v-if="route.meta.icon" :name="route.meta.icon" />
          <span v-if="route.meta.title" slot="title">{{
            $t('route.' + route.meta.title)
          }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import variables from '@/styles/_variables.less';

@Component({
  name: 'SideBar',
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get routes() {
    return AppModule.currentSecondaryRoute;
  }

  get variables() {
    return variables;
  }

  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    // if (meta.activeMenu) {
    //   return meta.activeMenu;
    // }
    return path;
  }

  get isCollapse() {
    return !this.sidebar.opened;
  }
}
</script>

<style lang="less" scoped></style>
