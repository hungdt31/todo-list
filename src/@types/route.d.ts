declare module '@route' {
  import type { ComponentType } from 'react';
  interface RouteItem {
    path: string;
    element: ComponentType;
  }

  export interface RouteGroup {
    layout: ComponentType;
    routes: RouteItem[];
  }
}
