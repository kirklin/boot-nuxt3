import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin } from "#app";

interface NuxtMeta {
  htmlAttrs?: string;
  headAttrs?: string;
  bodyAttrs?: string;
  headTags?: string;
  bodyScriptsPrepend?: string;
  bodyScripts?: string;
};

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp);
    const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;
    nuxtApp.ssrContext = nuxtApp.ssrContext || undefined;
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.renderMeta = () => {
        if (!originalRenderMeta) {
          return {
            headTags: collect(),
          };
        }
        const originalMeta = originalRenderMeta();
        if ("then" in originalMeta) {
          return originalMeta.then((resolvedOriginalMeta: NuxtMeta) => {
            return {
              ...resolvedOriginalMeta,
              headTags: resolvedOriginalMeta.headTags + collect(),
            };
          });
        } else {
          return {
            ...originalMeta,
            headTags: originalMeta.headTags + collect(),
          };
        }
      };
    }
  }
});
