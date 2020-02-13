// app模块的interface
interface sidebar {
  opened: boolean;
  withoutAnimation: boolean;
}
export interface AppState {
  sidebar: sidebar;
  device: string;
  size: string;
}

export interface BoyState {
  currentFlower: number;
  braveScore: number;
}

export interface GirlState {
  currentFlower: number;
}
