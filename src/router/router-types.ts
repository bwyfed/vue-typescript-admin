import Vue, { VueConstructor } from "vue";

export interface RouteMeta {
  title: string;
  icon: string;
  affix?: boolean;
  noCache?: boolean;
  breadcrumb?: boolean;
  activeMenu?: string;
  roles?: string[];
}

interface children {
  name: string; // the name is used by <keep-alive> (must set!!!)
  path: string;
  component: () => void;
  redirect?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  meta?: RouteMeta;
  children?: children[];
}

export interface RouteLayoutInterface {
  path: string;
  name?: string;
  component: VueConstructor;
  redirect?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  meta?: RouteMeta;
  children?: children[];
}
