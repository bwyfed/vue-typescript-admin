import Vue, { VueConstructor } from 'vue';

export interface RouteMeta {
  title: string;
  icon: string;
  affix?: boolean;
  noCache?: boolean;
  breadcrumb?: boolean;
  activeMenu?: string;
  roles?: string[];
}

export interface children {
  name: string; // the name is used by <keep-alive> (must set!!!)
  path: string;
  component: () => void;
  redirect?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  meta: RouteMeta;
  children?: children[];
  fullPath: string;
}

export interface IRouteBasic {
  path: string;
  name: string;
  redirect?: string;
  component?: VueConstructor | (() => Promise<typeof import('*.vue')>);
  hidden?: boolean;
}

export interface RouteLayoutInterface extends IRouteBasic {
  redirect?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  meta: RouteMeta;
  children?: children[];
}
