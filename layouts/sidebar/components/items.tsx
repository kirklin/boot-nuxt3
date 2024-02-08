import { h } from "vue";
import { RouterLink } from "vue-router";
import type { MenuMixedOption } from "naive-ui/es/menu/src/interface";
import { renderIcon } from "~/components/Icon";

const BlankIcon = "carbon:document-blank";

export default function getItems(mode: "vertical" | "horizontal", collapsed: boolean): MenuMixedOption[] {
  return [
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: "BlankPage",
            },
          },
          { default: () => "Blank Page" },
        ),
      key: "BlankPage",
      icon: renderIcon(BlankIcon),
    },
  ];
}
