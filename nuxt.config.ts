import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { pwa } from "./setting/pwa";
import { appDescription } from "./constants/index";
import { pagesExtend } from "./pages-extend";
import { pagesGenerateExclude } from "./pages-exclude";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/formatInTimeZone"]
          : [],
    },
    plugins: [
      AutoImport({
        imports: [
          {
            "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  css: [
    "@kirklin/reset-css/kirklin.css",
  ],

  colorMode: {
    classSuffix: "",
  },

  hooks: {
    "pages:extend": pages => pagesExtend(pages),
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: pagesGenerateExclude,
    },
  },

  app: {
    rootId: "app",
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
});
