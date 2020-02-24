import { Component, Vue, Watch } from 'vue-property-decorator';
import { AppModule, DeviceType } from '@/store/modules/app';
import { constantRoutes } from '@/router';

const WIDTH = 992; // refer to Bootstrap's responsive design

@Component({
  name: 'ResizeMixin',
})
export default class extends Vue {
  get device() {
    return AppModule.device;
  }

  get sidebar() {
    return AppModule.sidebar;
  }

  @Watch('$route')
  private onRouteChange() {
    // 刷新页面或者第一次进入页面的时候，此方法不执行
    const route = this.$route;
    if (this.device === DeviceType.Mobile && this.sidebar.opened) {
      AppModule.CloseSideBar(false);
    }
    this.setSidebarRoutes();
  }

  beforeMount() {
    console.log('ResizeHandler beforeMount');
    window.addEventListener('resize', this.resizeHandler);
    this.setSidebarRoutes();
  }

  mounted() {
    console.log('ResizeHandler mounted');
    const isMobile = this.isMobile();
    if (isMobile) {
      AppModule.ToggleDevice(DeviceType.Mobile);
      AppModule.CloseSideBar(true);
    }
  }

  beforeDestroy() {
    console.log('ResizeHandler beforeMount');
    window.removeEventListener('resize', this.beforeDestroy);
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

  private resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile();
      AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop);
      if (isMobile) {
        AppModule.CloseSideBar(true);
      }
    }
  }

  private setSidebarRoutes() {
    console.log('setSidebarRoutes');
    let redirectedFrom = this.$route.redirectedFrom;
    if (!redirectedFrom || redirectedFrom === '/') {
      let path = this.$route.matched[0].path;
      if (path === '') {
        path = '/';
      }
      redirectedFrom = path;
    }
    const whichRoute = constantRoutes.filter(val => {
      return val.path === redirectedFrom;
    });
    if (whichRoute.length === 1) {
      console.log('setSidebarRoutes, whichRoute', whichRoute[0]);
      AppModule.SetCurrentSecondaryRoute(whichRoute[0].children);
    }
  }
}
