import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "@/presentation/views/HomeView.vue";
import { defineAsyncComponent } from "vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: 'Home',
    component: Home,
    meta: {
      layout: defineAsyncComponent(
        () => import("@/presentation/layouts/LayoutDefault.vue")
      )
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
