import type { NuxtPage } from "nuxt/schema";

function transformPath(pages: NuxtPage[]) {
  for (const page of pages) {
    page.path = page.path.toLowerCase();
    if (page.children?.length) {
      transformPath(page.children);
    }
  }
}

export function pagesExtend(pages: NuxtPage[]) {
  transformPath(pages);

  // pages.push({
  //   path: "/virtual-page",
  //   name: "virtual-page",
  //   meta: {
  //     auth: true,
  //   },
  // });
}
