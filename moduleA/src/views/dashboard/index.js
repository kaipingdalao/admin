export default {
  path: "/",
  component: Layout,
  redirect: "/dashboard",
  children: [
    {
      path: "dashboard",
      component: () => import("./dashboard"),
      name: "Dashboard",
      meta: { title: "Dashboard", icon: "dashboard", affix: true },
    },
  ],
};
