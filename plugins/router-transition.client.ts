// The page transition could create issues in Nuxt projects with current versions.
// There are methods to avoid these problems, and Pinx provides 2 of them.
// By default, Method A is used.

// You can find Method B in the file /middleware/route.global.ts

// Method A: involves pausing navigation until the page transition is considered complete.

/*
export default defineNuxtPlugin(nuxtApp => {})
*/

// https://github.com/nuxt/nuxt/issues/13350#issuecomment-1649356108
import type { Router } from "vue-router";
import { defineNuxtPlugin } from "#app";

interface CustomRouter extends Router {
  running?: boolean;
  nextRoute?: string | null;
}

export default defineNuxtPlugin((nuxtApp) => {
  const customRouter: CustomRouter = useNuxtApp().$router;

  nuxtApp.hook("page:start", () => {
    customRouter.running = false;
    customRouter.beforeEach((to, _from, next) => {
      if (customRouter.running) {
        next(true);
      } else {
        customRouter.nextRoute = to.fullPath;
        next(false);
      }
    });
  });
  nuxtApp.hook("page:transition:finish", () => {
    customRouter.running = true;
    if (customRouter.nextRoute) {
      customRouter.push(customRouter.nextRoute);
      customRouter.nextRoute = null;
    }
  });
});
