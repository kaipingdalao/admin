/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout";
// import { Keyboard } from "admin-component";
import { Keyboard } from "./keyboard.vue";

const chartsRouter = {
  path: "/charts2",
  component: Layout,
  redirect: "noRedirect",
  name: "Charts2",
  meta: {
    title: "Charts2",
    icon: "chart",
  },
  children: [
    {
      path: "keyboard",
      // component: Keyboard,
      component: () => import('./keyboard'),
      name: "KeyboardChart",
      meta: { title: "Keyboard Chart2", noCache: true },
    }
  ],
};

export default chartsRouter;
