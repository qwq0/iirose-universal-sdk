import * as IIROSE_Vars from './iirose/vars';
import { EventEmitter } from './lib/events';
import NetworkEvents from './net'
import { SidebarItem } from './ui/sidebar';
import { WebWindow } from './ui/window';

const globalExports: {
  iirose: typeof IIROSE_Vars,
  events: {
    [index: string]: EventEmitter
  },
  ui: {
    [index: string]: {
      [index: string]: any
    }
  },
  test: any
} = {
  iirose: IIROSE_Vars,
  events: {
    iirose: NetworkEvents()
  },
  ui: {
    sidebar: {
      ItemBlock: SidebarItem,
      WebWindow: WebWindow
    }
  },
  test: {}
}

// @ts-ignore
window.OwOSDK = globalExports;

export default globalExports;


(function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "laqp9vyrrp");

// @ts-ignore
if (module.hot) module.hot.accept();

// const w = new WebWindow({
//   title: "test",
//   icon: {
//     type: "text",
//     text: "喵"
//   },
//   size: {
//     resize: true,
//     width: 500,
//     height: 500
//   },
//   id: "test"
// })

// w.init()
// w.show()